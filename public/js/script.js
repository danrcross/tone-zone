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
    });
    // define behavior when a key is pressed down
    // I wonder if these down/up functions could be simplified...
    keyboard2.down(async (key) => {
      // if no active notes...
      if (!activeNotes.length) {
        //... get freq of key pressed
        var freqKey = await MyHi.getKeyNote(key);
        // create new 'note' object; push to array
        var note = {
          active: true,
          freq: freqKey,
          synth: 2,
        };
        activeNotes.push(note);
        // play synth at 'key'
        MyHi.attackSynth2(key);
      } else if (activeNotes.length === 1) {
        // similar to above, but if a note is active, second synth will be activated
        var freqKey = await MyHi.getKeyNote(key);
        var note = {
          active: true,
          freq: freqKey,
          synth: 3,
        };
        activeNotes.push(note);
        if (activeNotes.length === 2) {
          var freq1 = activeNotes[0].freq;
          var freq2 = activeNotes[1].freq;
          MyHi.displayInt(freq1, freq2);
        }
        MyHi.attackSynth3(key);
      }

      console.log(activeNotes);
    });

    // define behavior when key is released
    keyboard2.up(async (key) => {
      // get frequency corresponding to key released
      var checkFreq = await MyHi.getKeyNote(key);
      console.log(checkFreq);
      var myInd = null;
      // get index of my note
      activeNotes.forEach((note, index) => {
        if (note.freq === checkFreq) {
          return (myInd = index);
        }
      });
      // release synth that corresponds to 'synth' property of note released;
      // remove 'note' object from array of active notes
      if (activeNotes[myInd].synth === 2) {
        MyHi.releaseSynth2();
        activeNotes.splice(myInd, 1);
      } else if (activeNotes[myInd].synth === 3) {
        MyHi.releaseSynth3();
        activeNotes.splice(myInd, 1);
      }
    });

    break;
}
