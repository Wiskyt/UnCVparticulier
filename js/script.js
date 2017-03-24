var image, logo, gifAnim, logoAnim;
var gifProgress = 0,
    logoProgress = 0;
var logoX = 250;
var gifX = 0, gifY = 0;

window.onload = function() {
    document.getElementById("johnmp3").play();

    image = document.getElementById('fullscreengif');
    logo = document.getElementById('wwelogo');

    setTimeout(() => gifAnim = setInterval(gifAnimation, 20), 4000);
    setTimeout(() => logoAnim = setInterval(logoAnimation, 20), 5000);
}

function gifAnimation() {
   if (100 - gifProgress > 30) {
      image.style.width = (100 - gifProgress) + '%';
      image.style.height = (100 - gifProgress) + '%';
   }

   gifX += 8.48;
   gifY += 1.32;

   image.style.marginLeft = gifX + "px";
   image.style.marginTop = gifY + "px";

   gifProgress++;
   if (gifProgress >= 100) clearInterval(gifAnim);
}

function logoAnimation() {
    logoX -= 5;
    logo.style.marginLeft = logoX + "px";
    if (logoX <= 10) {
        clearInterval(logoAnim);
    }
}