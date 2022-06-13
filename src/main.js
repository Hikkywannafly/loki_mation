"use strict";
let music = "music/music.mp3";
const fonts = [
  "Amatic SC",
  "Fredericka the Great",
  "Indie Flower",
  "Kirang Haerang",
  "Press Start 2P",
  "Rye",
  "Galindo",
  "Princess Sofia",
];
let count = 0;
let elemets = document.querySelectorAll(".element");

const ramdomFonts = function () {
  elemets.forEach((elemet) => {
    let ramdomFontsIndex = Math.floor(Math.random() * fonts.length);
    let ramdomFonts = fonts[ramdomFontsIndex];
    elemet.style.fontFamily = ramdomFonts;
  });
};
const loopTime = setInterval(function () {
  ramdomFonts();
}, 400);
let audio = document.createElement("audio");
audio.autoplay = true;
audio.load();
audio.addEventListener("load",function () {
    audio.play();
},true);
audio.src = music;
