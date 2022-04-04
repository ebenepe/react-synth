import "./App.css";
import * as Tone from "tone";
import { useState } from "react";

function App() {
  const [note, setNote] = useState("C4");
  const [noteValue, setNoteValue] = useState("4n");


  const synth = new Tone.Synth().toDestination();

  return (
    <div className="App">
      <input
        placeholder="Enter note"
        onChange={(evt) => {
          setNote(evt.target.value);
        }}
      />
      <input
        placeholder="Enter note value"
        onChange={(evt) => {
          setNoteValue(evt.target.value);
        }}
      />
      <button onClick={() => synth.triggerAttackRelease(note, noteValue)}>
        PLAY
      </button>
    </div>
  );
}

export default App;
