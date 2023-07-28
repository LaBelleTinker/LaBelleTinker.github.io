let vowels = document.querySelectorAll(".vowel");
var inventory = []
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.moveTo(25, 35)
ctx.lineTo(60,100)
ctx.moveTo(70,125)
ctx.lineTo(105,190)
ctx.moveTo(115,215)
ctx.lineTo(145,280)
ctx.moveTo(45,20)
ctx.lineTo(150,20)
ctx.moveTo(200,20)
ctx.lineTo(305,20)
ctx.stroke()


vowels.forEach(function(currentValue, currentIndex, listObj) {
  currentValue.addEventListener("mousedown", function(e) {
    if (e.button == 2) {
      var audio = document.getElementById(currentValue.id.concat("_", "audio"));
      audio.play();
    }
    if (e.button == 0) {
      var idx = inventory.indexOf(currentValue.id);
      if (idx == -1) {
        inventory.push(currentValue.id)
      } else {
        inventory.splice(idx, 1)
      }
      currentValue.classList.toggle("selected");
    }
  }, false);
});
