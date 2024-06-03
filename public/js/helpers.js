import {
  handle,
  handle2,
  curPitchEl,
  curDurEl,
  curFreqEl,
  curVolEl,
  curIntEl,
  curIntAbbrEl,
  curIntHsEl,
  notesList,
  playbtn,
  sliderP,
  synthList,
  handleLow,
  handleMid,
  handleHigh,
  synthList2A,
  curPitch2AEl,
  curFreq2AEl,
  curVol2AEl,
  synthList2B,
  curPitch2BEl,
  curFreq2BEl,
  curVol2BEl,
  volSlider2A,
  volSlider2B,
  volHandle2A,
  volHandle2B,
  handleHigh2A,
  handleHigh2B,
  handleLow2A,
  handleLow2B,
  handleMid2A,
  handleMid2B,
  sliderLow2A,
  sliderMid2A,
  sliderHigh2A,
  sliderLow2B,
  sliderMid2B,
  sliderHigh2B,
  synthList3A,
  curPitch3AEl,
  curFreq3AEl,
  curVol3AEl,
  synthList3B,
  curPitch3BEl,
  curFreq3BEl,
  curVol3BEl,
  volSlider3A,
  volSlider3B,
  volHandle3A,
  volHandle3B,
  handleHigh3A,
  handleHigh3B,
  handleLow3A,
  handleLow3B,
  handleMid3A,
  handleMid3B,
  sliderLow3A,
  sliderMid3A,
  sliderHigh3A,
  sliderLow3B,
  sliderMid3B,
  sliderHigh3B,
  synthList3C,
  curPitch3CEl,
  curFreq3CEl,
  curVol3CEl,
  volSlider3C,
  volHandle3C,
  handleHigh3C,
  handleLow3C,
  handleMid3C,
  sliderLow3C,
  sliderMid3C,
  sliderHigh3C,
  triadName,
  triadInv,
  triadRoot,
  altChordDisp,
  triadName2,
  triadInv2,
  triadRoot2,
  ctrlToggle,
} from "./dom.js";
// instruments up here
const vol = new Tone.Volume(0).toDestination();
const eq = new Tone.EQ3(0, 0, 0).connect(vol);
var synth = new Tone.AMSynth().connect(eq);

if (window.location.pathname === "/2") {
}

// ChatGPT created this long array for me! would have been needlessly tedious otherwise.
const notesArr = [
  { frequency: 27.5, pitch: "A0", enharmonic: null, value: 1 },
  { frequency: 29.14, pitch: "A#0", enharmonic: "Bb0", value: 2 },
  { frequency: 30.87, pitch: "B0", enharmonic: null, value: 3 },
  { frequency: 32.7, pitch: "C1", enharmonic: null, value: 4 },
  { frequency: 34.65, pitch: "C#1", enharmonic: "Db1", value: 5 },
  { frequency: 36.71, pitch: "D1", enharmonic: null, value: 6 },
  { frequency: 38.89, pitch: "D#1", enharmonic: "Eb1", value: 7 },
  { frequency: 41.2, pitch: "E1", enharmonic: null, value: 8 },
  { frequency: 43.65, pitch: "F1", enharmonic: null, value: 9 },
  { frequency: 46.25, pitch: "F#1", enharmonic: "Gb1", value: 10 },
  { frequency: 49.0, pitch: "G1", enharmonic: null, value: 11 },
  { frequency: 51.91, pitch: "G#1", enharmonic: "Ab1", value: 12 },
  { frequency: 55.0, pitch: "A1", enharmonic: null, value: 13 },
  { frequency: 58.27, pitch: "A#1", enharmonic: "Bb1", value: 14 },
  { frequency: 61.74, pitch: "B1", enharmonic: null, value: 15 },
  { frequency: 65.41, pitch: "C2", enharmonic: null, value: 16 },
  { frequency: 69.3, pitch: "C#2", enharmonic: "Db2", value: 17 },
  { frequency: 73.42, pitch: "D2", enharmonic: null, value: 18 },
  { frequency: 77.78, pitch: "D#2", enharmonic: "Eb2", value: 19 },
  { frequency: 82.41, pitch: "E2", enharmonic: null, value: 20 },
  { frequency: 87.31, pitch: "F2", enharmonic: null, value: 21 },
  { frequency: 92.5, pitch: "F#2", enharmonic: "Gb2", value: 22 },
  { frequency: 98.0, pitch: "G2", enharmonic: null, value: 23 },
  { frequency: 103.83, pitch: "G#2", enharmonic: "Ab2", value: 24 },
  { frequency: 110.0, pitch: "A2", enharmonic: null, value: 25 },
  { frequency: 116.54, pitch: "A#2", enharmonic: "Bb2", value: 26 },
  { frequency: 123.47, pitch: "B2", enharmonic: null, value: 27 },
  { frequency: 130.81, pitch: "C3", enharmonic: null, value: 28 },
  { frequency: 138.59, pitch: "C#3", enharmonic: "Db3", value: 29 },
  { frequency: 146.83, pitch: "D3", enharmonic: null, value: 30 },
  { frequency: 155.56, pitch: "D#3", enharmonic: "Eb3", value: 31 },
  { frequency: 164.81, pitch: "E3", enharmonic: null, value: 32 },
  { frequency: 174.61, pitch: "F3", enharmonic: null, value: 33 },
  { frequency: 185.0, pitch: "F#3", enharmonic: "Gb3", value: 34 },
  { frequency: 196.0, pitch: "G3", enharmonic: null, value: 35 },
  { frequency: 207.65, pitch: "G#3", enharmonic: "Ab3", value: 36 },
  { frequency: 220.0, pitch: "A3", enharmonic: null, value: 37 },
  { frequency: 233.08, pitch: "A#3", enharmonic: "Bb3", value: 38 },
  { frequency: 246.94, pitch: "B3", enharmonic: null, value: 39 },
  { frequency: 261.63, pitch: "C4", enharmonic: null, value: 40 },
  { frequency: 277.18, pitch: "C#4", enharmonic: "Db4", value: 41 },
  { frequency: 293.66, pitch: "D4", enharmonic: null, value: 42 },
  { frequency: 311.13, pitch: "D#4", enharmonic: "Eb4", value: 43 },
  { frequency: 329.63, pitch: "E4", enharmonic: null, value: 44 },
  { frequency: 349.23, pitch: "F4", enharmonic: null, value: 45 },
  { frequency: 369.99, pitch: "F#4", enharmonic: "Gb4", value: 46 },
  { frequency: 392.0, pitch: "G4", enharmonic: null, value: 47 },
  { frequency: 415.3, pitch: "G#4", enharmonic: "Ab4", value: 48 },
  { frequency: 440.0, pitch: "A4", enharmonic: null, value: 49 },
  { frequency: 466.16, pitch: "A#4", enharmonic: "Bb4", value: 50 },
  { frequency: 493.88, pitch: "B4", enharmonic: null, value: 51 },
  { frequency: 523.25, pitch: "C5", enharmonic: null, value: 52 },
  { frequency: 554.37, pitch: "C#5", enharmonic: "Db5", value: 53 },
  { frequency: 587.33, pitch: "D5", enharmonic: null, value: 54 },
  { frequency: 622.25, pitch: "D#5", enharmonic: "Eb5", value: 55 },
  { frequency: 659.26, pitch: "E5", enharmonic: null, value: 56 },
  { frequency: 698.46, pitch: "F5", enharmonic: null, value: 57 },
  { frequency: 739.99, pitch: "F#5", enharmonic: "Gb5", value: 58 },
  { frequency: 783.99, pitch: "G5", enharmonic: null, value: 59 },
  { frequency: 830.61, pitch: "G#5", enharmonic: "Ab5", value: 60 },
  { frequency: 880.0, pitch: "A5", enharmonic: null, value: 61 },
  { frequency: 932.33, pitch: "A#5", enharmonic: "Bb5", value: 62 },
  { frequency: 987.77, pitch: "B5", enharmonic: null, value: 63 },
  { frequency: 1046.5, pitch: "C6", enharmonic: null, value: 64 },
  { frequency: 1108.73, pitch: "C#6", enharmonic: "Db6", value: 65 },
  { frequency: 1174.66, pitch: "D6", enharmonic: null, value: 66 },
  { frequency: 1244.51, pitch: "D#6", enharmonic: "Eb6", value: 67 },
  { frequency: 1318.51, pitch: "E6", enharmonic: null, value: 68 },
  { frequency: 1396.91, pitch: "F6", enharmonic: null, value: 69 },
  { frequency: 1479.98, pitch: "F#6", enharmonic: "Gb6", value: 70 },
  { frequency: 1567.98, pitch: "G6", enharmonic: null, value: 71 },
  { frequency: 1661.22, pitch: "G#6", enharmonic: "Ab6", value: 72 },
  { frequency: 1760.0, pitch: "A6", enharmonic: null, value: 73 },
  { frequency: 1864.66, pitch: "A#6", enharmonic: "Bb6", value: 74 },
  { frequency: 1975.53, pitch: "B6", enharmonic: null, value: 75 },
  { frequency: 2093.0, pitch: "C7", enharmonic: null, value: 76 },
  { frequency: 2217.46, pitch: "C#7", enharmonic: "Db7", value: 77 },
  { frequency: 2349.32, pitch: "D7", enharmonic: null, value: 78 },
  { frequency: 2489.02, pitch: "D#7", enharmonic: "Eb7", value: 79 },
  { frequency: 2637.02, pitch: "E7", enharmonic: null, value: 80 },
  { frequency: 2793.83, pitch: "F7", enharmonic: null, value: 81 },
  { frequency: 2959.96, pitch: "F#7", enharmonic: "Gb7", value: 82 },
  { frequency: 3135.96, pitch: "G7", enharmonic: null, value: 83 },
  { frequency: 3322.44, pitch: "G#7", enharmonic: "Ab7", value: 84 },
  { frequency: 3520.0, pitch: "A7", enharmonic: null, value: 85 },
  { frequency: 3729.31, pitch: "A#7", enharmonic: "Bb7", value: 86 },
  { frequency: 3951.07, pitch: "B7", enharmonic: null, value: 87 },
  { frequency: 4186.01, pitch: "C8", enharmonic: null, value: 88 },
];

const intArr = [
  {
    value: 0,
    name: "unison",
  },
  { value: 1, name: "Minor 2nd", abbr: "m2" },
  { value: 2, name: "Major 2nd", abbr: "M2" },
  { value: 3, name: "Minor 3rd", abbr: "m3" },
  { value: 4, name: "Major 3rd", abbr: "M3" },
  { value: 5, name: "Perfect 4th", abbr: "P4" },
  { value: 6, name: "Tritone/Augmented 4th/Diminished 5th", abbr: "A4/d5" },
  { value: 7, name: "Perfect 5th", abbr: "P5" },
  { value: 8, name: "Minor 6th", abbr: "m6" },
  { value: 9, name: "Major 6th", abbr: "M6" },
  { value: 10, name: "Minor 7th", abbr: "m7" },
  { value: 11, name: "Major 7th", abbr: "M7" },
  { value: 12, name: "Octave", abbr: "8ve" },
  { value: 13, name: "Minor 2nd", abbr: "m2" },
  { value: 14, name: "Minor 2nd", abbr: "m2" },
  { value: 15, name: "Minor 2nd", abbr: "m2" },
  { value: 16, name: "Minor 2nd", abbr: "m2" },
  { value: 17, name: "Minor 2nd", abbr: "m2" },
  { value: 18, name: "Minor 2nd", abbr: "m2" },
  { value: 19, name: "Minor 2nd", abbr: "m2" },
  { value: 20, name: "Minor 2nd", abbr: "m2" },
  { value: 21, name: "Minor 2nd", abbr: "m2" },
  { value: 22, name: "Minor 2nd", abbr: "m2" },
  { value: 23, name: "Minor 2nd", abbr: "m2" },
  { value: 24, name: "Minor 2nd", abbr: "m2" },
];

const triNoteArr = [
  {
    name: "Major",
    intervals: [4, 3],
    inversion: "Root",
  },
  {
    name: "Minor",
    intervals: [3, 4],
    inversion: "Root",
  },
  {
    name: "Suspended Second",
    intervals: [2, 5],
    inversion: "Root",
  },
  {
    name: "Suspended Fourth",
    intervals: [5, 2],
    inversion: "Root",
  },
  {
    name: "Diminished",
    intervals: [3, 3],
    inversion: "Root",
  },
  {
    name: "Augmented",
    intervals: [4, 4],
    inversion: "Root",
  },
  {
    name: "Major",
    intervals: [3, 5],
    inversion: "First",
  },
  {
    name: "Minor",
    intervals: [4, 5],
    inversion: "First",
  },
  {
    name: "Suspended Second",
    intervals: [5, 5],
    inversion: "First",
  },
  {
    name: "Suspended Fourth",
    intervals: [2, 5],
    inversion: "First",
  },
  {
    name: "Diminished",
    intervals: [3, 6],
    inversion: "First",
  },
  {
    name: "Major",
    intervals: [5, 4],
    inversion: "Second",
  },
  {
    name: "Minor",
    intervals: [5, 3],
    inversion: "Second",
  },
  {
    name: "Suspended Second",
    intervals: [5, 2],
    inversion: "Second",
  },
  {
    name: "Suspended Fourth",
    intervals: [5, 5],
    inversion: "Second",
  },
  {
    name: "Diminished",
    intervals: [6, 3],
    inversion: "Second",
  },
  {
    name: "Major Seventh (no 5th)",
    intervals: [4, 7],
    inversion: "Root",
  },
  {
    name: "Minor Seventh (no 5th)",
    intervals: [3, 7],
    inversion: "Root",
  },
  {
    name: "Major Seventh (no 5th)",
    intervals: [7, 1],
    inversion: "First",
  },
  {
    name: "Minor Seventh (no 5th)",
    intervals: [7, 2],
    inversion: "First",
  },
  {
    name: "Major Seventh (no 5th)",
    intervals: [1, 4],
    inversion: "Third",
  },
  {
    name: "Minor Seventh (no 5th)",
    intervals: [2, 3],
    inversion: "Third",
  },
  {
    name: "Dominant Seventh (no 5th)",
    intervals: [4, 6],
    inversion: "Root",
  },
  {
    name: "Dominant Seventh (no 5th)",
    intervals: [6, 4],
    inversion: "First",
  },
  {
    name: "Dominant Seventh (no 5th)",
    intervals: [2, 4],
    inversion: "Third",
  },
  {
    name: "Major add9 (no 5th)",
    intervals: [4, 10],
    inversion: "Root",
  },
  {
    name: "Major add9 (no 5th)",
    intervals: [10, 10],
    inversion: "First",
  },
  {
    name: "Major add9 (no 5th)",
    intervals: [8, 2],
    inversion: "Third",
  },
];

export default class Hi {
  constructor(
    curNoteVal,
    curVolVal,
    curDurVal,
    curLowVal,
    curMidVal,
    curHighVal
  ) {
    this.curNoteVal = curNoteVal;
    this.curDurVal = curDurVal;
    this.curVolVal = curVolVal;
    this.curLowVal = curLowVal;
    this.curMidVal = curMidVal;
    this.curHighVal = curHighVal;
  }
  matchNote(noteVal) {
    const newArr = notesArr.filter((note) => noteVal === note.pitch);
    return newArr;
  }
  matchNoteFreq(freqVal) {
    const newArr = notesArr.filter((note) => freqVal === note.frequency);
    return newArr[0];
  }
  // temporarily disabled duration display, as it is not used on p2
  dispNote(ddNoteVal, freqName, pitchEl, freqEl, volEl, dbLv) {
    pitchEl.text(ddNoteVal);
    // the acquisition of freqName will need to be altered for p1
    freqEl.text(freqName + " Hz");
    volEl.text(this.curVolVal + " db");
    // var curDurNota = Tone.Time(this.curDurVal).toNotation();
    // curDurEl.text(this.curDurVal * 1000 + " ms, " + curDurNota);
  }

  playNDisplay() {
    var ddNoteVal = notesList.val();
    var freqName = this.matchNote(ddNoteVal);
    this.curDurVal = handle2.text() / 1000;
    this.dispNote(ddNoteVal, freqName);
    synth.triggerAttackRelease(ddNoteVal, this.curDurVal);
  }
  // handles user synth selection from dropdown
  async switchSynth(aSynthList, aSynth, aEQ) {
    // when a change occurs (new item selected), the selected value is stored in 'curSynth'
    var curSynth = aSynthList.val();
    // different cases obtain depending on user selection.
    // each case will disconnect old synth and instantiate the new one.
    if (aSynth) {
      aSynth.disconnect();
    }
    switch (curSynth) {
      case "AM Synth":
        aSynth = new Tone.AMSynth().connect(aEQ);
        break;
      case "FM Synth":
        aSynth = new Tone.FMSynth().connect(aEQ);
        break;
      case "Mono Synth":
        aSynth = new Tone.MonoSynth().connect(aEQ);
        break;
      case "Simple Synth":
        aSynth = new Tone.Synth().connect(aEQ);
        break;
    }
    return aSynth;
  }

  pitchSlide(event, ui) {
    var curNoteIndex = ui.value - 1;
    this.curNoteVal = notesList.children().eq(curNoteIndex).text();
    this.playNDisplay();
    notesList[0].selectedIndex = ui.value - 1;
  }
  // will need to alter p1 to adapt to these flexible parameters
  volSlide(event, ui, handle, vol) {
    handle.text(ui.value);
    vol.volume.value = ui.value;
    this.curVolVal = ui.value;
  }

  eqSlide(ui, band, handle, anEq) {
    anEq[band].value = ui.value;
    handle.text(ui.value);
  }
  keyHandler(key) {
    if (key.note > 20 && key.note < 109) {
      var pitchName = notesArr.filter((note) => {
        if (Math.round(note.frequency) === Math.round(key.frequency)) {
          return note;
        }
        return;
      });

      const changeSliderP = () => {
        sliderP.slider("value", pitchName[0].value);
        notesList[0].selectedIndex = pitchName[0].value - 1;
      };
      changeSliderP();
      this.playNDisplay();
    }
    // do some error handling here
    return;
  }
  async getKeyNote(key) {
    if (key.note > 20 && key.note < 109) {
      var pitchName = notesArr.filter((note) => {
        if (Math.round(note.frequency) === Math.round(key.frequency)) {
          return note;
        }
        return;
      });
    }
    return {
      freq: pitchName[0].frequency,
      pitch: pitchName[0].pitch,
      enharm: pitchName[0].enharmonic,
      value: pitchName[0].value,
    };
  }
  async attackSynthNum(synthNum, key) {
    var note = await this.getKeyNote(key);
    await synthNum.triggerAttack(note.freq);
  }
  releaseSynthNum(synthNum, key) {
    synthNum.triggerRelease();
  }
  unplugSynthNum(synthNum) {
    synthNum.dispose();
  }
  // need to create logic for inverted intervals
  displayInt(freq1, freq2, intEl, intAbbrEl, intHsEl) {
    var note1 = this.matchNoteFreq(freq1);
    var note2 = this.matchNoteFreq(freq2);
    var intFactor = note2.value - note1.value;
    if (intFactor < 0) {
      intFactor = intFactor * -1;
    }
    var intName;
    var intAbbr;
    var intHs;
    intArr.forEach((int) => {
      if (int.value === intFactor) {
        intName = int.name;
        intAbbr = int.abbr;
        intHs = int.value;
      }
    });
    intEl.text(intName);
    intAbbrEl.text(intAbbr);
    intHsEl.text(intHs);
    return intFactor;
  }

  async triadAnalyzer(notesArr) {
    const noteVals = notesArr.map((note) => note.value);
    let thisIntArr = [];
    for (var i = 0; i < noteVals.length - 1; i++) {
      const newInt = noteVals[i + 1] - noteVals[i];
      thisIntArr.push(newInt);
    }
    var matches = triNoteArr.filter((match) => {
      if (match.intervals[0] === thisIntArr[0]) {
        if (match.intervals[1] === thisIntArr[1]) {
          return match;
        }
      }
    });

    if (matches.length) {
      triadName.text(matches[0].name);
      triadInv.text(matches[0].inversion);
      switch (matches[0].inversion) {
        case "Root":
          if (notesArr[0].pitch.length === 2) {
            triadRoot.text(notesArr[0].pitch[0]);
          } else {
            triadRoot.text(notesArr[0].pitch[0] + notesArr[0].pitch[1]);
          }
          break;
        case "First":
          if (notesArr[2].pitch.length === 2) {
            triadRoot.text(notesArr[2].pitch[0]);
          } else {
            triadRoot.text(notesArr[2].pitch[0] + notesArr[2].pitch[1]);
          }
          break;
        case "Second":
          if (notesArr[1].pitch.length === 2) {
            triadRoot.text(notesArr[1].pitch[0]);
          } else {
            triadRoot.text(notesArr[1].pitch[0] + notesArr[1].pitch[1]);
          }
          break;
        case "Third":
          if (notesArr[1].pitch.length === 2) {
            triadRoot.text(notesArr[1].pitch[0]);
          } else {
            triadRoot.text(notesArr[1].pitch[0] + notesArr[1].pitch[1]);
          }
          break;
      }
      if (matches.length > 1) {
        altChordDisp.css({ display: "" });
        triadName2.text(matches[1].name);
        triadInv2.text(matches[1].inversion);
        switch (matches[1].inversion) {
          case "Root":
            if (notesArr[0].pitch.length === 2) {
              triadRoot2.text(notesArr[0].pitch[0]);
            } else {
              triadRoot2.text(notesArr[0].pitch[0] + notesArr[0].pitch[1]);
            }
            break;
          case "First":
            if (notesArr[2].pitch.length === 2) {
              triadRoot2.text(notesArr[2].pitch[0]);
            } else {
              triadRoot2.text(notesArr[2].pitch[0] + notesArr[2].pitch[1]);
            }
            break;
          case "Second":
            if (notesArr[1].pitch.length === 2) {
              triadRoot2.text(notesArr[1].pitch[0]);
            } else {
              triadRoot2.text(notesArr[1].pitch[0] + notesArr[1].pitch[1]);
            }
            break;
          case "Third":
            if (notesArr[1].pitch.length === 2) {
              triadRoot2.text(notesArr[1].pitch[0]);
            } else {
              triadRoot2.text(notesArr[1].pitch[0] + notesArr[1].pitch[1]);
            }
            break;
        }
      } else {
        altChordDisp.css({ display: "none" });
      }
    } else {
      triadName.text("N/A");
      triadInv.text("");
      triadRoot.text("");
      altChordDisp.css({ display: "none" });
    }
  }

  orderNotes(array) {
    array.sort((a, b) => a.value - b.value);
    return array;
  }
}
