import { useRef } from "react";

export default function Player({ source }) {
  const playerRef = useRef();

  // Щоб запустити та зупинити програвання необхідно викликати методи HTMLMediaElement.play() та HTMLMediaElement.pause(), де HTMLMediaElement це елемент <video>. Використовуємо реф для отримання доступу до DOM-елементу та його методам.
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
