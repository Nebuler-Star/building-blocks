const canv = document.getElementById("game-canvas");
const ctx = canv.getContext("2d");

canv.height = window.innerHeight;
canv.width = window.innerWidth;

ctx.fillStyle="green";
ctx.fillRect(200, 200, 200, 200)