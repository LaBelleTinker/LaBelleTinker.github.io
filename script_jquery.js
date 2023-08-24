// Define globals
const vowels = $(".vowel")
const diphthongs = $(".diphthong")
const pconsonants = $(".consonant");
const phonemes = $(".phoneme");
const labels = $(".label");
const dialectSelect = $('#dialect_selector');
const diArrow = $('#diphthong_arrow');
const canvases = $(".vowel_canvas");
const vowelChartLines = [
    [17, 20, 330, 20],
    [60, 110, 330, 110],
    [105, 200, 330, 200],
    [150, 290, 330, 290],
    [17, 20, 150, 290],
    [175, 20, 240, 290],
    [330, 20, 330, 290],
]
const GAE = [
    "ncnfu",
    "cfu",
    "ncnbr",
    "cbr",
    "omfu",
    "cmfu",
    "mcv",
    "mbr",
    "nofv",
    "nocv",
    "ocu",
    "obr",
    "bn",
    "an",
    "vn",
    "-bp",
    "bp",
    "-ap",
    "ap",
    "-vp",
    "vp",
    "-pasa",
    "pasa",
    "-ldnsf",
    "ldnsf",
    "-dnsf",
    "dnsf",
    "-asf",
    "asf",
    "pasf",
    "-pasf",
    "-gnsf",
    "alap",
    "paa",
    "pa",
    "lvf",
    'mbr_ncnbr',
    'ofu_ncnbr',
    'ocu_ncnfu',
    'cmfu_ncnfu',
    'ombr_ncnfu'
]
/* List of dialects. Format:
name (string): phonemes (list of strings) */
const dialects = {
    "empty": [],
    "GAE": GAE
}
const phonemeAudios = {
    'cfu': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg',
    'cfr': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg',
    'ccu': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Close_central_unrounded_vowel.ogg',
    'ccr': 'https://upload.wikimedia.org/wikipedia/commons/6/66/Close_central_rounded_vowel.ogg',
    'cbu': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Close_back_unrounded_vowel.ogg',
    'cbr': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg',
    'ncnfu': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Near-close_near-front_unrounded_vowel.ogg',
    'ncnfr': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Near-close_near-front_rounded_vowel.ogg',
    'ncnbr': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Near-close_near-back_rounded_vowel.ogg',
    'cmfu': 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg',
    'cmfr': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg',
    'cmcu': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Close-mid_central_unrounded_vowel.ogg',
    'cmcr': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Close-mid_central_rounded_vowel.ogg',
    'cmbu': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Close-mid_back_unrounded_vowel.ogg',
    'cmbr': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg',
    'mfu': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mid_front_unrounded_vowel.ogg',
    'mfr': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Mid_front_rounded_vowel.ogg',
    'mcv': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg',
    'mbu': 'https://upload.wikimedia.org/wikipedia/commons/d/d8/%C9%A4%CC%9E_IPA_sound.opus',
    'mbr': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Mid_back_rounded_vowel.ogg',
    'omfu': 'https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg',
    'omfr': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg',
    'omcu': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Open-mid_central_unrounded_vowel.ogg',
    'omcr': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Open-mid_central_rounded_vowel.ogg',
    'ombu': 'https://upload.wikimedia.org/wikipedia/commons/8/80/PR-open-mid_back_unrounded_vowel2.ogg',
    'ombr': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg',
    'nofv': 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg',
    'nocv': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Near-open_central_unrounded_vowel.ogg',
    'ofu': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/PR-open_front_unrounded_vowel.ogg',
    'ofr': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Open_front_rounded_vowel.ogg',
    'ocu': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Open_central_unrounded_vowel.ogg',
    'ocr': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Open_central_rounded_vowel.ogg',
    'obu': 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg',
    'obr': 'https://upload.wikimedia.org/wikipedia/commons/3/31/PR-open_back_rounded_vowel.ogg',
    'bn': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg',
    'ldn': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Labiodental_nasal.ogg',
    'an': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg',
    'rn': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Retroflex_nasal.ogg',
    'pn': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg',
    'vn': 'https://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg',
    'un': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Uvular_nasal.ogg',
    '-bp': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg',
    'bp': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg',
    '-llp': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_linguolabial_stop.ogg',
    'llp': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Voiced_linguolabial_stop.ogg',
    '-dp': 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Voiceless_dental_stop.ogg',
    'dp': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Voiced_dental_stop.ogg',
    '-ap': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg',
    'ap': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg',
    '-rp': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Voiceless_retroflex_stop.oga',
    'rp': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_retroflex_stop.oga',
    '-pp': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Voiceless_palatal_plosive.ogg',
    'pp': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Voiced_palatal_plosive.ogg',
    '-vp': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg',
    'vp': 'https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg',
    '-up': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Voiceless_uvular_plosive.ogg',
    'up': 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Voiced_uvular_stop.oga',
    '-php': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Epiglottal_stop.ogg',
    '-gp': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Glottal_stop.ogg',
    '-dsa': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Voiceless_dental_sibilant_affricate.oga',
    'dsa': 'https://upload.wikimedia.org/wikipedia/commons/1/16/Voiced_dental_sibilant_affricate.oga',
    '-asa': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Voiceless_alveolar_sibilant_affricate.oga',
    'asa': 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Voiced_alveolar_sibilant_affricate.oga',
    '-pasa': 'https://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg',
    'pasa': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg',
    '-rsa': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Voiceless_retroflex_affricate.ogg',
    'rsa': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_retroflex_affricate.ogg',
    '-psa': 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Voiceless_alveolo-palatal_affricate.ogg',
    'psa': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Voiced_alveolo-palatal_affricate.ogg',
    '-bnsa': 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Voiceless_bilabial_affricate.ogg',
    '-ldnsa': 'https://upload.wikimedia.org/wikipedia/commons/8/83/Voiceless_labiodental_affricate.ogg',
    'ldnsa': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Voiced_labiodental_affricate.ogg',
    '-dnsa': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_dental_non-sibilant_affricate.oga',
    'dnsa': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_dental_non-sibilant_affricate.oga',
    '-pansa': 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Voiceless_postalveolar_non-sibilant_affricate.ogg',
    'pansa': 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Voiced_postalveolar_non-sibilant_affricate.ogg',
    '-pnsa': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Voiceless_palatal_affricate.ogg',
    'pnsa': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Voiced_palatal_affricate.ogg',
    '-vnsa': 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Voiceless_velar_affricate.ogg',
    'vnsa': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Voiced_velar_affricate.ogg',
    '-unsa': 'https://upload.wikimedia.org/wikipedia/commons/4/43/Voiceless_uvular_affricate.ogg',
    'unsa': 'https://upload.wikimedia.org/wikipedia/commons/3/35/Voiced_uvular_affricate.ogg',
    '-phnsa': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_epiglottal_affricate.ogg',
    'phnsa': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Voiced_epiglottal_affricate.ogg',
    '-gnsa': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Voiceless_glottal_affricate.ogg',
    '-asf': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg',
    'asf': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg',
    '-pasf': 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg',
    'pasf': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg',
    '-rsf': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Voiceless_retroflex_sibilant.ogg',
    'rsf': 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Voiced_retroflex_sibilant.ogg',
    '-psf': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Voiceless_alveolo-palatal_sibilant.ogg',
    'psf': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Voiced_alveolo-palatal_sibilant.ogg',
    '-bnsf': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Voiceless_bilabial_fricative.ogg',
    'bnsf': 'https://upload.wikimedia.org/wikipedia/commons/3/37/Voiced_bilabial_fricative.ogg',
    '-ldnsf': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Voiceless_labio-dental_fricative.ogg',
    'ldnsf': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Voiced_labio-dental_fricative.ogg',
    '-llnsf': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Voiceless_linguolabial_fricative.ogg',
    '-dnsf': 'https://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg',
    'dnsf': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg',
    '-ansf': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Voiceless_alveolar_non-sibilant_fricative.ogg',
    'ansf': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Voiced_alveolar_non-sibilant_fricative.ogg',
    '-pansf': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_postalveolar_non-sibilant_fricative.ogg',
    'pansf': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Voiced_postalveolar_non-sibilant_fricative.ogg',
    '-pnsf': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_palatal_fricative.ogg',
    'pnsf': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiced_palatal_fricative.ogg',
    '-vnsf': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg',
    'vnsf': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Voiced_velar_fricative.ogg',
    '-unsf': 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Voiceless_uvular_fricative.ogg',
    'unsf': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg',
    '-phnsf': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Voiceless_pharyngeal_fricative.ogg',
    'phnsf': 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Voiced_pharyngeal_fricative.ogg',
    '-gnsf': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg',
    'gnsf': 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Voiced_glottal_fricative.ogg',
    'bapp': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Bilabial_approximant.ogg',
    'ldapp': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Labiodental_approximant.ogg',
    'dapp': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Voiced_dental_approximant.ogg',
    'aapp': 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Alveolar_approximant.ogg',
    'paapp': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Postalveolar_approximant.ogg',
    'rapp': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Retroflex_Approximant2.oga',
    'papp': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg',
    'vapp': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Voiced_velar_approximant.ogg',
    'uapp': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Voiced_Uvular_Approximant.ogg',
    'ldtf': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Labiodental_flap.ogg',
    'atf': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Alveolar_tap.ogg',
    'rtf': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Retroflex_flap.ogg',
    'phtf': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Epiglottal_flap.oga',
    '-bt': 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Voiceless_bilabial_trill_with_aspiration.ogg',
    'bt': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Bilabial_trill.ogg',
    '-at': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Voiceless_alveolar_trill.ogg',
    'at': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg',
    'pat': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Voiced_postalveolar_trill.ogg',
    'rt': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Voiced_retroflex_trill.ogg',
    '-ut': 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Voiceless_uvular_trill.ogg',
    'ut': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Uvular_trill.ogg',
    '-pht': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Voiceless_epiglottal_trill.ogg',
    'pht': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Voiced_epiglottal_trill_2.ogg',
    '-ala': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Voiceless_alveolar_lateral_affricate.ogg',
    'ala': 'https://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_alveolar_lateral_affricate.ogg',
    '-pla': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Voiceless_palatal_lateral_affricate.ogg',
    '-vla': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_velar_lateral_affricate.ogg',
    'vla': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Voiced_velar_lateral_affricate.ogg',
    '-alf': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_alveolar_lateral_fricative.ogg',
    'alf': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Voiced_alveolar_lateral_fricative.ogg',
    '-rlf': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Voiceless_retroflex_lateral_fricative.ogg',
    '-plf': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Voiceless_palatal_lateral_fricative.ogg',
    '-vlf': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Voiceless_velar_lateral_fricative.ogg',
    'vlf': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Voiced_velar_lateral_fricative.ogg',
    'dlap': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Voiced_dental_lateral_approximant.ogg',
    'alap': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg',
    'palap': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Voiced_postalveolar_lateral_approximant.ogg',
    'rlap': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Retroflex_lateral_approximant.ogg',
    'plap': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Palatal_lateral_approximant.ogg',
    'vlap': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Velar_lateral_approximant.ogg',
    'ulap': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Uvular_lateral_approximant.ogg'
}
let inventory = []
let mouseDownOn = null


$(document).ready(function () {
    setUpDocument();
    setUpPhonemes();
    setUpLabels();
    drawVowelSpace();
})


/* Draws a line in an svg with 1px black stroke
Returns the line */
let drawLine = function (canvas, x1, y1, x2, y2) {
    NS = "http://www.w3.org/2000/svg";
    let line = document.createElementNS(NS, "line");
    $(line).attr({
        'x1': x1,
        'x2': x2,
        'y1': y1,
        'y2': y2,
        'stroke': "black",
        'stroke-width': "1px"
    })
    canvas.append(line)
    return (line)
}

let shrinkLine = function (x1, y1, x2, y2, cut) {
    center = [(x1 + x2) / 2, (y1 + y2) / 2]
    length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    if (typeof (cut) == 'string') {
        cut = parseInt(cut) / 100
    }
    else {
        cut = parseInt(cut) / length

    }
    newX1 = x1 * (1 - cut) + center[0] * cut
    newX2 = x2 * (1 - cut) + center[0] * cut
    newY1 = y1 * (1 - cut) + center[1] * cut
    newY2 = y2 * (1 - cut) + center[1] * cut
    return [newX1, newY1, newX2, newY2]
}

let setPhoneme = function (phoneme, value) {
    if (phoneme.includes("_")) {
        let [start, end] = phoneme.split("_")
        setDiphthong(start, end, value)
    }
    else {
        let phon = $("#" + phoneme);
        let idx = inventory.indexOf(phoneme);
        switch (value) {
            case 0:
                phon.removeClass("selected")
                if (idx != -1) {
                    inventory.splice(idx, 1)
                }
                break;
            case 1:
                phon.addClass("selected")
                if (idx == -1) {
                    inventory.push(phoneme)
                }
                break;
            case -1:
                if (idx == -1) {
                    inventory.push(phoneme)
                }
                else {
                    inventory.splice(idx, 1)
                }
                phon.toggleClass("selected")
        }
    }
}

let setDiphthong = function (start, end, value) {
    let phoneme = start + "_" + end
    let glowName = phoneme + "_glow"
    let arrow = $("#" + phoneme)
    let glow = $("#" + glowName)
    let idx = inventory.indexOf(phoneme);
    switch (value) {
        case 0:
            if (arrow.length) {
                arrow.remove()
                glow.remove()
            }
            if (idx != -1) {
                inventory.splice(idx, 1)
            }
            break;
        case 1:
            if (!(arrow.length)) {
                arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
                glow = document.createElementNS("http://www.w3.org/2000/svg", "line");
                startCoords = diCanvasPosition("di_" + start);
                endCoords = diCanvasPosition("di_" + end);
                [x1, y1, x2, y2] = shrinkLine(...startCoords, ...endCoords, 15)
                $(arrow).attr({
                    "x1": x1,
                    "y1": y1,
                    "x2": x2,
                    "y2": y2,
                    "id": phoneme,
                    "class": "di_arrow",
                    "stroke": "#2269ab",
                    "stroke-width": 3,
                    "marker-end": "url(#blue_arrowhead)",
                })
                $(glow).attr({
                    "x1": x1,
                    "y1": y1,
                    "x2": x2,
                    "y2": y2,
                    "id": glowName,
                    "class": "di_arrow_glow",
                    "stroke": "#45a5ff",
                    "stroke-width": 3,
                    "marker-end": "url(#blue_arrowhead)",
                    "filter": "url(#glow)"
                })
                $(arrow).css({ "cursor": "pointer", "pointer-events": "all" })
                $("#di_arrows").append(glow)
                $("#di_arrows").append(arrow)
                $(arrow).click(setDiphthong.bind(null, start, end, 0))
            }
            if (idx == -1) {
                inventory.push(phoneme)
            }
            break;

    }
}

let diCanvasPosition = function (vowel) {
    let v = $("#" + vowel);
    let c = $("#di_overlay");
    let top = v.offset().top - c.offset().top + v.height() / 2;
    let left = v.offset().left - c.offset().left + v.width() / 2;
    return [left, top];
}

let updatePhonemeArrow = function (start = null, end = null) {
    if (start == null && end == null) {
        console.log("Error updating phoneme arrow")
    }
    else {
        if (start != null) {
            diArrow.attr({
                "x1": start[0],
                "y1": start[1]
            })
        }
        if (end != null) {
            diArrow.attr({
                "x2": end[0],
                "y2": end[1]
            })
        }
    }
}



let drawVowelSpace = function () {
    canvases.each(function (index) {
        for (var coord of vowelChartLines) { drawLine($(this), ...coord) }
    })
}

let setUpLabels = function () {
    labels.on("click", function (event) {
        label = $(this)
        label.addClass("selected");
        tabs = label.parent().parent().find(".inner_container").not("#labels");
        labels.not(label).each(function () {
            $(this).removeClass("selected")
        })
        tabs.each(function () {
            if ($(this).attr("id") == label.attr("id").split("_")[0]) {
                $(this).css("display", "flex")
            }
            else {
                $(this).css("display", "none")
            }
        })
    })
}

let setUpDocument = function () {
    $(document).on("mousemove", function (event) {
        event.preventDefault();
        let hint = $("#no_audio"), left = event.pageX, top = event.pageY;
        hint.css({
            "left": left + "px",
            "top": top + "px"
        })
        if (event.buttons != 1) {
            mouseDownOn = null
        }
        else if (mouseDownOn != null) {
            mouse_left = event.pageX - $("#di_overlay").offset().left;
            mouse_top = event.pageY - $("#di_overlay").offset().top;
            updatePhonemeArrow(start = diCanvasPosition(mouseDownOn),
                end = [mouse_left, mouse_top]);
            diArrow.attr(
                "stroke-width", 3
            )
        }
    })
    $(document).on("mouseup", function (event) {
        diArrow.attr("stroke-width", 0)
    })

    canvases.each(function () {
        for (var coord of vowelChartLines) {
            drawLine($(this), ...coord)
        }
    })
    dialectSelect.on("change", function (event) {
        dialect = dialectSelect.val();
        if (dialect != "null") {
            while (inventory.length) {
                setPhoneme(inventory[0], 0)
            }
            for (phoneme of dialects[dialect]) {
                setPhoneme(phoneme, 1)
            }
        }
    })
    $( "#close_help" ).click(function(event) {
        $("#help").css("display", "none")
        $("#blocker").css("display", "none")
        $("body > :not(#help)").css("filter", "none")
        $("body").css("overflow", "overlay")
    })
    $( "#help_button" ).click(function(event) {
        $("#help").css("display", "block")
        $("#blocker").css("display", "block")
        $("body > :not(#help)").css("filter", "blur(5px)")
        $("body").css("overflow", "hidden")

    })
}


let setUpPhonemes = function () {
    monos = phonemes.not(".diphthong")
    monos.each(function () {
        if (!($(this).attr("id") in phonemeAudios)) {
            $(this).addClass("norecording")
        }
    })
    monos.on("contextmenu", function (event) {
        let phonemeId = $(this).attr("id")
        event.preventDefault();
        if ($(this).hasClass("norecording")) {
            hint = $("#no_audio");
            hint.css("display", "flex");
            setTimeout(() => {
                hint.css("display", "none")
            }, 5000);
        }
        else {
            let audioElement = document.createElement("audio");
            audioElement.setAttribute("src", phonemeAudios[phonemeId])
            audioElement.play();
        }
    })
    monos.on("click", function (event) {
        setPhoneme($(this).attr("id"), -1);
        dialectSelect.val("null")
    })
    // No context menu on diphthongs
    diphthongs.on("contextmenu", function (event) {
        event.preventDefault()
    })
    // At the start of a drag on diphthongs, record start
    diphthongs.on("mousedown", function (event) {
        event.preventDefault();
        if (event.buttons != 0) {
            mouseDownOn = $(this).attr("id")
        }
    })
    // At end of drag on diphthong, make and draw an arrow
    diphthongs.on("mouseup", function (event) {
        if (event.button == 0 && mouseDownOn != null && $(this).attr("id") != mouseDownOn) {
            start = mouseDownOn.split("_")[1]
            end = $(this).attr("id").split("_")[1]
            setDiphthong(start, end, 1)
            dialectSelect.val("null")
        }
    })
}
