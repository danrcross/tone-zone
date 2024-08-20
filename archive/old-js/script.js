// aug 20, 2024

// these first two cases are commented out for current, single - page version of app.

// from script.js, line 145

// case "/":
//   synthList.on("change", () => {
//     MyHi.switchSynth();
//   });

//   // by default, browser will change this list when it is 'in focus' (after being clicked). This handler will prevent that.
//   synthList.on("keydown", function (event) {
//     event.preventDefault();
//   });

//   // Create my keyboard controller
//   const keyboard = new AudioKeys({
//     rows: 1,
//     polyphony: 1000,
//   });

//   // initialize pitch slider
//   sliderP.insertAfter(notesList).slider({
//     min: 1,
//     max: 88,
//     range: "min",
//     value: notesList[0].selectedIndex + 1,
//     slide: async function (event, ui) {
//       MyHi.pitchSlide(event, ui);
//     },
//   });

//   // initialize volume slider
//   //
//   $("#slider-v").slider({
//     min: -30,
//     max: 30,
//     orientation: "vertical",
//     create: function () {
//       handle.text($(this).slider("value"));
//     },
//     slide: function (event, ui) {
//       // need to alter this, as helper was altered
//       MyHi.volSlide(event, ui);
//     },
//   });

//   // initialize duration slider
//   // var handle2 = $("#custom-handle-2");
//   $("#slider-d").slider({
//     min: 1,
//     max: 3000,
//     step: 1,
//     create: function () {
//       handle2.text($(this).slider("value"));
//     },
//     slide: function (event, ui) {
//       handle2.text(ui.value);
//     },
//   });

//   // init eq sliders

//   $("#slider-eq-low").slider({
//     min: -50,
//     max: 50,
//     step: 1,
//     orientation: "vertical",
//     create: function () {
//       handleLow.text($(this).slider("value"));
//     },
//     slide: function (event, ui) {
//       MyHi.eqSlide(ui, "low", handleLow);
//     },
//   });

//   $("#slider-eq-mid").slider({
//     min: -50,
//     max: 50,
//     step: 1,
//     orientation: "vertical",
//     create: function () {
//       handleMid.text($(this).slider("value"));
//     },
//     slide: function (event, ui) {
//       MyHi.eqSlide(ui, "mid", handleMid);
//     },
//   });

//   $("#slider-eq-high").slider({
//     min: -50,
//     max: 50,
//     step: 1,
//     orientation: "vertical",
//     create: function () {
//       handleHigh.text($(this).slider("value"));
//     },
//     slide: function (event, ui) {
//       MyHi.eqSlide(ui, "mid", handleHigh);
//     },
//   });

//   //playbutton triggers note
//   playbtn.on("click", () => {
//     MyHi.playNDisplay();
//     return;
//   });

//   // selecting from dropdown triggers note
//   notesList.on("change", () => {
//     MyHi.playNDisplay();
//     sliderP.slider("value", this.selectedIndex + 1);
//     return;
//   });

//   // keyboard event trigger
//   keyboard.down((key) => {
//     MyHi.keyHandler(key);
//   });

//   break;

// case "/2":
// const vol2A = new Tone.Volume(0).toDestination();
// const eq2A = new Tone.EQ3(0, 0, 0).connect(vol2A);
// var synth2A = new Tone.AMSynth().connect(eq2A);
// const vol2B = new Tone.Volume(0).toDestination();
// const eq2B = new Tone.EQ3(0, 0, 0).connect(vol2B);
// var synth2B = new Tone.AMSynth().connect(eq2B);
// // Create my keyboard controller
// var activeNotes = [];
// const keyboard2 = new AudioKeys({
//   rows: 1,
//   polyphony: 1000,
// });
// // define behaviors of interactable elements on page;

// synthList2A.on("change", async () => {
//   synth2A = await MyHi.switchSynth(synthList2A, synth2A, eq2A);
// });
// // by default, browser will change this list when it is 'in focus' (after being clicked). This handler will prevent that.
// synthList2A.on("keydown", function (event) {
//   event.preventDefault();
// });
// synthList2B.on("change", async () => {
//   synth2B = await MyHi.switchSynth(synthList2B, synth2B, eq2B);
// });
// synthList2B.on("keydown", function (event) {
//   event.preventDefault();
// });
// // initialize sliders:
// volSlider2A.slider({
//   min: -30,
//   max: 30,
//   orientation: "vertical",
//   create: function () {
//     volHandle2A.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.volSlide(event, ui, volHandle2A, vol2A);
//   },
// });

// volSlider2B.slider({
//   min: -30,
//   max: 30,
//   orientation: "vertical",
//   create: function () {
//     volHandle2B.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.volSlide(event, ui, volHandle2B, vol2B);
//   },
// });

// sliderLow2A.slider({
//   min: -50,
//   max: 50,
//   step: 1,
//   orientation: "vertical",
//   create: function () {
//     handleLow2A.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.eqSlide(ui, "low", handleLow2A, eq2A);
//   },
// });

// sliderMid2A.slider({
//   min: -50,
//   max: 50,
//   step: 1,
//   orientation: "vertical",
//   create: function () {
//     handleMid2A.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.eqSlide(ui, "mid", handleMid2A, eq2A);
//   },
// });

// sliderHigh2A.slider({
//   min: -50,
//   max: 50,
//   step: 1,
//   orientation: "vertical",
//   create: function () {
//     handleHigh2A.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.eqSlide(ui, "high", handleHigh2A, eq2A);
//   },
// });

// sliderLow2B.slider({
//   min: -50,
//   max: 50,
//   step: 1,
//   orientation: "vertical",
//   create: function () {
//     handleLow2B.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.eqSlide(ui, "low", handleLow2B, eq2B);
//   },
// });

// sliderMid2B.slider({
//   min: -50,
//   max: 50,
//   step: 1,
//   orientation: "vertical",
//   create: function () {
//     handleMid2B.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.eqSlide(ui, "mid", handleMid2B, eq2B);
//   },
// });

// sliderHigh2B.slider({
//   min: -50,
//   max: 50,
//   step: 1,
//   orientation: "vertical",
//   create: function () {
//     handleHigh2B.text($(this).slider("value"));
//   },
//   slide: function (event, ui) {
//     MyHi.eqSlide(ui, "high", handleHigh2B, eq2B);
//   },
// });

// // define behavior when a key is pressed down
// // I wonder if these down/up functions could be simplified...
// keyboard2.down(async (key) => {
//   // if no active notes...
//   if (!activeNotes.length) {
//     //... get freq of key pressed
//     var keyData = await MyHi.getKeyNote(key);
//     // create new 'note' object; push to array
//     var note = {
//       active: true,
//       freq: keyData.freq,
//       synth: "2A",
//       pitch: keyData.pitch,
//       enharmonic: keyData.enharm,
//     };
//     activeNotes.push(note);
//     // play synth at 'key'
//     MyHi.attackSynthNum(synth2A, key);
//   } else if (activeNotes.length === 1) {
//     // similar to above, but if a note is active, second synth will be activated
//     var keyData = await MyHi.getKeyNote(key);
//     var note = {
//       active: true,
//       freq: keyData.freq,
//       synth: "2B",
//       pitch: keyData.pitch,
//       enharmonic: keyData.enharm,
//     };
//     activeNotes.push(note);
//     if (activeNotes.length === 2) {
//       var freq1 = activeNotes[0].freq;
//       var freq2 = activeNotes[1].freq;
//       MyHi.displayInt(freq1, freq2, curIntEl, curIntAbbrEl, curIntHsEl);
//     }
//     MyHi.attackSynthNum(synth2B, key);
//   }
// });

// // define behavior when key is released
// keyboard2.up(async (key) => {
//   // get frequency corresponding to key released
//   var checkFreq = await MyHi.getKeyNote(key);
//   var myInd = null;
//   // get index of my note
//   activeNotes.forEach((note, index) => {
//     if (note.freq === checkFreq.freq) {
//       return (myInd = index);
//     }
//   });
//   // release synth that corresponds to 'synth' property of note released;
//   // remove 'note' object from array of active notes
//   if (activeNotes[myInd].synth === "2A") {
//     MyHi.releaseSynthNum(synth2A);
//     activeNotes.splice(myInd, 1);
//   } else if (activeNotes[myInd].synth === "2B") {
//     MyHi.releaseSynthNum(synth2B);
//     activeNotes.splice(myInd, 1);
//   }
// });

// break;
