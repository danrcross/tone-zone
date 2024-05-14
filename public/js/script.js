import Hi from "./helpers.js";

import {
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
} from "./dom.js";

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
});

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

// declare fn to start audio context/tone. call fn at page load.
const start = () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }
};
start();
// });
