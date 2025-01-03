const CAT_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACz0lEQVR4nM2Wz0vTQBjFzx/mUcEbDImpeoNxUKGjAUaQww05MNJBXpaYPcxI2Cr1KnC5ImQjsXmqZbJPXKpe8hPxrHKYk5O9UXqkzzSpG1xAP0hduAkvw+uV7/v/fYKAIAECCAC0sX1LoClAMARYAQwDRCACsAtpZ6OfvoQ39dH2MG9ZD90W/h8M1Ax+2YjGf1vv25bX/9pKM4f7ezexXbqH1nsi4kABNYPS49LfRwcgHAX09mFYgbIb0c4yR3z15PD7xpm/O2ebzqdx2n+UydrJ+NKJ+p23bE790oVOg6+OJ++3xx37DhGO7dw6RVMrq4d66Kd9GcX/xoQQNdp/p3Mc0SQt+Ng30gFxqWu6kGZ5r9YymsMrcKQ7TpmthC/g3Ov0R4wRB93Ce2ZfwON5L5lrlU1SwjoYyjZpo0JKplHeB8+QaZ+oZaa2qcdby4oI2kd6tVBrdeyIpkiMsf2Ul6UM4xpUwYEnSCPwncLicdzHKtLaz5kKwo3s713Tsg4xg9h3rxkSWOne0ov7FT+AVAG1MZtE2zPSyTC5HC941wxADQaClMGnKsgn44TVmTZHkQlsHn+fCwybwgM/muqgaawWw+1xHB1TJfpKI4DEYzS+7ehvMKsfWoFSiioZ1AqDZ8+Rt9r0+CKAoEmGUbDANHW8Fu9VSjIkAJo19xdtrxyCYSdRuhXrcKcTqN3ddxQ1BnZbmQn03Lk+mXslkqK4Rx6zeql8VsUaEjKaWDOAx6GAta88iWzt3XHpAL2twThwLORH/vWF8mwILu6BJqxzC7PVtDQwAUS8ADON2bOt5iuyLu8r8owGIMr+2jc32KJsMmToaNU1nK8kYh6G3Pn6Nbb9rgdvgNsHIVgk5/A9EjGxy4Cxu31AAAAAElFTkSuQmCC";

const MOUSE_BASE64 = "data:image/png;base64,...";
const APPLE_BASE64 = "data:image/png;base64,...";
const SHOE_BASE64 = "data:image/png;base64,...";

let cat, mouse, objects = [];
let isLoaded = false;

function preloadImages(callback) {
  cat = loadImage(CAT_BASE64, onLoadSuccess, onLoadError);
  mouse = loadImage(MOUSE_BASE64, onLoadSuccess, onLoadError);
  objects = [
    loadImage(APPLE_BASE64, onLoadSuccess, onLoadError),
    loadImage(SHOE_BASE64, onLoadSuccess, onLoadError),
  ];

  let loaded = 0;

  function onLoadSuccess() {
    loaded++;
    if (loaded === 4) {
      isLoaded = true;
      callback();
    }
  }

  function onLoadError(err) {
    console.error("Erreur de chargement d'image :", err);
  }
}
