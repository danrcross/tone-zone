const notesList = $("#pitch");
// initialize pitch slider
sliderP.insertAfter(notesList).slider({
  min: 1,
  max: 88,
  range: "min",
  value: notesList[0].selectedIndex + 1,
  slide: function (event, ui) {
    var curNoteIndex = ui.value - 1;
    var ddNoteVal = notesList.val();
    var freqName = matchNote(ddNoteVal);
    curNoteVal = notesList.children().eq(curNoteIndex).text();
    curDurVal = handle2.text() / 1000;
    dispNote(ddNoteVal, freqName);
    synth.triggerAttackRelease(curNoteVal, curDurVal);
    console.log(ui.value);
    notesList[0].selectedIndex = ui.value - 1;
  },
});

// initialize volume slider

var handle = $("#slider-vertical");
$("#slider-v").slider({
  min: -30,
  max: 30,
  orientation: "vertical",
  create: function () {
    handle.text($(this).slider("value"));
  },
  slide: function (event, ui) {
    handle.text(ui.value);
    vol.volume.value = ui.value;
    curVolVal = ui.value;
  },
});

// initialize duration slider
var handle2 = $("#custom-handle-2");
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
var handleLow = $("#handle-eq-low");
$("#slider-eq-low").slider({
  min: -50,
  max: 50,
  step: 1,
  orientation: "vertical",
  create: function () {
    handleLow.text($(this).slider("value"));
  },
  slide: function (event, ui) {
    eq.low.value = ui.value;
    handleLow.text(ui.value);
  },
});
var handleMid = $("#handle-eq-mid");
$("#slider-eq-mid").slider({
  min: -50,
  max: 50,
  step: 1,
  orientation: "vertical",
  create: function () {
    handleMid.text($(this).slider("value"));
  },
  slide: function (event, ui) {
    eq.mid.value = ui.value;
    handleMid.text(ui.value);
  },
});
var handleHigh = $("#handle-eq-high");
$("#slider-eq-high").slider({
  min: -50,
  max: 50,
  step: 1,
  orientation: "vertical",
  create: function () {
    handleHigh.text($(this).slider("value"));
  },
  slide: function (event, ui) {
    eq.high.value = ui.value;
    handleHigh.text(ui.value);
  },
});

export default test;
