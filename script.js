const vowels = document.querySelectorAll(".vowel");
const diphthongs = document.querySelectorAll(".diphthong")
const pconsonants = document.querySelectorAll(".consonant");
const phonemes = document.querySelectorAll(".phoneme");
const labels = document.querySelectorAll(".label");
const dialectSelect = document.getElementById('dialect_selector');
const diArrow = document.getElementById('diphthong_arrow')
let inventory = []
let mouseDownOn = null
const canvases = document.querySelectorAll(".vowel_canvas");
const vowelChartLines = [
  [17, 20, 330, 20],
  [60, 110, 330, 110],
  [105, 200, 330, 200],
  [150, 290, 330, 290],
  [17, 20, 150, 290],
  [175, 20, 240, 290],
  [330, 20, 330, 290],
]
const GAE = ["ncnfu", "cfu", "ncnbr", "cbr", "omfu", "cmfu", "mcv", "mbr", "nofv", "nocv", "ocu", "obr", "bn", "an", "vn", "-bp", "bp", "-ap", "ap", "-vp", "vp", "-paa", "paa", "-ldnsf", "ldnsf", "-dnsf", "dnsf", "-asf", "asf", "pasf", "-pasf", "-gnsf", "alap", "paa", "pa", ""]
const dialects = {
  "empty": [],
  "GAE": GAE
}

var string = "Capricornncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobrncnfucfuncnbrcbromfucmfumcvmbrnofvnocvocuobr";
var compressed = LZString.compressToEncodedURIComponent(string);
string = LZString.decompressFromEncodedURIComponent(compressed);


let drawLine = function(canvas, x1, y1, x2, y2) {
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', "black");
  line.setAttribute('stroke-width', "1");
  canvas.appendChild(line)
}

canvases.forEach(function(canvas, i, listObj) {
  for (var coord of vowelChartLines) {
    drawLine(canvas, ...coord);
  }
})

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

let updatePhonemeArrow = function(start=null, end=null) {
if (start == null && end == null) {
console.log("Error updating phoneme arrow")
}
else {
if (start != null) {
diArrow.setAttribute('x1', start[0])
diArrow.setAttribute('y1', start[1])
}
if (end != null) {
diArrow.setAttribute('x2', end[0])
diArrow.setAttribute('y2', end[1])
}
}
}

document.addEventListener('mousemove', function(e) {
e.preventDefault()
  let hint = document.getElementById('no_audio');
  let left = e.pageX;
  let top = e.pageY;
  hint.style.left = left + 'px';
  hint.style.top = top + 'px';
  if (e.buttons != 1) {
  mouseDownOn = null
  }
  else if (mouseDownOn != null) {
  mouse_left = e.pageX - $( "#di_overlay").offset().left
  mouse_top = e.pageY -$( "#di_overlay").offset().top
  updatePhonemeArrow(start=diCanvasPosition(mouseDownOn), 
  end=[mouse_left, mouse_top])
  diArrow.setAttribute('stroke-width', 3)
  }
});

document.addEventListener('mouseup', function(e) {
diArrow.setAttribute('stroke-width', 0)
})

dialectSelect.addEventListener('change', function handleChange(event) {
  dialect = event.target.value;
  if (dialect == "null") {
    return
  }
  phonemes.forEach(function(currentValue, currentIndex, listObj) {
    setPhoneme(currentValue.id, dialects[dialect].includes(currentValue.id) ? 1 : 0);
  })
})

diphthongs.forEach(function(currentValue, currentIndex, listObj) {
  currentValue.addEventListener("contextmenu", function(e) {
    e.preventDefault()
  })
  currentValue.addEventListener("mousedown", function(e) {
  e.preventDefault()
if (e.buttons != 0) {
mouseDownOn = currentValue.id
}
  })
  currentValue.addEventListener("mouseup", function (e) {
  if (e.button == 0) {
  if (mouseDownOn != null && currentValue.id != mouseDownOn) {
  console.log("dragged from " + mouseDownOn + " to " + currentValue.id + ".")
  console.log(diCanvasPosition(currentValue.id))
  let arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
  start = diCanvasPosition(mouseDownOn)
  end = diCanvasPosition(currentValue.id)
  start_name = mouseDownOn.split("_")[1]
  end_name = currentValue.id.split("_")[1]
  arrow_name = start_name + "_" + end_name
  console.log(arrow_name)
  arrow.setAttribute('x1', start[0])
  arrow.setAttribute('y1', start[1])
  arrow.setAttribute('x2', end[0])
  arrow.setAttribute('y2', end[1])
  arrow.setAttribute('id', arrow_name)
  arrow.setAttribute('stroke', "#45a5ff")
  arrow.setAttribute('stroke-width', 5)
  arrow.setAttribute('marker-end', "url(#arrowhead)")
  document.querySelector("#di_canvas").appendChild(arrow)
  arrow.addEventListener('mousemove', function(e){console.log(arrow.id)})
  }
  }
  }) 
})

let diCanvasPosition = function(vowel) {
let v = $( "#" + vowel );
let c = $( "#di_overlay");
let top = v.offset().top - c.offset().top + v.height() / 2;
let left = v.offset().left - c.offset().left + v.width() / 2;
return [left, top];
}



phonemes.forEach(function(currentValue, currentIndex, listObj) {
  currentValue.addEventListener("contextmenu", function(e) {
    e.preventDefault()
  })
  if (currentValue.classList.contains("diphthong")) {} else {
    if (document.getElementById(currentValue.id.concat("_", "audio")) == null) {
      currentValue.classList.add("norecording")
    }
    currentValue.addEventListener("mouseup", function(e) {
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
  }
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
