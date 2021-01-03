const Utils = {
  gettronweb() {
    return new Promise((resolve, reject) => {
      const tronLink = {
        installed: !!window.tronWeb,
        loggedIn:
          window.tronWeb && window.tronWeb.defaultAddress.base58 ? true : false,
      };

      let tries = 0;
      let timer = setInterval(() => {
        if (tries >= 30) {
          clearInterval(timer);

          if (!tronLink.installed) {
            reject(new Error("Tron wallet (e.g. TronLink) is not found."));
          }

          if (!tronLink.loggedIn) {
            reject(
              new Error(
                "Connect Tron Wallet: Make sure your Tron wallet (e.g. TronLink) is enabled, and refresh the page."
              )
            );
          }

          resolve(window.tronWeb);
        }

        if (window.tronWeb) {
          tronLink.installed = true;
          if (window.tronWeb.defaultAddress.base58) {
            tronLink.loggedIn = true;
            resolve(window.tronWeb);
          }
        }
        tries++;
      }, 10);
    });
  },
};

export default Utils;
