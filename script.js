const vowels = document.querySelectorAll(".vowel");
const pconsonants = document.querySelectorAll(".consonant");
const phonemes = document.querySelectorAll(".phoneme");
const labels = document.querySelectorAll(".label");
const dialectSelect = document.getElementById('dialect_selector');
let inventory = []
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d")
const GAE = ["ncnfu", "cfu", "ncnbr", "cbr", "omfu", "cmfu", "mcv", "mbr", "nofv", "nocv", "ocu", "obr", "bn", "an", "vn", "-bp", "bp", "-ap", "ap", "-vp", "vp", "-paa", "paa", "-ldnsf", "ldnsf", "-dnsf", "dnsf", "-asf", "asf", "pasf", "-pasf", "-gnsf", "alap", "paa", "pa", ""]
const dialects = {
  "empty": [],
  "GAE": GAE
}

var string = "Capricornncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobr";
var compressed = LZString.compressToEncodedURIComponent(string);
string = LZString.decompressFromEncodedURIComponent(compressed);

ctx.beginPath()
ctx.moveTo(25, 35)
ctx.lineTo(60, 100)
ctx.moveTo(70, 125)
ctx.lineTo(105, 190)
ctx.moveTo(115, 215)
ctx.lineTo(145, 280)
ctx.moveTo(45, 20)
ctx.lineTo(150, 20)
ctx.moveTo(200, 20)
ctx.lineTo(305, 20)
ctx.moveTo(330, 35)
ctx.lineTo(330, 100)
ctx.moveTo(330, 125)
ctx.lineTo(330, 190)
ctx.moveTo(330, 215)
ctx.lineTo(330, 280)
ctx.moveTo(305, 290)
ctx.lineTo(265, 290)
ctx.moveTo(215, 290)
ctx.lineTo(170, 290)
ctx.moveTo(90, 110)
ctx.lineTo(170, 110)
ctx.moveTo(220, 110)
ctx.lineTo(305, 110)
ctx.moveTo(135, 200)
ctx.lineTo(190, 200)
ctx.moveTo(240, 200)
ctx.lineTo(305, 200)
ctx.moveTo(175, 35)
ctx.lineTo(192, 100)
ctx.moveTo(197, 125)
ctx.lineTo(212, 190)
ctx.moveTo(217, 215)
ctx.lineTo(235, 280)
ctx.stroke()

let setPhoneme = function(phoneme, value) {
  phon = document.querySelector("#".concat(phoneme))
  var idx = inventory.indexOf(phoneme)
  if (value == 0) {
    phon.classList.remove("selected");
    if (idx != -1) {
      inventory.splice(idx, 1)
    }

  } else if (value == 1) {
    phon.classList.add("selected");
    if (idx == -1) {
      inventory.push(phoneme)
    }

  } else {
    if (idx == -1) {
      inventory.push(phoneme)
    } else {
      inventory.splice(idx, 1)
    }
    phon.classList.toggle("selected");

  }
}

document.addEventListener('mousemove', function(e) {
  let hint = document.getElementById('no_audio');
  let left = e.pageX;
  let top = e.pageY;
  hint.style.left = left + 'px';
  hint.style.top = top + 'px';
});

dialectSelect.addEventListener('change', function handleChange(event) {
  dialect = event.target.value;
  if (dialect == "null") {
    return
  }
  phonemes.forEach(function(currentValue, currentIndex, listObj) {
    setPhoneme(currentValue.id, dialects[dialect].includes(currentValue.id) ? 1 : 0);
  })
})

phonemes.forEach(function(currentValue, currentIndex, listObj) {
  currentValue.addEventListener("contextmenu", function(e) {
    e.preventDefault()
  })
  if (document.getElementById(currentValue.id.concat("_", "audio")) == null) {
    currentValue.classList.add("norecording")
  }
  currentValue.addEventListener("mousedown", function(e) {
    if (e.button == 2) {
      if (currentValue.classList.contains("norecording")) {
        hint = document.getElementById("no_audio");
        hint.style.display = "flex"
        setTimeout(() => {
          hint.style.display = "none";
        }, 5000);
      } else {
        var audio = document.getElementById(currentValue.id.concat("_", "audio"));
        audio.play();
      }

    }
    if (e.button == 0) {
      setPhoneme(currentValue.id, -1);
      dialectSelect.value = "null"
    }
  }, false);
});

labels.forEach(function(currentValue, currentIndex, listObj) {
  currentValue.addEventListener("mousedown", function(e) {
    if (e.button == 0) {
      currentValue.classList.add("selected");
      inners = currentValue.offsetParent.offsetParent.querySelectorAll(".inner_container")
      labels.forEach(function(label, i, obj) {
        if (label != currentValue) {
          label.classList.remove("selected")
        }
      })
      inners.forEach(function(inner, innerIndex, innerListObj) {
        if (inner.id == "labels") {} else if (inner.id == currentValue.id.split("_")[0]) {
          console.log("select" + currentValue.id);
          inner.style.display = "flex";
        } else {
          console.log("unselect" + currentValue.id);
          inner.style.display = "none";
        }
      })
    }
  }, false);
});
