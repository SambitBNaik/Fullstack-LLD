import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';
import tracks from '../Audio/tracks';

const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex]= useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const seekSliderRef = useRef(null);

  // Play or pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update the current time and slider value
  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
    seekSliderRef.current.value = (audioRef.current.currentTime / audioRef.current.duration) * 100;
  };

  // Seek the audio
  const seekAudio = () => {
    const seekTo = (seekSliderRef.current.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTo;
  };

  //change Track

  const changeTrack=(index)=>{
    setCurrentTrackIndex(index);
    setIsPlaying(false);// Reset play state
    audioRef.current.pause();
    audioRef.current.load();// Load the new track
    setCurrentTime(0);// Reset current time
    setDuration(0);// Reset duration
  }

  // Format time in MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="music-player">
      <h1>React Music Player</h1>


      {/* Playlist controls */}
      <div className='playlist'>
        {tracks.map((track, index)=>(
          <button
          key={index}
          className={`track-button ${index === currentTrackIndex ? 'active' : ' '}`}
          onClick={()=> changeTrack(index)}
          >
            {track.title}
          </button>
        ))

        }
      </div>
      <audio
        ref={audioRef}
        src={tracks[currentTrackIndex].src}
        onTimeUpdate={updateTime}
        onLoadedMetadata={updateTime}
      ></audio>
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          ref={seekSliderRef}
          onChange={seekAudio}
          defaultValue="0"
          max="100"
        />
        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
