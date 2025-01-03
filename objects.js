/* ------------------------------------------------------------------
   IMAGES EN BASE64 (sans appel externe)
   ------------------------------------------------------------------ */

/** Chat (40×40) */
const CAT_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACz0lEQVR4nM2Wz0vTQBjFzx/mUcEbDImpeoNxUKGjAUaQww05MNJBXpaYPcxI2Cr1KnC5ImQjsXmqZbJPXKpe8hPxrHKYk5O9UXqkzzSpG1xAP0hduAkvw+uV7/v/fYKAIAECCAC0sX1LoClAMARYAQwDRCACsAtpZ6OfvoQ39dH2MG9ZD90W/h8M1Ax+2YjGf1vv25bX/9pKM4f7ezexXbqH1nsi4kABNYPS49LfRwcgHAX09mFYgbIb0c4yR3z15PD7xpm/O2ebzqdx2n+UydrJ+NKJ+p23bE790oVOg6+OJ++3xx37DhGO7dw6RVMrq4d66Kd9GcX/xoQQNdp/p3Mc0SQt+Ng30gFxqWu6kGZ5r9YymsMrcKQ7TpmthC/g3Ov0R4wRB93Ce2ZfwON5L5lrlU1SwjoYyjZpo0JKplHeB8+QaZ+oZaa2qcdby4oI2kd6tVBrdeyIpkiMsf2Ul6UM4xpUwYEnSCPwncLicdzHKtLaz5kKwo3s713Tsg4xg9h3rxkSWOne0ov7FT+AVAG1MZtE2zPSyTC5HC941wxADQaClMGnKsgn44TVmTZHkQlsHn+fCwybwgM/muqgaawWw+1xHB1TJfpKI4DEYzS+7ehvMKsfWoFSiioZ1AqDZ8+Rt9r0+CKAoEmGUbDANHW8Fu9VSjIkAJo19xdtrxyCYSdRuhXrcKcTqN3ddxQ1BnZbmQn03Lk+mXslkqK4Rx6zeql8VsUaEjKaWDOAx6GAta88iWzt3XHpAL2twThwLORH/vWF8mwILu6BJqxzC7PVtDQwAUS8ADON2bOt5iuyLu8r8owGIMr+2jc32KJsMmToaNU1nK8kYh6G3Pn6Nbb9rgdvgNsHIVgk5/A9EjGxy4Cxu31AAAAAElFTkSuQmCC";

/** Souris (40×40) */
const MOUSE_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABcElEQVR4nO3WTy7EABCF4Z9EAsJAgXEOJBjs0wMEzDO3SDeP8ckMAfJ38GzaxomNUS+O5zux13d+Z/C/AdbTKDUxvxe7fALgADUJAkVfAxeKzkkFIO0ChMb4N/LC2ppNVXvwTrqHr+pxdbzVnjNkMA0QoXGYE/PQYnZhnRP+b7rJe2xiUBx7yBeQZ+IPe3yufUb+KEyZ7zwO6JckZXE0VYPk+X8dwZloCLfAAqCi1Cdo14VDyCAquiaYs87Wz1tDAFkmn56F5fegKeSYwPUQ2uxPwDZZkxRyJLAhpsy3hiCncwpFLj9ZuZJiCA5W7pV/5+HTEjtdeKglH6rns63eu/roQfwJPE3E63rqtrVeKwBGv3UkEW2IEqYfOJ/EpNhRHlGaDx/+gc8XSzAp704LRzyZ5k9jIlnomVuf7fbrv94rDK4CV6Wx+65/FCP4f7BLsFN304PIG0AAAAASUVORK5CYII=";

/** Pomme (40×40) */
const APPLE_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABSElEQVR4nO2WwXHCMBDF6/StNE3YOdRGJok+Qb03m5WxAcYaGaikzxd2J6HsDJNeIcDZGh4g8MFuGcqN7XXisfNHuMvAsPHB8JYAXiM6TAeaZgH+ewwYdZc+9/5vGlm9KZBU8z0PZ6Od33M6p3grj0DM8RLC8BwDD5Tgv86DYMScaIdDli68XeWFeWknri1ACkXPsYP2gcfwAleV/8u/z2usPJ9K3NIoCdBHvImy6uwke1AwIGDxk2Cv+g5iof4CAB6G1p5ZUA1sf0KnB4u/TybI/cRWCJJDmIu9MavV8AAAAAElFTkSuQmCC";

/** Chaussure (40×40) */
const SHOE_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB2UlEQVR4nO3UMU4CURAF4b8KARZWKoDG4uNsBEwMXJWsAxfAPASAAIcRN7cG9FGxhLYhC/rAc622and/I0X9pq6p3kNB08m98sAANkgiIWx6ec9u8HqPex8GAUQAMy3nNU+T7fO2m7+wJSREj1Svwr3C9+QMD3gRNE88CM/ih+8mBeHo1hsIm1+ENol4vI4NulCHxkE7MRG25c+X9CaQLlgWTaR+xxAg8n2B4TAvqrIDf7wl7/Tov3+5CrJvp7MPu9ycOMBg1gggMt6I/ehNjYP4DZoGgc4gAlul72ng4JHAZh4BD6aSTKIFZnqL8kO2RGu5NmxrxVMPd4XoCiuVYMtitGJpr0pClxE1gkT7c2L4gSaVXTC3wBr2G8bwDi0VknMzXZcYAAAAAElFTkSuQmCC";

/* ------------------------------------------------------------------
   Variables globales pour le chargement d'images
   ------------------------------------------------------------------ */
let cat, mouse, objects = [];
let isLoaded = false;

/** 
 * Précharger les images puis appeler un callback quand c'est prêt 
 */
function preloadImages(callback) {
  cat = loadImage(CAT_BASE64, onLoadSuccess, onLoadError);
  mouse = loadImage(MOUSE_BASE64, onLoadSuccess, onLoadError);

  objects = [
    loadImage(APPLE_BASE64, onLoadSuccess, onLoadError),
    loadImage(SHOE_BASE64, onLoadSuccess, onLoadError)
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
