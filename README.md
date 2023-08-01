<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="styles.css" /> 
    <script type="text/javascript" defer src="script.js"></script>
    <title>Phoneme Inventory Maker</title>
</head>

<body>
  <div class=outer_container id=selection>
    <label for="dialect">Select inventory</label>
    <select name="dialect" id=dialect_selector>
      <option value=null></option>
      <option value=empty>Clear</option>
      <option value=GAE>General American English</option>
    </select>
  </div>

  <div class=outer_container id=vowels>
    <div class=inner_container>
      <canvas id="canvas" height="310" width="500"></canvas>
      <div id=overlay>
        <div id="cf">
          <span class="vowel" id="cfu" oncontextmenu="return false;">i</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="cfr" oncontextmenu="return false;" text-align="right">y</span>
        </div>
        <div id="cc">
          <span class="vowel" id="ccu" oncontextmenu="return false;">ɨ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="ccr" oncontextmenu="return false;" text-align="right">ʉ</span>
        </div>
        <div id="cb">
          <span class="vowel" id="cbu" oncontextmenu="return false;">ɯ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="cbr" oncontextmenu="return false;" text-align="right">u</span>
        </div>
        <div id="ncnf">
          <span class="vowel" id="ncnfu" oncontextmenu="return false;">ɪ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="ncnfr" oncontextmenu="return false;" text-align="right">ʏ</span>
        </div>
        <div id="ncnb">
          <span class="vowel" id="ncnbr" oncontextmenu="return false;" text-align="right">ʊ</span>
        </div>
        <div id="cmf">
          <span class="vowel" id="cmfu" oncontextmenu="return false;">e</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="cmfr" oncontextmenu="return false;" text-align="right">ø</span>
        </div>
        <div id="cmc">
          <span class="vowel" id="cmcu" oncontextmenu="return false;">ɘ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="cmcr" oncontextmenu="return false;" text-align="right">ɵ</span>
        </div>
        <div id="cmb">
          <span class="vowel" id="cmbu" oncontextmenu="return false;">ɤ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="cmbr" oncontextmenu="return false;" text-align="right">o</span>
        </div>
        <div id="mf">
          <span class="vowel" id="mfu" oncontextmenu="return false;">e̞</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="mfr" oncontextmenu="return false;" text-align="right">ø̞</span>
        </div>
        <div id="mc">
          <span class="vowel" id="mcv" oncontextmenu="return false;">ə</span>
        </div>
        <div id="mb">
          <span class="vowel" id="mbu" oncontextmenu="return false;">ɤ̞</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="mbr" oncontextmenu="return false;" text-align="right">o̞</span>
        </div>
        <div id="omf">
          <span class="vowel" id="omfu" oncontextmenu="return false;">ɛ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="omfr" oncontextmenu="return false;" text-align="right">œ</span>
        </div>
        <div id="omc">
          <span class="vowel" id="omcu" oncontextmenu="return false;">ɜ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="omcr" oncontextmenu="return false;" text-align="right">ɞ</span>
        </div>
        <div id="omb">
          <span class="vowel" id="ombu" oncontextmenu="return false;">ʌ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="ombr" oncontextmenu="return false;" text-align="right">ɔ</span>
        </div>
        <div id="nof">
          <span class="vowel" id="nofv" oncontextmenu="return false;">æ</span>
        </div>
        <div id="noc">
          <span class="vowel" id="nocv" oncontextmenu="return false;">ɐ</span>
        </div>
        <div id="of">
          <span class="vowel" id="ofu" oncontextmenu="return false;">a</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="ofr" oncontextmenu="return false;" text-align="right">ɶ</span>
        </div>
        <div id="oc">
          <span class="vowel" id="ocu" oncontextmenu="return false;">ä</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="ocr" oncontextmenu="return false;" text-align="right">ɶ̈</span>
        </div>
        <div id="ob">
          <span class="vowel" id="obu" oncontextmenu="return false;">ɑ</span>
          <span class="sep">⬤</span>
          <span class="vowel" id="obr" oncontextmenu="return false;" text-align="right">ɒ</span>
        </div>
      </div>
    </div>
    <div class=label>
      <span>Vowels</span>
    </div>
  </div>

  <div class=outer_container id=consonants>
    <div class=inner_container>
      <table>
        <tbody>
          <tr>
            <th rowspan="2"></th>
            <th colspan="5">Labial</th>
            <th colspan="10">Coronal</th>
            <th colspan="5">Dorsal</th>
            <th colspan="4">Laryngeal</th>
          </tr>
          <tr>
            <th colspan="2">Bilabial</th>
            <th colspan="2">Labio-dental</th>
            <th colspan="2">Linguo-labial</th>
            <th colspan="2">Dental</th>
            <th colspan="2">Alveolar</th>
            <th colspan="2">Post-alveolar</th>
            <th colspan="2">Retroflex</th>
            <th colspan="2">Palatal</th>
            <th colspan="2">Velar</th>
            <th colspan="2">Uvular</th>
            <th colspan="2">Pharyngeal/epiglottal</th>
            <th colspan="2">Glottal</th>
          </tr>
          <tr>
            <th>Nasal</th>
            <td><span class="consonant" id="-bn">m̥</span></td>
            <td><span class="consonant" id="bn">m</span></td>
            <td></td>
            <td><span class="consonant" id="ldn">ɱ</span></td>
            <td></td>
            <td><span class="consonant" id="lln">n̼</span></td>
            <td></td>
            <td></td>
            <td><span class="consonant" id="-an">n̥</span></td>
            <td><span class="consonant" id="an">n</span></td>
            <td></td>
            <td></td>
            <td><span class="consonant" id="-rn">ɳ̊</span></td>
            <td><span class="consonant" id="rn">ɳ</span></td>
            <td><span class="consonant" id="-pn">ɲ̊</span></td>
            <td><span class="consonant" id="pn">ɲ</span></td>
            <td><span class="consonant" id="-vn">ŋ̊</span></td>
            <td><span class="consonant" id="vn">ŋ</span></td>
            <td></td>
            <td><span class="consonant" id="un">ɴ</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Plosive</th>
            <td><span class="consonant" id="-bp">p</span></td>
            <td><span class="consonant" id="bp">b</span></td>
            <td><span class="consonant" id="-ldp">p̪</span></td>
            <td><span class="consonant" id="ldp">b̪</span></td>
            <td><span class="consonant" id="-llp">t̼</span></td>
            <td><span class="consonant" id="llp">d̼</span></td>
            <td><span class="consonant" id="-dp">t̪</span></td>
            <td><span class="consonant" id="dp">d̪</span></td>
            <td><span class="consonant" id="-ap">t</span></td>
            <td><span class="consonant" id="ap">d</span></td>
            <td></td>
            <td></td>
            <td><span class="consonant" id="-rp">ʈ</span></td>
            <td><span class="consonant" id="rp">ɖ</span></td>
            <td><span class="consonant" id="-pp">c</span></td>
            <td><span class="consonant" id="pp">ɟ</span></td>
            <td><span class="consonant" id="-vp">k</span></td>
            <td><span class="consonant" id="vp">ɡ</span></td>
            <td><span class="consonant" id="-up">q</span></td>
            <td><span class="consonant" id="up">ɢ</span></td>
            <td><span class="consonant" id="-php">ʡ</span></td>
            <td></td>
            <td><span class="consonant" id="-gp">ʔ</span></td>
            <td></td>
          </tr>
          <tr>
            <th>Sibilant affricate</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>t̪s̪</td>
            <td>d̪z̪</td>
            <td>ts</td>
            <td>dz</td>
            <td>t̠ʃ</td>
            <td>d̠ʒ</td>
            <td>tʂ</td>
            <td>dʐ</td>
            <td>tɕ</td>
            <td>dʑ</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th> Non-sibilant affricate
            </th>
            <td>pɸ</td>
            <td>bβ</td>
            <td>p̪f</td>
            <td>b̪v</td>
            <td></td>
            <td></td>
            <td>t̪θ</td>
            <td>d̪ð</td>
            <td>tɹ̝̊</td>
            <td>dɹ̝</td>
            <td>t̠ɹ̠̊˔</td>
            <td>d̠ɹ̠˔</td>
            <td></td>
            <td></td>
            <td>cç</td>
            <td>ɟʝ</td>
            <td>kx</td>
            <td>ɡɣ</td>
            <td>qχ</td>
            <td>ɢʁ</td>
            <td>ʡʜ</td>
            <td>ʡʢ</td>
            <td>ʔh</td>
            <td></td>
          </tr>
          <tr>
            <th>Sibilant fricative</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>s</td>
            <td>z</td>
            <td>ʃ</td>
            <td>ʒ</td>
            <td>ʂ</td>
            <td>ʐ</td>
            <td>ɕ</td>
            <td>ʑ</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Non-sibilant fricative
            </th>
            <td>ɸ</td>
            <td dir="ltr">β</td>
            <td>f</td>
            <td>v</td>
            <td>θ̼</td>
            <td>ð̼</td>
            <td>θ</td>
            <td>ð</td>
            <td>θ̠</td>
            <td>ð̠</td>
            <td>ɹ̠̊˔</td>
            <td>ɹ̠˔</td>
            <td>ɻ̊˔</td>
            <td>ɻ˔</td>
            <td>ç</td>
            <td>ʝ</td>
            <td>x</td>
            <td>ɣ</td>
            <td>χ</td>
            <td>ʁ</td>
            <td>ħ</td>
            <td>ʕ</td>
            <td>h</td>
            <td>ɦ</td>
          </tr>
          <tr>
            <th>Approximant</th>
            <td></td>
            <td>β̞</td>
            <td></td>
            <td>ʋ</td>
            <td></td>
            <td></td>
            <td></td>
            <td>ð̞</td>
            <td></td>
            <td>ɹ</td>
            <td></td>
            <td>ɹ̠</td>
            <td></td>
            <td>ɻ</td>
            <td></td>
            <td>j</td>
            <td></td>
            <td>ɰ</td>
            <td></td>
            <td>ʁ̞</td>
            <td></td>
            <td></td>
            <td></td>
            <td>ʔ̞</td>
          </tr>
          <tr>
            <th>Tap/flap</th>
            <td></td>
            <td>ⱱ̟</td>
            <td></td>
            <td>ⱱ</td>
            <td></td>
            <td>ɾ̼</td>
            <td></td>
            <td></td>
            <td>ɾ̥</td>
            <td>ɾ</td>
            <td></td>
            <td></td>
            <td>ɽ̊</td>
            <td>ɽ</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>ɢ̆</td>
            <td></td>
            <td>ʡ̆</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Trill</th>
            <td>ʙ̥</td>
            <td>ʙ</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>r̥</td>
            <td>r</td>
            <td></td>
            <td>r̠</td>
            <td>ɽ̊r̥</td>
            <td>ɽr</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>ʀ̥</td>
            <td>ʀ</td>
            <td>ʜ</td>
            <td>ʢ</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Lateral affricate</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>tɬ</td>
            <td>dɮ</td>
            <td></td>
            <td></td>
            <td>tꞎ</td>
            <td>d𝼅</td>
            <td>c𝼆</td>
            <td>ɟʎ̝</td>
            <td>k𝼄</td>
            <td>ɡʟ̝</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Lateral fricative</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>ɬ</td>
            <td>ɮ</td>
            <td></td>
            <td></td>
            <td>ꞎ</td>
            <td>𝼅</td>
            <td>𝼆</td>
            <td>ʎ̝</td>
            <td>𝼄</td>
            <td>ʟ̝</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="s1">
             Lateral approximant
            </th>
            <td class="s2"></td>
            <td class="s2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>l̪</td>
            <td></td>
            <td>l</td>
            <td></td>
            <td>l̠</td>
            <td></td>
            <td>ɭ</td>
            <td></td>
            <td>ʎ</td>
            <td></td>
            <td>ʟ</td>
            <td></td>
            <td>ʟ̠</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Lateral tap/flap</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>ɺ̥</td>
            <td>ɺ</td>
            <td></td>
            <td></td>
            <td>𝼈̥</td>
            <td>𝼈</td>
            <td></td>
            <td>ʎ̆</td>
            <td></td>
            <td>ʟ̆</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class=label>
      <span>Pulmonic Consonants</span>
    </div>
  </div>
</body>

<div id="audio">

  <audio id="cfu_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg"></audio>
  <audio id="cfr_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg"></audio>
  <audio id="ccu_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Close_central_unrounded_vowel.ogg"></audio>
  <audio id="ccr_audio" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Close_central_rounded_vowel.ogg"></audio>
  <audio id="cbu_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Close_back_unrounded_vowel.ogg"></audio>
  <audio id="cbr_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg"></audio>
  <audio id="ncnfu_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Near-close_near-front_unrounded_vowel.ogg"></audio>
  <audio id="ncnfr_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Near-close_near-front_rounded_vowel.ogg"></audio>
  <audio id="ncnbr_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Near-close_near-back_rounded_vowel.ogg"></audio>
  <audio id="cmfu_audio" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg"></audio>
  <audio id="cmfr_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg"></audio>
  <audio id="cmcu_audio" src="https://upload.wikimedia.org/wikipedia/commons/6/60/Close-mid_central_unrounded_vowel.ogg"></audio>
  <audio id="cmcr_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Close-mid_central_rounded_vowel.ogg"></audio>
  <audio id="cmbu_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Close-mid_back_unrounded_vowel.ogg"></audio>
  <audio id="cmbr_audio" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg"></audio>
  <audio id="mfu_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Mid_front_unrounded_vowel.ogg"></audio>
  <audio id="mfr_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Mid_front_rounded_vowel.ogg"></audio>
  <audio id="mcv_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg"></audio>
  <audio id="mbu_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d8/%C9%A4%CC%9E_IPA_sound.opus"></audio>
  <audio id="mbr_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Mid_back_rounded_vowel.ogg"></audio>
  <audio id="omfu_audio" src="https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg"></audio>
  <audio id="omfr_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg"></audio>
  <audio id="omcu_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/01/Open-mid_central_unrounded_vowel.ogg"></audio>
  <audio id="omcr_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Open-mid_central_rounded_vowel.ogg"></audio>
  <audio id="ombu_audio" src="https://upload.wikimedia.org/wikipedia/commons/8/80/PR-open-mid_back_unrounded_vowel2.ogg"></audio>
  <audio id="ombr_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg"></audio>
  <audio id="nofv_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg"></audio>
  <audio id="nocv_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/22/Near-open_central_unrounded_vowel.ogg"></audio>
  <audio id="ofu_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/PR-open_front_unrounded_vowel.ogg"></audio>
  <audio id="ofr_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Open_front_rounded_vowel.ogg"></audio>
  <audio id="ocu_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Open_central_unrounded_vowel.ogg"></audio>
  <audio id="ocr_audio" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Open_central_rounded_vowel.ogg"></audio>
  <audio id="obu_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg"></audio>
  <audio id="obr_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/31/PR-open_back_rounded_vowel.ogg"></audio>
</div>



