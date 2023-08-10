<head>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Gentium+Plus:ital@1&display=swap" rel="stylesheet">
  <script language="javascript" src="https://cdn.rawgit.com/pieroxy/lz-string/861d3feda0c9a8b7a48aaf3c028ab57606f1c02f/libs/lz-string.js"></script>
</head>

<body>

<div class="hint" id="no_audio">
<span>There is no recording <br>of this phoneme</span>
</div>

  <div class="outer_container" id="selection">
    <label for="dialect">Select inventory:</label>
    <select name="dialect" id="dialect_selector">
      <option value="null"></option>
      <option value="empty">Clear</option>
      <option value="GAE">General American English</option>
    </select>
  </div>

  <div class="outer_container" id="phonemes">
  <div id="labels" class="inner_container">
      <div class="label" id="vowels_label">
        <span>Vowels</span>
      </div>

      <div class="label" id="pconsonants_label">
        <span>Pulmonic<br>Consonants</span>
      </div>
    </div>
    <div class="inner_container" id="vowels">
      <canvas id="canvas" height="310" width="500"></canvas>
      <div id="overlay">
        <div id="cf">
          <span class="phoneme vowel" id="cfu">i</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="cfr" text-align="right">y</span>
        </div>
        <div id="cc">
          <span class="phoneme vowel" id="ccu">ɨ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="ccr" text-align="right">ʉ</span>
        </div>
        <div id="cb">
          <span class="phoneme vowel" id="cbu">ɯ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="cbr">u</span>
        </div>
        <div id="ncnf">
          <span class="phoneme vowel" id="ncnfu">ɪ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="ncnfr" text-align="right">ʏ</span>
        </div>
        <div id="ncnb">
          <span class="phoneme vowel" id="ncnbr" text-align="right">ʊ</span>
        </div>
        <div id="cmf">
          <span class="phoneme vowel" id="cmfu">e</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="cmfr" text-align="right">ø</span>
        </div>
        <div id="cmc">
          <span class="phoneme vowel" id="cmcu">ɘ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="cmcr" text-align="right">ɵ</span>
        </div>
        <div id="cmb">
          <span class="phoneme vowel" id="cmbu">ɤ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="cmbr" text-align="right">o</span>
        </div>
        <div id="mf">
          <span class="phoneme vowel" id="mfu">e̞</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="mfr" text-align="right">ø̞</span>
        </div>
        <div id="mc">
          <span class="phoneme vowel" id="mcv">ə</span>
        </div>
        <div id="mb">
          <span class="phoneme vowel" id="mbu">ɤ̞</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="mbr" text-align="right">o̞</span>
        </div>
        <div id="omf">
          <span class="phoneme vowel" id="omfu">ɛ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="omfr" text-align="right">œ</span>
        </div>
        <div id="omc">
          <span class="phoneme vowel" id="omcu">ɜ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="omcr" text-align="right">ɞ</span>
        </div>
        <div id="omb">
          <span class="phoneme vowel" id="ombu">ʌ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="ombr" text-align="right">ɔ</span>
        </div>
        <div id="nof">
          <span class="phoneme vowel" id="nofv">æ</span>
        </div>
        <div id="noc">
          <span class="phoneme vowel" id="nocv">ɐ</span>
        </div>
        <div id="of">
          <span class="phoneme vowel" id="ofu">a</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="ofr" text-align="right">ɶ</span>
        </div>
        <div id="oc">
          <span class="phoneme vowel" id="ocu">ä</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="ocr" text-align="right">ɶ̈</span>
        </div>
        <div id="ob">
          <span class="phoneme vowel" id="obu">ɑ</span>
          <span class="sep">⬤</span>
          <span class="phoneme vowel" id="obr" text-align="right">ɒ</span>
        </div>
      </div>
    </div>
    <div class="inner_container" id="pconsonants">
      <div>

        <table>
          <tbody>
            <tr>
              <th rowspan="2"></th>
              <th colspan="5">Labial</th>
              <th colspan="10">Coronal</th>
              <th colspan="5">Dorsal</th>
              <th colspan="4">Laryngeal</th>
              <th rowspan="2"></th>
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
              <th colspan="2">Pharyngeal/<br>epiglottal</th>
              <th colspan="2">Glottal</th>
            </tr>
            <tr>
              <th>Nasal</th>
              <td><span class="phoneme consonant norecording" id="-bn">m̥</span></td>
              <td><span class="phoneme consonant" id="bn">m</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="ldn">ɱ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="lln">n̼</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-an">n̥</span></td>
              <td><span class="phoneme consonant" id="an">n</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-rn">ɳ̊</span></td>
              <td><span class="phoneme consonant" id="rn">ɳ</span></td>
              <td><span class="phoneme consonant" id="-pn">ɲ̊</span></td>
              <td><span class="phoneme consonant" id="pn">ɲ</span></td>
              <td><span class="phoneme consonant" id="-vn">ŋ̊</span></td>
              <td><span class="phoneme consonant" id="vn">ŋ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="un">ɴ</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Nasal</th>
            </tr>
            <tr>
              <th>Plosive</th>
              <td><span class="phoneme consonant" id="-bp">p</span></td>
              <td><span class="phoneme consonant" id="bp">b</span></td>
              <td><span class="phoneme consonant" id="-ldp">p̪</span></td>
              <td><span class="phoneme consonant" id="ldp">b̪</span></td>
              <td><span class="phoneme consonant" id="-llp">t̼</span></td>
              <td><span class="phoneme consonant" id="llp">d̼</span></td>
              <td><span class="phoneme consonant" id="-dp">t̪</span></td>
              <td><span class="phoneme consonant" id="dp">d̪</span></td>
              <td><span class="phoneme consonant" id="-ap">t</span></td>
              <td><span class="phoneme consonant" id="ap">d</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-rp">ʈ</span></td>
              <td><span class="phoneme consonant" id="rp">ɖ</span></td>
              <td><span class="phoneme consonant" id="-pp">c</span></td>
              <td><span class="phoneme consonant" id="pp">ɟ</span></td>
              <td><span class="phoneme consonant" id="-vp">k</span></td>
              <td><span class="phoneme consonant" id="vp">ɡ</span></td>
              <td><span class="phoneme consonant" id="-up">q</span></td>
              <td><span class="phoneme consonant" id="up">ɢ</span></td>
              <td><span class="phoneme consonant" id="-php">ʡ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="-gp">ʔ</span></td>
              <td></td>
              <th>Plosive</th>
            </tr>
            <tr>
              <th>Sibilant affricate</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-dsa">t̪s̪</span></td>
              <td><span class="phoneme consonant" id="dsa">d̪z̪</span></td>
              <td><span class="phoneme consonant" id="-asa">ts</span></td>
              <td><span class="phoneme consonant" id="asa">dz</span></td>
              <td><span class="phoneme consonant" id="-pasa">t̠ʃ</span></td>
              <td><span class="phoneme consonant" id="pasa">d̠ʒ</span></td>
              <td><span class="phoneme consonant" id="-rsa">tʂ</span></td>
              <td><span class="phoneme consonant" id="rsa">dʐ</span></td>
              <td><span class="phoneme consonant" id="-psa">tɕ</span></td>
              <td><span class="phoneme consonant" id="psa">dʑ</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Sibilant affricate</th>
            </tr>
            <tr>
              <th> Non-sibilant affricate</th>
              <td><span class="phoneme consonant" id="-bnsa">pɸ</span></td>
              <td><span class="phoneme consonant" id="bnsa">bβ</span></td>
              <td><span class="phoneme consonant" id="-ldnsa">p̪f</span></td>
              <td><span class="phoneme consonant" id="ldnsa">b̪v</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-dnsa">t̪θ</span></td>
              <td><span class="phoneme consonant" id="dnsa">d̪ð</span></td>
              <td><span class="phoneme consonant" id="-ansa">tɹ̝̊</span></td>
              <td><span class="phoneme consonant" id="ansa">dɹ̝</span></td>
              <td><span class="phoneme consonant" id="-pansa">t̠ɹ̠̊˔</span></td>
              <td><span class="phoneme consonant" id="pansa">d̠ɹ̠˔</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-pnsa">cç</span></td>
              <td><span class="phoneme consonant" id="pnsa">ɟʝ</span></td>
              <td><span class="phoneme consonant" id="-vnsa">kx</span></td>
              <td><span class="phoneme consonant" id="vnsa">ɡɣ</span></td>
              <td><span class="phoneme consonant" id="-unsa">qχ</span></td>
              <td><span class="phoneme consonant" id="unsa">ɢʁ</span></td>
              <td><span class="phoneme consonant" id="-phnsa">ʡʜ</span></td>
              <td><span class="phoneme consonant" id="phnsa">ʡʢ</span></td>
              <td><span class="phoneme consonant" id="-gnsa">ʔh</span></td>
              <td></td>
              <th> Non-sibilant affricate</th>
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
              <td><span class="phoneme consonant" id="-asf">s</span></td>
              <td><span class="phoneme consonant" id="asf">z</span></td>
              <td><span class="phoneme consonant" id="-pasf">ʃ</span></td>
              <td><span class="phoneme consonant" id="pasf">ʒ</span></td>
              <td><span class="phoneme consonant" id="-rsf">ʂ</span></td>
              <td><span class="phoneme consonant" id="rsf">ʐ</span></td>
              <td><span class="phoneme consonant" id="-psf">ɕ</span></td>
              <td><span class="phoneme consonant" id="psf">ʑ</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Sibilant fricative</th>
            </tr>
            <tr>
              <th>Non-sibilant fricative</th>
              <td><span class="phoneme consonant" id="-bnsf">ɸ</span></td>
              <td><span class="phoneme consonant" id="bnsf">β</span></td>
              <td><span class="phoneme consonant" id="-ldnsf">f</span></td>
              <td><span class="phoneme consonant" id="ldnsf">v</span></td>
              <td><span class="phoneme consonant" id="-llnsf">θ̼</span></td>
              <td><span class="phoneme consonant" id="llnsf">ð̼</span></td>
              <td><span class="phoneme consonant" id="-dnsf">θ</span></td>
              <td><span class="phoneme consonant" id="dnsf">ð</span></td>
              <td><span class="phoneme consonant" id="-ansf">θ̠</span></td>
              <td><span class="phoneme consonant" id="ansf">ð̠</span></td>
              <td><span class="phoneme consonant" id="-pansf">ɹ̠̊˔</span></td>
              <td><span class="phoneme consonant" id="pansf">ɹ̠˔</span></td>
              <td><span class="phoneme consonant" id="-rnsf">ɻ̊˔</span></td>
              <td><span class="phoneme consonant" id="rnsf">ɻ˔</span></td>
              <td><span class="phoneme consonant" id="-pnsf">ç</span></td>
              <td><span class="phoneme consonant" id="pnsf">ʝ</span></td>
              <td><span class="phoneme consonant" id="-vnsf">x</span></td>
              <td><span class="phoneme consonant" id="vnsf">ɣ</span></td>
              <td><span class="phoneme consonant" id="-unsf">χ</span></td>
              <td><span class="phoneme consonant" id="unsf">ʁ</span></td>
              <td><span class="phoneme consonant" id="-phnsf">ħ</span></td>
              <td><span class="phoneme consonant" id="phnsf">ʕ</span></td>
              <td><span class="phoneme consonant" id="-gnsf">h</span></td>
              <td><span class="phoneme consonant" id="gnsf">ɦ</span></td>
              <th>Non-sibilant fricative</th>
            </tr>
            <tr>
              <th>Approximant</th>
              <td></td>
              <td><span class="phoneme consonant" id="ba">β̞</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="lda">ʋ</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="da">ð̞</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="aa">ɹ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="paa">ɹ̠</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="ra">ɻ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="pa">j</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="va">ɰ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="ua">ʁ̞</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="ga">ʔ̞</span></td>
              <th>Approximant</th>
            </tr>
            <tr>
              <th>Tap/flap</th>
              <td></td>
              <td><span class="phoneme consonant" id="btf">ⱱ̟</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="ldtf">ⱱ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="lltf">ɾ̼</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-atf">ɾ̥</span></td>
              <td><span class="phoneme consonant" id="atf">ɾ</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-rtf">ɽ̊</span></td>
              <td><span class="phoneme consonant" id="rtf">ɽ</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="utf">ɢ̆</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="phtf">ʡ̆</span></td>
              <td></td>
              <td></td>
              <th>Tap/flap</th>
            </tr>
            <tr>
              <th>Trill</th>
              <td><span class="phoneme consonant" id="-bt">ʙ̥</span></td>
              <td><span class="phoneme consonant" id="bt">ʙ</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-at">r̥</span></td>
              <td><span class="phoneme consonant" id="at">r</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="pat">r̠</span></td>
              <td><span class="phoneme consonant" id="-rt">ɽ̊r̥</span></td>
              <td><span class="phoneme consonant" id="rt">ɽr</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-ut">ʀ̥</span></td>
              <td><span class="phoneme consonant" id="ut">ʀ</span></td>
              <td><span class="phoneme consonant" id="-pht">ʜ</span></td>
              <td><span class="phoneme consonant" id="pht">ʢ</span></td>
              <td></td>
              <td></td>
              <th>Trill</th>
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
              <td><span class="phoneme consonant" id="-ala">tɬ</span></td>
              <td><span class="phoneme consonant" id="ala">dɮ</span></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="-rla">tꞎ</span></td>
              <td><span class="phoneme consonant" id="rla">d𝼅</span></td>
              <td><span class="phoneme consonant" id="-pla">c𝼆</span></td>
              <td><span class="phoneme consonant" id="pla">ɟʎ̝</span></td>
              <td><span class="phoneme consonant" id="-vla">k𝼄</span></td>
              <td><span class="phoneme consonant" id="vla">ɡʟ̝</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Lateral affricate</th>
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
              <td><span class="phoneme consonant" id="-alf">ɬ</span></td>
              <td><span class="phoneme consonant" id="alf">ɮ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="-rlf">ꞎ</span></td>
              <td><span class="phoneme consonant" id="rlf">𝼅</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="-plf">𝼆</span></td>
              <td><span class="phoneme consonant" id="plf">ʎ̝</span></td>
              <td><span class="phoneme consonant" id="-vlf">𝼄</span></td>
              <td><span class="phoneme consonant" id="vlf">ʟ̝</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Lateral fricative</th>
            </tr>
            <tr>
              <th>Lateral approximant</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="phoneme consonant" id="dlap">l̪</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="alap">l</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="palap">l̠</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="rlap">ɭ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="plap">ʎ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="vlap">ʟ</span></td>
              <td></td>
              <td><span class="phoneme consonant" id="ulap">ʟ̠</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Lateral approximant</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

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

  <audio id="bn_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg"></audio>

  <audio id="ldn_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Labiodental_nasal.ogg"></audio>

  <audio id="an_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg"></audio>

  <audio id="rn_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Retroflex_nasal.ogg"></audio>

  <audio id="pn_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg"></audio>

  <audio id="vn_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg"></audio>

  <audio id="un_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Uvular_nasal.ogg"></audio>

  <audio id="-bp_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg"></audio>

  <audio id="bp_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg"></audio>

  <audio id="-llp_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_linguolabial_stop.ogg"></audio>

  <audio id="llp_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Voiced_linguolabial_stop.ogg"></audio>

  <audio id="-dp_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Voiceless_dental_stop.ogg"></audio>

  <audio id="dp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Voiced_dental_stop.ogg"></audio>

  <audio id="-ap_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg"></audio>

  <audio id="ap_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg"></audio>

  <audio id="-rp_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Voiceless_retroflex_stop.oga"></audio>

  <audio id="rp_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_retroflex_stop.oga"></audio>

  <audio id="-pp_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Voiceless_palatal_plosive.ogg"></audio>

  <audio id="pp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Voiced_palatal_plosive.ogg"></audio>

  <audio id="-vp_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg"></audio>

  <audio id="vp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg"></audio>

  <audio id="-up_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Voiceless_uvular_plosive.ogg"></audio>

  <audio id="up_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Voiced_uvular_stop.oga"></audio>

  <audio id="-php_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Epiglottal_stop.ogg"></audio>

  <audio id="-gp_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Glottal_stop.ogg"></audio>

  <audio id="-dsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Voiceless_dental_sibilant_affricate.oga"></audio>

  <audio id="dsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Voiced_dental_sibilant_affricate.oga"></audio>

  <audio id="-asa_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Voiceless_alveolar_sibilant_affricate.oga"></audio>

  <audio id="asa_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Voiced_alveolar_sibilant_affricate.oga"></audio>

  <audio id="-pasa_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg"></audio>

  <audio id="pasa_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg"></audio>

  <audio id="-rsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Voiceless_retroflex_affricate.ogg"></audio>

  <audio id="rsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_retroflex_affricate.ogg"></audio>

  <audio id="-psa_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Voiceless_alveolo-palatal_affricate.ogg"></audio>

  <audio id="psa_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Voiced_alveolo-palatal_affricate.ogg"></audio>

  <audio id="-bnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Voiceless_bilabial_affricate.ogg"></audio>

  <audio id="-ldnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Voiceless_labiodental_affricate.ogg"></audio>

  <audio id="ldnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Voiced_labiodental_affricate.ogg"></audio>

  <audio id="-dnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_dental_non-sibilant_affricate.oga"></audio>

  <audio id="dnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_dental_non-sibilant_affricate.oga"></audio>

  <audio id="-pansa_audio" src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Voiceless_postalveolar_non-sibilant_affricate.ogg"></audio>

  <audio id="pansa_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Voiced_postalveolar_non-sibilant_affricate.ogg"></audio>

  <audio id="-pnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Voiceless_palatal_affricate.ogg"></audio>

  <audio id="pnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Voiced_palatal_affricate.ogg"></audio>

  <audio id="-vnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Voiceless_velar_affricate.ogg"></audio>

  <audio id="vnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Voiced_velar_affricate.ogg"></audio>

  <audio id="-unsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/43/Voiceless_uvular_affricate.ogg"></audio>

  <audio id="unsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Voiced_uvular_affricate.ogg"></audio>

  <audio id="-phnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_epiglottal_affricate.ogg"></audio>

  <audio id="phnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Voiced_epiglottal_affricate.ogg"></audio>

  <audio id="-gnsa_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Voiceless_glottal_affricate.ogg"></audio>

  <audio id="-asf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg"></audio>

  <audio id="asf_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg"></audio>

  <audio id="-pasf_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg"></audio>

  <audio id="pasf_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg"></audio>

  <audio id="-rsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Voiceless_retroflex_sibilant.ogg"></audio>

  <audio id="rsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Voiced_retroflex_sibilant.ogg"></audio>

  <audio id="-psf_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Voiceless_alveolo-palatal_sibilant.ogg"></audio>

  <audio id="psf_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/15/Voiced_alveolo-palatal_sibilant.ogg"></audio>

  <audio id="-bnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Voiceless_bilabial_fricative.ogg"></audio>

  <audio id="bnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Voiced_bilabial_fricative.ogg"></audio>

  <audio id="-ldnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Voiceless_labio-dental_fricative.ogg"></audio>

  <audio id="ldnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Voiced_labio-dental_fricative.ogg"></audio>

  <audio id="-llnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Voiceless_linguolabial_fricative.ogg"></audio>

  <audio id="-dnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg"></audio>

  <audio id="dnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg"></audio>

  <audio id="-ansf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Voiceless_alveolar_non-sibilant_fricative.ogg"></audio>

  <audio id="ansf_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Voiced_alveolar_non-sibilant_fricative.ogg"></audio>

  <audio id="-pansf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_postalveolar_non-sibilant_fricative.ogg"></audio>

  <audio id="pansf_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Voiced_postalveolar_non-sibilant_fricative.ogg"></audio>

  <audio id="-pnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_palatal_fricative.ogg"></audio>

  <audio id="pnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiced_palatal_fricative.ogg"></audio>

  <audio id="-vnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg"></audio>

  <audio id="vnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Voiced_velar_fricative.ogg"></audio>

  <audio id="-unsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Voiceless_uvular_fricative.ogg"></audio>

  <audio id="unsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg"></audio>

  <audio id="-phnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Voiceless_pharyngeal_fricative.ogg"></audio>

  <audio id="phnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Voiced_pharyngeal_fricative.ogg"></audio>

  <audio id="-gnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg"></audio>

  <audio id="gnsf_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Voiced_glottal_fricative.ogg"></audio>

  <audio id="bapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/11/Bilabial_approximant.ogg"></audio>

  <audio id="ldapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Labiodental_approximant.ogg"></audio>

  <audio id="dapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/11/Voiced_dental_approximant.ogg"></audio>

  <audio id="aapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Alveolar_approximant.ogg"></audio>

  <audio id="paapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Postalveolar_approximant.ogg"></audio>

  <audio id="rapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Retroflex_Approximant2.oga"></audio>

  <audio id="papp_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg"></audio>

  <audio id="vapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Voiced_velar_approximant.ogg"></audio>

  <audio id="uapp_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Voiced_Uvular_Approximant.ogg"></audio>

  <audio id="ldtf_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Labiodental_flap.ogg"></audio>

  <audio id="atf_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Alveolar_tap.ogg"></audio>

  <audio id="rtf_audio" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Retroflex_flap.ogg"></audio>

  <audio id="phtf_audio" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Epiglottal_flap.oga"></audio>

  <audio id="-bt_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Voiceless_bilabial_trill_with_aspiration.ogg"></audio>

  <audio id="bt_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Bilabial_trill.ogg"></audio>

  <audio id="-at_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Voiceless_alveolar_trill.ogg"></audio>

  <audio id="at_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg"></audio>

  <audio id="pat_audio" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Voiced_postalveolar_trill.ogg"></audio>

  <audio id="rt_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Voiced_retroflex_trill.ogg"></audio>

  <audio id="-ut_audio" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Voiceless_uvular_trill.ogg"></audio>

  <audio id="ut_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Uvular_trill.ogg"></audio>

  <audio id="-pht_audio" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Voiceless_epiglottal_trill.ogg"></audio>

  <audio id="pht_audio" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Voiced_epiglottal_trill_2.ogg"></audio>

  <audio id="-ala_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Voiceless_alveolar_lateral_affricate.ogg"></audio>

  <audio id="ala_audio" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_alveolar_lateral_affricate.ogg"></audio>

  <audio id="-pla_audio" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Voiceless_palatal_lateral_affricate.ogg"></audio>

  <audio id="-vla_audio" src="hhttps://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_velar_lateral_affricate.ogg"></audio>

  <audio id="vla_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Voiced_velar_lateral_affricate.ogg"></audio>

  <audio id="-alf_audio" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_alveolar_lateral_fricative.ogg"></audio>

  <audio id="alf_audio" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Voiced_alveolar_lateral_fricative.ogg"></audio>

  <audio id="-rlf_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Voiceless_retroflex_lateral_fricative.ogg"></audio>

  <audio id="-plf_audio" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Voiceless_palatal_lateral_fricative.ogg"></audio>

  <audio id="-vlf_audio" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Voiceless_velar_lateral_fricative.ogg"></audio>

  <audio id="vlf_audio" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Voiced_velar_lateral_fricative.ogg"></audio>

  <audio id="dlap_audio" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Voiced_dental_lateral_approximant.ogg"></audio>

  <audio id="alap_audio" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg"></audio>

  <audio id="palap_audio" src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Voiced_postalveolar_lateral_approximant.ogg"></audio>

  <audio id="rlap_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Retroflex_lateral_approximant.ogg"></audio>

  <audio id="plap_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Palatal_lateral_approximant.ogg"></audio>

  <audio id="vlap_audio" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Velar_lateral_approximant.ogg"></audio>

  <audio id="ulap_audio" src="https://upload.wikimedia.org/wikipedia/commons/7/73/Uvular_lateral_approximant.ogg"></audio>

</body>
