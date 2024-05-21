const start = () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }
};
document.addEventListener("load", start);

var synth1 = new Tone.AMSynth().toDestination();
var synth2 = new Tone.AMSynth().toDestination();

const playBoth = () => {
  console.log("hi");
  Tone.start();
  synth1.triggerAttackRelease("A4", "8n");
};

play2.on("click", playBoth);
