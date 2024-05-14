const playNDisplay = () => {
  var ddNoteVal = notesList.val();
  var freqName = matchNote(ddNoteVal);
  curDurVal = handle2.text() / 1000;
  dispNote(ddNoteVal, freqName);
  synth.triggerAttackRelease(ddNoteVal, curDurVal);
  console.log("Test mod");
};

export default test;
