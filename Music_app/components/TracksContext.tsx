// TrackContext.tsx
import React, { createContext, useContext, useState } from "react";

const TrackContext = createContext<any>(null);

export const TrackProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTrack, setSelectedTrack] = useState<any>(null);

  const handleTrackSelect = (track: any) => {
    setSelectedTrack(track);
    console.log("Track selected in TracksContext:", track);
  };

  return (
    <TrackContext.Provider value={{ selectedTrack, handleTrackSelect }}>
      {children}
    </TrackContext.Provider>
  );
};

export const useTrackContext = () => useContext(TrackContext);
