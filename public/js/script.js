import Hi from "./helpers.js";
// for p1 and p2
import {
  p1El,
  p2El,
  p3El,
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
  play2,
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
} from "./dom.js";
// for p3...
// open synth
import { ctrlToggle, ctrlPanel } from "./dom.js";
// synths/controls
import {
  synthList3A,
  synthList3B,
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
  volSlider3C,
  volHandle3C,
  handleHigh3C,
  handleLow3C,
  handleMid3C,
  sliderLow3C,
  sliderMid3C,
  sliderHigh3C,
} from "./dom.js";
// display cards
import {
  noteCardA,
  noteCardB,
  noteCardC,
  intCard1,
  intCard2,
  chordCard1,
  chordCard2,
} from "./dom.js";
// display spans
import {
  noteSymA,
  noteSymB,
  noteSymC,
  intSym1,
  intSym2,
  choSym1,
  choSym2,
} from "./dom.js";
// keyboard setup/map
import { imgToggle, imgDispToggle, keyMapImg, keyMapDiv } from "./dom.js";

// Add functionality to nav bar
const p1 = () => {
  window.location.replace("/");
};
const p2 = () => {
  window.location.replace("/2");
};
const p3 = () => {
  window.location.replace("/3");
};

// will be used in future version w/ multiple pages
// p1El.on("click", p1);
// p2El.on("click", p2);
// p3El.on("click", p3);

// declare fn to start audio context/tone. call fn at page load.
const start = () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }
};
start();

// current values of tone quality parameters
var curNoteVal;
var curVolVal = 0;
var curDurVal = 0.1;
var curLowVal = 0;
var curMidVal = 0;
var curHighVal = 0;

const MyHi = new Hi(
  curNoteVal,
  curVolVal,
  curDurVal,
  curLowVal,
  curMidVal,
  curHighVal
);

// Switch/case for different pages
// current version only has 1 page, so only one case; leaving switch/case for future development
switch (window.location.pathname) {
  case "/":
    const vol3A = new Tone.Volume(0).toDestination();
    const eq3A = new Tone.EQ3(0, 0, 0).connect(vol3A);
    var synth3A = new Tone.AMSynth().connect(eq3A);
    const vol3B = new Tone.Volume(0).toDestination();
    const eq3B = new Tone.EQ3(0, 0, 0).connect(vol3B);
    var synth3B = new Tone.AMSynth().connect(eq3B);
    const vol3C = new Tone.Volume(0).toDestination();
    const eq3C = new Tone.EQ3(0, 0, 0).connect(vol3C);
    var synth3C = new Tone.AMSynth().connect(eq3C);
    // Create my keyboard controller
    var activeNotes = [];
    const keyboard3 = new AudioKeys({
      rows: 1,
      polyphony: 1000,
    });
    var activeInts = [];
    // define behaviors of interactable elements on page;

    synthList3A.on("change", async () => {
      synth3A = await MyHi.switchSynth(synthList3A, synth3A, eq3A);
    });
    // by default, browser will change this list when it is 'in focus' (after being clicked). This handler will prevent that.
    synthList3A.on("keydown", function (event) {
      event.preventDefault();
    });
    synthList3B.on("change", async () => {
      synth3B = await MyHi.switchSynth(synthList3B, synth3B, eq3B);
    });
    synthList3B.on("keydown", function (event) {
      event.preventDefault();
    });
    synthList3C.on("change", async () => {
      synth3C = await MyHi.switchSynth(synthList3C, synth3C, eq3C);
    });
    synthList3C.on("keydown", function (event) {
      event.preventDefault();
    });
    ctrlToggle.on("click", async function (event) {
      const modContainers = $(".mod-container");
      var dispStatus = modContainers.css("display");
      console.log(dispStatus);
      if (dispStatus !== "none") {
        ctrlToggle.text("Open Synth Controls");
        modContainers.css({ display: "none" });
      } else if (dispStatus === "none") {
        ctrlToggle.text("Close Synth Controls");
        modContainers.css({ display: "flex", "flex-direction": "column" });
      }
    });

    imgToggle.on("click", async function (event) {
      var curSrc = keyMapImg.attr("src");
      console.log();
      if (curSrc === "assets/images/audiokeys-1row.jpeg") {
        keyboard3._state.rows = 2;
        keyMapImg.attr("src", "assets/images/audiokeys-2row.jpeg");
      } else {
        keyboard3._state.rows = 1;
        keyMapImg.attr("src", "assets/images/audiokeys-1row.jpeg");
      }
    });

    imgDispToggle.on("click", async function () {
      if (keyMapDiv.css("display") === "none") {
        imgDispToggle.text("Hide Keyboard Map");
        keyMapDiv.css("display", "flex");
      } else {
        imgDispToggle.text("Show Keyboard Map");
        keyMapDiv.css("display", "none");
      }
    });
    // initialize sliders:
    volSlider3A.slider({
      min: -30,
      max: 30,
      orientation: "vertical",
      create: function () {
        volHandle3A.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.volSlide(event, ui, volHandle3A, vol3A);
      },
    });

    volSlider3B.slider({
      min: -30,
      max: 30,
      orientation: "vertical",
      create: function () {
        volHandle3B.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.volSlide(event, ui, volHandle3B, vol3B);
      },
    });
    volSlider3C.slider({
      min: -30,
      max: 30,
      orientation: "vertical",
      create: function () {
        volHandle3C.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.volSlide(event, ui, volHandle3C, vol3C);
      },
    });

    sliderLow3A.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleLow3A.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "low", handleLow3A, eq3A);
      },
    });

    sliderMid3A.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleMid3A.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "mid", handleMid3A, eq3A);
      },
    });

    sliderHigh3A.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleHigh3A.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "high", handleHigh3A, eq3A);
      },
    });

    sliderLow3B.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleLow3B.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "low", handleLow3B, eq3B);
      },
    });

    sliderMid3B.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleMid3B.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "mid", handleMid3B, eq3B);
      },
    });

    sliderHigh3B.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleHigh3B.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "high", handleHigh3B, eq3B);
      },
    });

    sliderLow3C.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleLow3C.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "low", handleLow3C, eq3C);
      },
    });

    sliderMid3C.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleMid3C.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "mid", handleMid3C, eq3C);
      },
    });

    sliderHigh3C.slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleHigh3C.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "high", handleHigh3C, eq3C);
      },
    });

    const displayHandler = async () => {
      MyHi.resetChord(choSym1);
      chordCard2.css("display", "none");
      var sortedNotes = MyHi.orderNotes(activeNotes);
      const noteSpans = [noteSymA, noteSymB, noteSymC];
      for (var i = 0; i < 3; i++) {
        if (sortedNotes[i]) {
          MyHi.dispNote(sortedNotes[i], noteSpans[i]);
          if (i === 1) {
            MyHi.displayInt(sortedNotes[0], sortedNotes[1], intCard1);
          } else if (i === 2) {
            MyHi.displayInt(sortedNotes[1], sortedNotes[2], intCard2);
            var chordArr = await MyHi.triadAnalyzer(sortedNotes);
          }
        } else {
          MyHi.resetNote(noteSpans[i]);

          if (i === 1) {
            MyHi.resetInt(intSym1);
          } else if (i === 2) {
            MyHi.resetInt(intSym2);
          }
        }
      }
      if (chordArr) {
        const arr = chordArr[0];
        if (arr.root) {
          MyHi.chooseEnharmonic(arr.root, arr.note2, arr.note3);
        }
      }
    };

    keyboard3.down(async (key) => {
      if (activeNotes.length === 3) {
        return;
      }
      // if no active notes...
      if (!activeNotes.length) {
        //... get freq of key pressed
        var keyData = await MyHi.getKeyNote(key);
        // create new 'note' object; push to array
        var note = {
          active: true,
          freq: keyData.freq,
          synth: "3A",
          pitch: keyData.pitch,
          enharmonic: keyData.enharm,
          value: keyData.value,
          keyCode: key.keyCode,
        };
        activeNotes.push(note);
        // play synth at 'key'
        MyHi.attackSynthNum(synth3A, key);
      } else if (activeNotes.length === 1) {
        // similar to above, but if a note is active, second synth will be activated
        var keyData = await MyHi.getKeyNote(key);
        var nextSynth;
        var synthObj;
        switch (activeNotes[0].synth) {
          case "3A":
            nextSynth = "3B";
            synthObj = synth3B;
            break;
          case "3B":
            nextSynth = "3A";
            synthObj = synth3A;
            break;
          case "3C":
            nextSynth = "3A";
            synthObj = synth3A;
            break;
        }
        var note = {
          active: true,
          freq: keyData.freq,
          synth: nextSynth,
          pitch: keyData.pitch,
          enharmonic: keyData.enharm,
          value: keyData.value,
          keyCode: key.keyCode,
        };
        activeNotes.push(note);
        MyHi.attackSynthNum(synthObj, key);
      } else if (activeNotes.length === 2) {
        // similar to above, but if a note is active, second synth will be activated
        var keyData = await MyHi.getKeyNote(key);
        var nextSynth;
        var synthObj;
        switch (activeNotes[0].synth) {
          case "3A":
            if (activeNotes[1].synth === "3B") {
              nextSynth = "3C";
              synthObj = synth3C;
            } else {
              nextSynth = "3B";
              synthObj = synth3B;
            }
            break;
          case "3B":
            if (activeNotes[1].synth === "3A") {
              nextSynth = "3C";
              synthObj = synth3C;
            } else {
              nextSynth = "3A";
              synthObj = synth3A;
            }
            break;
          case "3C":
            if (activeNotes[1].synth === "3A") {
              nextSynth = "3B";
              synthObj = synth3B;
            } else {
              nextSynth = "3A";
              synthObj = synth3A;
            }
            break;
        }
        var note = {
          active: true,
          freq: keyData.freq,
          synth: nextSynth,
          pitch: keyData.pitch,
          enharmonic: keyData.enharm,
          value: keyData.value,
          keyCode: key.keyCode,
        };
        activeNotes.push(note);
        // need to add another interval display
        MyHi.attackSynthNum(synthObj, key);
      } else if (activeNotes.length >= 3) {
        return;
      }
      displayHandler();
    });

    // define behavior when key is released
    keyboard3.up(async (key) => {
      const keyCodeUp = key.keyCode;
      // release synth that corresponds to 'synth' property of note released;
      // remove 'note' object from array of active notes
      var noteIndex;
      const myNote = activeNotes.find((note, index) => {
        if (note.keyCode === keyCodeUp) {
          noteIndex = index;
          return note;
        }
      });
      if (!myNote) {
        return;
      }
      if (myNote.synth === "3A") {
        MyHi.releaseSynthNum(synth3A);
        activeNotes.splice(noteIndex, 1);
      } else if (myNote.synth === "3B") {
        MyHi.releaseSynthNum(synth3B);
        activeNotes.splice(noteIndex, 1);
      } else if (myNote.synth === "3C") {
        MyHi.releaseSynthNum(synth3C);
        activeNotes.splice(noteIndex, 1);
      }
      displayHandler();
    });
    break;
}
