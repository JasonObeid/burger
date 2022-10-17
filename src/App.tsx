import top from "../static/top.svg";
import tomat from "../static/tomat.svg";
import letuc from "../static/letuc.svg";
import ches from "../static/ches.svg";
import patty from "../static/patty.svg";
import bottom from "../static/bottom.svg";
import borgir from "../static/borgir.mp3";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isLoopDone, setIsLoopDone] = useState(false);
  const [isPlayingBorgir, setIsPlayingBorgir] = useState(false);
  const borgirRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isLoopDone) {
      setTimeout(() => {
        setIsLoopDone(false);
      }, 1000);
    } else {
      setTimeout(() => {
        document.getElementById("App")?.click();
        setIsPlayingBorgir(true);
      }, 31 * 1000);
      setTimeout(() => {
        if (borgirRef && borgirRef.current) {
          borgirRef.current.play();
          borgirRef.current.muted = false;
        }
      }, 32 * 1000);
      setTimeout(() => {
        setIsLoopDone(true);
        setIsPlayingBorgir(false);
      }, 45 * 1000);
    }
  }, [isLoopDone]);

  return (
    <div className="App" id="App">
      <div className="audio">
        {isPlayingBorgir ? (
          <audio ref={borgirRef} src={borgir} autoPlay={true} muted controls />
        ) : null}
      </div>
      <main className={`burger`}>
        {isLoopDone ? null : (
          <>
            <img
              src={top}
              alt={"top"}
              width="270px"
              className="component top"
            />
            <img
              src={tomat}
              alt={"tomat"}
              width="250px"
              className="component tomat"
            />
            <img
              src={letuc}
              alt={"letuc"}
              width="290px"
              className="component letuc"
            />
            <img
              src={ches}
              alt={"ches"}
              width="250px"
              className="component ches"
            />
            <img
              src={patty}
              alt={"patty"}
              width="290px"
              className="component patty"
            />
            <img
              src={bottom}
              alt={"bottom"}
              width="270px"
              className="component bottom"
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
