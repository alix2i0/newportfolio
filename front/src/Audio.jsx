import React, { useState, useEffect, useRef } from 'react';
import FrequencyVisualizer from './freq';
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);
  const contextRef = useRef(null);
  const analyserRef = useRef(null);
  const frequencyDataRef = useRef(null);

  const songs = [
    { path: './audio/dark-aria.m4a', name: 'Solo Leveling | Attack on Titan' },
    { path: './audio/hunter-x-hunter.mp3', name: 'Hunter x Hunter' },
    { path: './audio/neverland.mp3', name: 'The Promised Neverland' },
    { path: './audio/naruto.mp3', name: 'Naruto' },
  ];

  useEffect(() => {
    // Initialize audio and Web Audio API context when component mounts
    audioRef.current = new Audio(songs[currentSongIndex].path);
    contextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    analyserRef.current = contextRef.current.createAnalyser();
    analyserRef.current.fftSize = 512;
    frequencyDataRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);

    const audioSource = contextRef.current.createMediaElementSource(audioRef.current);
    audioSource.connect(analyserRef.current);
    analyserRef.current.connect(contextRef.current.destination);
  }, []);

  const togglePlay = () => {
    // if (isPlaying) {
    //   audioRef.current.pause();
    // } else {
    //   audioRef.current.play();
    // }
    // setIsPlaying(!isPlaying);
    if (contextRef.current.state === 'suspended') {
      contextRef.current.resume().then(() => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      });
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    loadAndPlay(currentSongIndex + 1);
  };

  const previousSong = () => {
    const newSongIndex = currentSongIndex - 1 >= 0 ? currentSongIndex - 1 : songs.length - 1;
    setCurrentSongIndex(newSongIndex);
    loadAndPlay(newSongIndex);
  };

  const loadAndPlay = (index) => {
    audioRef.current.src = songs[index].path;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const getFrequencyData = () => {
    analyserRef.current.getByteFrequencyData(frequencyDataRef.current);
    return frequencyDataRef.current;
  };

  return (
    // <div className="flex border backdrop-blur-md bg-white">
    //   <div className="audio-controls">
    //     <button onClick={previousSong}>Previous</button>
    //     <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    //     <button onClick={nextSong}>Next</button>
    //   </div>
    //   <div className="audio-info">
    //     <h3>Now Playing: {songs[currentSongIndex].name}</h3>
    //   </div>
    // </div>
    <div class="audio-player flex flex-col items-center ">
  <div class="controls flex space-x-4 ">
    <button class="btn btn-prev " onClick={previousSong}><img src='./backward.svg' /></button>
    <button class="btn btn-toggle " onClick={togglePlay}>{isPlaying ? <img src='./pause.svg' /> : <img src='./play.svg' />}</button>
    <button class="btn btn-next " onClick={nextSong}><img src='./forward.svg' /></button>
  </div>
  <div class="info">
    <p class="text-lg font-bold text-white">{songs[currentSongIndex].name}</p>
  </div>
  {/* <canvas id="visualizer" class="w-full h-24 mt-4"></canvas> */}
  {/* <div className='relative bottom-32 -z-10'>
      {analyserRef.current && (
            <FrequencyVisualizer analyser={analyserRef.current} />
          )}
  </div> */}
</div>

  );
};

export default AudioPlayer;
