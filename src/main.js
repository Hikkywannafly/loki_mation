"use strict";
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
let music = "music/music.mp3";
let count = 0;
let elemets = document.querySelectorAll(".element");
let audio = document.createElement("audio");

const animationRun = () =>{
  const ramdomFonts = () => {
    elemets.forEach((elemet) => {
      let ramdomFontsIndex =  Math.floor(Math.random() * fonts.length);
      let ramdomFonts = fonts[ramdomFontsIndex];
      elemet.style.fontFamily = ramdomFonts;
    });
  };

  const loopTime =  setInterval(function () {
    ramdomFonts();
  }, 400);
}
const audioRun = () => {
  audio.autoplay = true;
  audio.load();
  audio.addEventListener("load", () =>{audio.play()},true);
  audio.src = music;
}

const finalRun = async () => {
  await audioRun();
   animationRun();
 
};
finalRun();

