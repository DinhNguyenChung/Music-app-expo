import React, { createContext, useContext, useState } from "react";
import library from "@/assets/data/library.json";
import { useAudio } from "./AudioContext";
interface Track {
  id: number;
  title: string;
  artist?: string; // artist có thể không có
  url: string;
  artwork?: string; // artwork có thể không có
}

const TrackContext = createContext<any>(null);

export const TrackProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [playlist, setPlaylist] = useState<Track[]>([]); // Sử dụng dữ liệu từ library

  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0); // Vị trí bài hát hiện tại

  const handleTrackSelect = (track: Track, newPlaylist: Track[]) => {
    setSelectedTrack(track);
    setPlaylist(newPlaylist);
    setCurrentTrackIndex(0); // Đặt chỉ số bài hát về 0 khi chọn bài mới
  };
  const { play, pause, stop } = useAudio();
  const skipForward = () => {
    // console.log("Current Playlist:", playlist);
    if (!playlist || playlist.length === 0) {
      console.error("Playlist is empty or undefined.", playlist);
      return;
    }
    pause();
    const nextTrackIndex = currentTrackIndex + 1;
    if (nextTrackIndex < playlist.length) {
      setCurrentTrackIndex(nextTrackIndex);
      setSelectedTrack(playlist[nextTrackIndex]);
      play(playlist[nextTrackIndex].url);
    } else {
      console.log("Reached end of playlist.");
    }
  };

  const skipBackward = () => {
    if (!playlist || playlist.length === 0) {
      console.error("Playlist is empty or undefined.");
      return;
    }
    pause();
    const prevIndex = currentTrackIndex - 1;
    if (prevIndex >= 0) {
      setCurrentTrackIndex(prevIndex);
      setSelectedTrack(playlist[prevIndex]); // Cập nhật bài hát đang phát
      play(playlist[prevIndex].url); // Phát bài hát mới
    } else {
      console.log("Already at the start of playlist.");
    }
  };

  return (
    <TrackContext.Provider
      value={{
        playlist,
        setPlaylist,
        selectedTrack,
        handleTrackSelect,
        currentTrackIndex,
        skipForward,
        skipBackward,
        setCurrentTrackIndex,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};

export const useTrackContext = () => useContext(TrackContext);
