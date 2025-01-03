const CAT_URL = 'https://via.placeholder.com/40?text=Cat';
const MOUSE_URL = 'https://via.placeholder.com/40?text=Mouse';
const APPLE_URL = 'https://via.placeholder.com/40?text=Apple';
const SHOE_URL = 'https://via.placeholder.com/40?text=Shoe';

let cat, mouse, objects = [];
let isLoaded = false;

function preloadImages(callback) {
  cat = loadImage(CAT_URL, onLoadSuccess, onLoadError);
  mouse = loadImage(MOUSE_URL, onLoadSuccess, onLoadError);
  objects = [
    loadImage(APPLE_URL, onLoadSuccess, onLoadError),
    loadImage(SHOE_URL, onLoadSuccess, onLoadError)
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
