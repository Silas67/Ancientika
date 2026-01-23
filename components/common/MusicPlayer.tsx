"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { FiMusic } from "react-icons/fi";
import { IoPauseCircle } from "react-icons/io5";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const targetVolume = 0.3;

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0;
      await audio.play(); // allowed because this runs on click
      gsap.to(audio, { volume: targetVolume, duration: 1 });
      setIsPlaying(true);
      localStorage.setItem("music", "on");
    } catch (err) {
      console.error("Playback blocked:", err);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    gsap.to(audio, {
      volume: 0,
      duration: 0.8,
      onComplete: () => audio.pause(),
    });

    setIsPlaying(false);
    localStorage.setItem("music", "off");
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src="/theme.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={() => (isPlaying ? pauseMusic() : playMusic())}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black/80 px-4 py-2 text-xs uppercase text-white flex items-center gap-4"
      >
        {isPlaying ? (
          <IoPauseCircle className="text-white" />
        ) : (
          <FiMusic className="text-white" />
        )}
        {isPlaying ? "Pause sound" : "Play sound"}
      </button>
    </>
  );
};

export default MusicPlayer;
