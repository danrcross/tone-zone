const notesArr = [
  { frequency: 27.5, pitch: "A0", enharmonic: null, value: 1 },
  { frequency: 29.14, pitch: "A♯0", enharmonic: "B♭0", value: 2 },
  { frequency: 30.87, pitch: "B0", enharmonic: null, value: 3 },
  { frequency: 32.7, pitch: "C1", enharmonic: null, value: 4 },
  { frequency: 34.65, pitch: "C♯1", enharmonic: "D♭1", value: 5 },
  { frequency: 36.71, pitch: "D1", enharmonic: null, value: 6 },
  { frequency: 38.89, pitch: "D♯1", enharmonic: "E♭1", value: 7 },
  { frequency: 41.2, pitch: "E1", enharmonic: null, value: 8 },
  { frequency: 43.65, pitch: "F1", enharmonic: null, value: 9 },
  { frequency: 46.25, pitch: "F♯1", enharmonic: "G♭1", value: 10 },
  { frequency: 49.0, pitch: "G1", enharmonic: null, value: 11 },
  { frequency: 51.91, pitch: "G♯1", enharmonic: "A♭1", value: 12 },
  { frequency: 55.0, pitch: "A1", enharmonic: null, value: 13 },
  { frequency: 58.27, pitch: "A♯1", enharmonic: "B♭1", value: 14 },
  { frequency: 61.74, pitch: "B1", enharmonic: null, value: 15 },
  { frequency: 65.41, pitch: "C2", enharmonic: null, value: 16 },
  { frequency: 69.3, pitch: "C♯2", enharmonic: "D♭2", value: 17 },
  { frequency: 73.42, pitch: "D2", enharmonic: null, value: 18 },
  { frequency: 77.78, pitch: "D♯2", enharmonic: "E♭2", value: 19 },
  { frequency: 82.41, pitch: "E2", enharmonic: null, value: 20 },
  { frequency: 87.31, pitch: "F2", enharmonic: null, value: 21 },
  { frequency: 92.5, pitch: "F♯2", enharmonic: "G♭2", value: 22 },
  { frequency: 98.0, pitch: "G2", enharmonic: null, value: 23 },
  { frequency: 103.83, pitch: "G♯2", enharmonic: "A♭2", value: 24 },
  { frequency: 110.0, pitch: "A2", enharmonic: null, value: 25 },
  { frequency: 116.54, pitch: "A♯2", enharmonic: "B♭2", value: 26 },
  { frequency: 123.47, pitch: "B2", enharmonic: null, value: 27 },
  { frequency: 130.81, pitch: "C3", enharmonic: null, value: 28 },
  { frequency: 138.59, pitch: "C♯3", enharmonic: "D♭3", value: 29 },
  { frequency: 146.83, pitch: "D3", enharmonic: null, value: 30 },
  { frequency: 155.56, pitch: "D♯3", enharmonic: "E♭3", value: 31 },
  { frequency: 164.81, pitch: "E3", enharmonic: null, value: 32 },
  { frequency: 174.61, pitch: "F3", enharmonic: null, value: 33 },
  { frequency: 185.0, pitch: "F♯3", enharmonic: "G♭3", value: 34 },
  { frequency: 196.0, pitch: "G3", enharmonic: null, value: 35 },
  { frequency: 207.65, pitch: "G♯3", enharmonic: "A♭3", value: 36 },
  { frequency: 220.0, pitch: "A3", enharmonic: null, value: 37 },
  { frequency: 233.08, pitch: "A♯3", enharmonic: "B♭3", value: 38 },
  { frequency: 246.94, pitch: "B3", enharmonic: null, value: 39 },
  { frequency: 261.63, pitch: "C4", enharmonic: null, value: 40 },
  { frequency: 277.18, pitch: "C♯4", enharmonic: "D♭4", value: 41 },
  { frequency: 293.66, pitch: "D4", enharmonic: null, value: 42 },
  { frequency: 311.13, pitch: "D♯4", enharmonic: "E♭4", value: 43 },
  { frequency: 329.63, pitch: "E4", enharmonic: null, value: 44 },
  { frequency: 349.23, pitch: "F4", enharmonic: null, value: 45 },
  { frequency: 369.99, pitch: "F♯4", enharmonic: "G♭4", value: 46 },
  { frequency: 392.0, pitch: "G4", enharmonic: null, value: 47 },
  { frequency: 415.3, pitch: "G♯4", enharmonic: "A♭4", value: 48 },
  { frequency: 440.0, pitch: "A4", enharmonic: null, value: 49 },
  { frequency: 466.16, pitch: "A♯4", enharmonic: "B♭4", value: 50 },
  { frequency: 493.88, pitch: "B4", enharmonic: null, value: 51 },
  { frequency: 523.25, pitch: "C5", enharmonic: null, value: 52 },
  { frequency: 554.37, pitch: "C♯5", enharmonic: "D♭5", value: 53 },
  { frequency: 587.33, pitch: "D5", enharmonic: null, value: 54 },
  { frequency: 622.25, pitch: "D♯5", enharmonic: "E♭5", value: 55 },
  { frequency: 659.26, pitch: "E5", enharmonic: null, value: 56 },
  { frequency: 698.46, pitch: "F5", enharmonic: null, value: 57 },
  { frequency: 739.99, pitch: "F♯5", enharmonic: "G♭5", value: 58 },
  { frequency: 783.99, pitch: "G5", enharmonic: null, value: 59 },
  { frequency: 830.61, pitch: "G♯5", enharmonic: "A♭5", value: 60 },
  { frequency: 880.0, pitch: "A5", enharmonic: null, value: 61 },
  { frequency: 932.33, pitch: "A♯5", enharmonic: "B♭5", value: 62 },
  { frequency: 987.77, pitch: "B5", enharmonic: null, value: 63 },
  { frequency: 1046.5, pitch: "C6", enharmonic: null, value: 64 },
  { frequency: 1108.73, pitch: "C♯6", enharmonic: "D♭6", value: 65 },
  { frequency: 1174.66, pitch: "D6", enharmonic: null, value: 66 },
  { frequency: 1244.51, pitch: "D♯6", enharmonic: "E♭6", value: 67 },
  { frequency: 1318.51, pitch: "E6", enharmonic: null, value: 68 },
  { frequency: 1396.91, pitch: "F6", enharmonic: null, value: 69 },
  { frequency: 1479.98, pitch: "F♯6", enharmonic: "G♭6", value: 70 },
  { frequency: 1567.98, pitch: "G6", enharmonic: null, value: 71 },
  { frequency: 1661.22, pitch: "G♯6", enharmonic: "A♭6", value: 72 },
  { frequency: 1760.0, pitch: "A6", enharmonic: null, value: 73 },
  { frequency: 1864.66, pitch: "A♯6", enharmonic: "B♭6", value: 74 },
  { frequency: 1975.53, pitch: "B6", enharmonic: null, value: 75 },
  { frequency: 2093.0, pitch: "C7", enharmonic: null, value: 76 },
  { frequency: 2217.46, pitch: "C♯7", enharmonic: "D♭7", value: 77 },
  { frequency: 2349.32, pitch: "D7", enharmonic: null, value: 78 },
  { frequency: 2489.02, pitch: "D♯7", enharmonic: "E♭7", value: 79 },
  { frequency: 2637.02, pitch: "E7", enharmonic: null, value: 80 },
  { frequency: 2793.83, pitch: "F7", enharmonic: null, value: 81 },
  { frequency: 2959.96, pitch: "F♯7", enharmonic: "G♭7", value: 82 },
  { frequency: 3135.96, pitch: "G7", enharmonic: null, value: 83 },
  { frequency: 3322.44, pitch: "G♯7", enharmonic: "A♭7", value: 84 },
  { frequency: 3520.0, pitch: "A7", enharmonic: null, value: 85 },
  { frequency: 3729.31, pitch: "A♯7", enharmonic: "B♭7", value: 86 },
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
  // { value: 13, name: "Minor 2nd", abbr: "m2" },
  // { value: 14, name: "Minor 2nd", abbr: "m2" },
  // { value: 15, name: "Minor 2nd", abbr: "m2" },
  // { value: 16, name: "Minor 2nd", abbr: "m2" },
  // { value: 17, name: "Minor 2nd", abbr: "m2" },
  // { value: 18, name: "Minor 2nd", abbr: "m2" },
  // { value: 19, name: "Minor 2nd", abbr: "m2" },
  // { value: 20, name: "Minor 2nd", abbr: "m2" },
  // { value: 21, name: "Minor 2nd", abbr: "m2" },
  // { value: 22, name: "Minor 2nd", abbr: "m2" },
  // { value: 23, name: "Minor 2nd", abbr: "m2" },
  // { value: 24, name: "Minor 2nd", abbr: "m2" },
];

const letVal = [
  {
    letter: "A",
    value: 1,
  },
  {
    letter: "B",
    value: 2,
  },
  {
    letter: "C",
    value: 3,
  },
  {
    letter: "D",
    value: 4,
  },
  {
    letter: "E",
    value: 5,
  },
  {
    letter: "F",
    value: 6,
  },
  {
    letter: "G",
    value: 7,
  },
];
const majTri = "\u25B3";
const dimDeg = "\u00B0";
const triNoteArr = [
  {
    name: majTri,
    intervals: [4, 3],
    inversion: "Root",
  },
  {
    name: "-",
    intervals: [3, 4],
    inversion: "Root",
  },
  {
    name: "sus2",
    intervals: [2, 5],
    inversion: "Root",
  },
  {
    name: "sus4",
    intervals: [5, 2],
    inversion: "Root",
  },
  {
    name: dimDeg,
    intervals: [3, 3],
    inversion: "Root",
  },
  {
    name: "+",
    intervals: [4, 4],
    inversion: "Root",
  },
  {
    name: majTri,
    intervals: [3, 5],
    inversion: "First",
  },
  {
    name: "-",
    intervals: [4, 5],
    inversion: "First",
  },
  {
    name: "sus2",
    intervals: [5, 5],
    inversion: "First",
  },
  {
    name: "sus4",
    intervals: [2, 5],
    inversion: "First",
  },
  {
    name: dimDeg,
    intervals: [3, 6],
    inversion: "First",
  },
  {
    name: majTri,
    intervals: [5, 4],
    inversion: "Second",
  },
  {
    name: "-",
    intervals: [5, 3],
    inversion: "Second",
  },
  {
    name: "sus2",
    intervals: [5, 2],
    inversion: "Second",
  },
  {
    name: "sus4",
    intervals: [5, 5],
    inversion: "Second",
  },
  {
    name: dimDeg,
    intervals: [6, 3],
    inversion: "Second",
  },
  {
    name: majTri + "7" + "(no5)",
    intervals: [4, 7],
    inversion: "Root",
  },
  {
    name: "-" + "7" + "(no5)",
    intervals: [3, 7],
    inversion: "Root",
  },
  {
    name: majTri + "7" + "(no5)",
    intervals: [7, 1],
    inversion: "First",
  },
  {
    name: "-" + "7" + "(no5)",
    intervals: [7, 2],
    inversion: "First",
  },
  {
    name: majTri + "7" + "(no5)",
    intervals: [1, 4],
    inversion: "Third",
  },
  {
    name: "-" + "7" + "(no5)",
    intervals: [2, 3],
    inversion: "Third",
  },
  {
    name: "7" + "(no5)",
    intervals: [4, 6],
    inversion: "Root",
  },
  {
    name: "7" + "(no5)",
    intervals: [6, 4],
    inversion: "First",
  },
  {
    name: "7" + "(no5)",
    intervals: [2, 4],
    inversion: "Third",
  },
  {
    name: majTri + "(add9)(no5)",
    intervals: [4, 10],
    inversion: "Root",
  },
  {
    name: majTri + "(add9)(no5)",
    intervals: [10, 10],
    inversion: "First",
  },
  {
    name: majTri + "(add9)(no5)",
    intervals: [8, 2],
    inversion: "Third",
  },
];
const note1 = notesArr[50];
const note2 = notesArr[52];
const note3 = notesArr[57];
var rootGood;
var n2Good;
var n3Good;
// works for root position triads
chooseEnharmonic = (root, note2, note3) => {
  var letVal1;
  var letVal2;
  var letVal3;
  var rootGood;
  var n2Good;
  var n3Good;
  for (var i = 0; i < letVal.length; i++) {
    if (root.pitch[0] === letVal[i].letter) {
      letVal1 = letVal[i].value;
    }
    if (note2.pitch[0] === letVal[i].letter) {
      letVal2 = letVal[i].value;
    }
    if (note3.pitch[0] === letVal[i].letter) {
      letVal3 = letVal[i].value;
    }
  }

  if (root.enharmonic) {
    rootGood = root.pitch[0] + root.pitch[1];
    n2Good = note2.pitch[0] + note2.pitch[1];
    n3Good = note3.pitch[0] + note3.pitch[1];
    var adjChord = { root: rootGood, n2: n2Good, n3: n3Good };
    console.log(adjChord);
  }
  if (!root.enharmonic && note2.enharmonic) {
    var myInt = root.value - note2.value;
    if (myInt < 0) {
      myInt = myInt * -1;
    }
    console.log(letVal1);
    var letInt = letVal2 - letVal1 + 1;
    if (letInt < 0) {
      letInt = letInt * -1;
    }
    console.log(letInt);

    if (intArr[myInt].abbr[1] == letInt) {
      rootGood = root.pitch[0];
      n2Good = note2.pitch[0] + note2.pitch[1];
      if (note3.enharmonic) {
        n3Good = note3.pitch[0] + note3.pitch[1];
      } else {
        n3Good = note3.pitch[0];
      }
    } else {
      rootGood = root.pitch[0];
      n2Good = note2.enharmonic[0] + note2.enharmonic[1];
      if (!note3.enharmonic) {
        n3Good = note3.pitch[0];
      } else {
        n3Good = note3.enharmonic[0] + note3.enharmonic[1];
      }
    }
    var adjChord = { root: rootGood, n2: n2Good, n3: n3Good };
    console.log(adjChord);
  }
  console.log(rootGood);
  console.log(n2Good);
  console.log(n3Good);
};

chooseEnharmonic(note1, note2, note3);

triadAnalyzer = (notesArr) => {
  var chord = {
    root: null,
    note2: null,
    note3: null,
  };
  var chord2 = {
    root: null,
    note2: null,
    note3: null,
  };
  const parH2Nodes = chordCard1.find("h2").contents();
  if (parH2Nodes[0].textContent === `Chord`) {
    parH2Nodes[0].remove();
  }
  const parH2Nodes2 = chordCard2.find("h2").contents();
  if (parH2Nodes2[0].textContent === `Alternative Chord`) {
    parH2Nodes2[0].remove();
  }
  choSym1.text("");
  const orng = `var(--lt-orng)`;
  const grn = `var(--lt-grn)`;
  const prpl = `var(--lt-prpl)`;
  var color1;
  var color2;
  var synths = [];
  notesArr.forEach((note) => {
    synths.push(note.synth);
  });
  switch (synths[0]) {
    case "3A":
      if (synths[1] === "3B") {
        color1 = orng;
        color2 = grn;
      } else {
        color1 = prpl;
        color2 = grn;
      }
      break;
    case "3B":
      if (synths[1] === "3A") {
        color1 = orng;
        color2 = prpl;
      } else {
        color1 = grn;
        color2 = prpl;
      }
      break;
    case "3C":
      if (synths[1] === "3A") {
        color1 = prpl;
        color2 = orng;
      } else {
        color1 = grn;
        color2 = orng;
      }
  }
  chordCard1.css({
    background: `linear-gradient(270deg, ${color1} , ${color2} )`,
    "background-size": `400% 400%`,
    animation: `AnimationName 2s ease infinite`,
  });
  chordCard2.css({
    background: `linear-gradient(270deg, ${color1} , ${color2} )`,
    "background-size": `400% 400%`,
    animation: `AnimationName 2s ease infinite`,
  });

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
    chordCard2.css({ display: "none" });
    choSym1.css({ color: "black", "font-size": "50px" });
    switch (matches[0].inversion) {
      case "Root":
        chord = {
          root: notesArr[0],
          note2: notesArr[1],
          note3: notesArr[2],
        };
        if (notesArr[0].pitch.length === 2) {
          choSym1.text(notesArr[0].pitch[0] + matches[0].name);
        } else {
          choSym1.text(
            notesArr[0].pitch[0] + notesArr[0].pitch[1] + matches[0].name
          );
        }
        break;
      case "First":
        chord = {
          root: notesArr[2],
          note2: notesArr[0],
          note3: notesArr[1],
        };
        if (notesArr[2].pitch.length === 2) {
          if (notesArr[0].pitch.length === 2) {
            choSym1.text(
              notesArr[2].pitch[0] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0]
            );
          } else if (notesArr[0].pitch.length === 3) {
            choSym1.text(
              notesArr[2].pitch[0] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0] +
                notesArr[0].pitch[1]
            );
          }
        } else {
          if (notesArr[0].pitch.length === 2) {
            choSym1.text(
              notesArr[2].pitch[0] +
                notesArr[2].pitch[1] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0]
            );
          } else if (notesArr[0].pitch.length === 3) {
            choSym1.text(
              notesArr[2].pitch[0] +
                notesArr[2].pitch[1] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0] +
                notesArr[0].pitch[1]
            );
          }
        }
        break;
      case "Second":
        chord = {
          root: notesArr[1],
          note2: notesArr[2],
          note3: notesArr[0],
        };
        if (notesArr[1].pitch.length === 2) {
          if (notesArr[0].pitch.length === 2) {
            choSym1.text(
              notesArr[1].pitch[0] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0]
            );
          } else if (notesArr[1].pitch.length === 3) {
            choSym1.text(
              notesArr[1].pitch[0] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0] +
                notesArr[0].pitch[1]
            );
          }
        } else {
          if (notesArr[0].pitch.length === 2) {
            choSym1.text(
              notesArr[1].pitch[0] +
                notesArr[1].pitch[1] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0]
            );
          } else if (notesArr[0].pitch.length === 3) {
            choSym1.text(
              notesArr[1].pitch[0] +
                notesArr[1].pitch[1] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0] +
                notesArr[0].pitch[1]
            );
          }
        }
        break;
      case "Third":
        chord = {
          root: notesArr[1],
          note2: notesArr[2],
          note3: notesArr[0],
        };
        if (notesArr[1].pitch.length === 2) {
          if (notesArr[0].pitch.length === 2) {
            choSym1.text(
              notesArr[1].pitch[0] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0]
            );
          } else if (notesArr[1].pitch.length === 3) {
            choSym1.text(
              notesArr[1].pitch[0] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0] +
                notesArr[0].pitch[1]
            );
          }
        } else {
          if (notesArr[0].pitch.length === 2) {
            choSym1.text(
              notesArr[1].pitch[0] +
                notesArr[1].pitch[1] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0]
            );
          } else if (notesArr[0].pitch.length === 3) {
            choSym1.text(
              notesArr[1].pitch[0] +
                notesArr[1].pitch[1] +
                matches[0].name +
                "/" +
                notesArr[0].pitch[0] +
                notesArr[0].pitch[1]
            );
          }
        }
    }
    if (matches.length > 1) {
      chordCard2.css({ display: "flex", width: "30%" });
      chordCard1.css({ display: "flex", width: "30%" });
      choSym2.css({ color: "black", "font-size": "50px" });
      switch (matches[1].inversion) {
        case "Root":
          chord2 = {
            root: notesArr[0],
            note2: notesArr[1],
            note3: notesArr[2],
          };
          if (notesArr[0].pitch.length === 2) {
            chordLabel2.text(notesArr[0].pitch[0] + matches[1].name);
          } else {
            chordLabel2.text(
              notesArr[0].pitch[0] + notesArr[0].pitch[1] + matches[1].name
            );
          }
          break;
        case "First":
          chord2 = {
            root: notesArr[2],
            note2: notesArr[0],
            note3: notesArr[1],
          };
          if (notesArr[2].pitch.length === 2) {
            if (notesArr[0].pitch.length === 2) {
              choSym2.text(
                notesArr[2].pitch[0] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0]
              );
            } else if (notesArr[0].pitch.length === 3) {
              choSym2.text(
                notesArr[2].pitch[0] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0] +
                  notesArr[0].pitch[1]
              );
            }
          } else {
            if (notesArr[0].pitch.length === 2) {
              choSym2.text(
                notesArr[2].pitch[0] +
                  notesArr[2].pitch[1] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0]
              );
            } else if (notesArr[0].pitch.length === 3) {
              choSym2.text(
                notesArr[2].pitch[0] +
                  notesArr[2].pitch[1] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0] +
                  notesArr[0].pitch[1]
              );
            }
          }
          break;
        case "Second":
          chord2 = {
            root: notesArr[1],
            note2: notesArr[2],
            note3: notesArr[0],
          };
          if (notesArr[1].pitch.length === 2) {
            if (notesArr[0].pitch.length === 2) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0]
              );
            } else if (notesArr[1].pitch.length === 3) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0] +
                  notesArr[0].pitch[1]
              );
            }
          } else {
            if (notesArr[0].pitch.length === 2) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  notesArr[1].pitch[1] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0]
              );
            } else if (notesArr[0].pitch.length === 3) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  notesArr[1].pitch[1] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0] +
                  notesArr[0].pitch[1]
              );
            }
          }
          break;
        case "Third":
          chord2 = {
            root: notesArr[1],
            note2: notesArr[2],
            note3: notesArr[0],
          };
          if (notesArr[1].pitch.length === 2) {
            if (notesArr[0].pitch.length === 2) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0]
              );
            } else if (notesArr[1].pitch.length === 3) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0] +
                  notesArr[0].pitch[1]
              );
            }
          } else {
            if (notesArr[0].pitch.length === 2) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  notesArr[1].pitch[1] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0]
              );
            } else if (notesArr[0].pitch.length === 3) {
              choSym2.text(
                notesArr[1].pitch[0] +
                  notesArr[1].pitch[1] +
                  matches[1].name +
                  "/" +
                  notesArr[0].pitch[0] +
                  notesArr[0].pitch[1]
              );
            }
          }
      }
    }
  } else {
    choSym1.css({ color: "white", "font-size": "20px" });
    choSym1.text("Unknown Chord");
    chordCard2.css({ display: "none" });
  }
  var chordArr = [chord, chord2];
  return chordArr;
};
