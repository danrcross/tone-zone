import Hi from "./helpers.js";
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
  notesList,
  playbtn,
  sliderP,
  synthList,
  handleLow,
  handleMid,
  handleHigh,
  play2,
} from "./dom.js";

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

p1El.on("click", p1);
p2El.on("click", p2);
p3El.on("click", p3);

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
switch (window.location.pathname) {
  case "/":
    synthList.on("change", () => {
      MyHi.switchSynth();
    });

    // by default, browser will change this list when it is 'in focus' (after being clicked). This handler will prevent that.
    synthList.on("keydown", function (event) {
      event.preventDefault();
    });

    // Create my keyboard controller
    const keyboard = new AudioKeys({
      rows: 1,
      polyphony: 1,
    });

    // initialize pitch slider
    sliderP.insertAfter(notesList).slider({
      min: 1,
      max: 88,
      range: "min",
      value: notesList[0].selectedIndex + 1,
      slide: async function (event, ui) {
        MyHi.pitchSlide(event, ui);
      },
    });

    // initialize volume slider

    $("#slider-v").slider({
      min: -30,
      max: 30,
      orientation: "vertical",
      create: function () {
        handle.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.volSlide(event, ui);
      },
    });

    // initialize duration slider
    // var handle2 = $("#custom-handle-2");
    $("#slider-d").slider({
      min: 1,
      max: 3000,
      step: 1,
      create: function () {
        handle2.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        handle2.text(ui.value);
      },
    });

    // init eq sliders

    $("#slider-eq-low").slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleLow.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "low", handleLow);
      },
    });

    $("#slider-eq-mid").slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleMid.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "mid", handleMid);
      },
    });

    $("#slider-eq-high").slider({
      min: -50,
      max: 50,
      step: 1,
      orientation: "vertical",
      create: function () {
        handleHigh.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        MyHi.eqSlide(ui, "mid", handleHigh);
      },
    });

    //playbutton triggers note
    playbtn.on("click", () => {
      MyHi.playNDisplay();
      return;
    });

    // selecting from dropdown triggers note
    notesList.on("change", () => {
      MyHi.playNDisplay();
      sliderP.slider("value", this.selectedIndex + 1);
      return;
    });

    // keyboard event trigger
    keyboard.down((key) => {
      MyHi.keyHandler(key);
    });

    break;

  case "/2":
    // Create my keyboard controller
    var activeNotes = [];
    const keyboard2 = new AudioKeys({
      rows: 1,
      polyphony: 2,
    });
    keyboard2.down(async (key) => {
      if (!activeNotes.length) {
        var freqKey = await MyHi.getKeyNote(key);

        var note = {
          active: true,
          freq: freqKey,
        };
        activeNotes.push(note);
        MyHi.attackSynth2(key);
      } else if (activeNotes.length === 1) {
        var freqKey = await MyHi.getKeyNote(key);
        var note = {
          active: true,
          freq: freqKey,
        };
        activeNotes.push(note);
        MyHi.attackSynth3(key);
      }
    });
    keyboard2.up(async (key) => {
      var checkFreq = await MyHi.getKeyNote(key);
      activeNotes.forEach((note) => {
        if (note.freq === checkFreq) {
          var noteInd = activeNotes.indexOf(note);
          console.log(noteInd);
          activeNotes.splice(noteInd);
          //just need to release the correct note now
          // MyHi.releaseSynth2();
          // MyHi.releaseSynth3();
        }
      });
    });
    break;
}
