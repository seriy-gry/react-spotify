import React, { createContext, useState, useContext } from 'react';

const PlayerContext = createContext();
const PlayerDispatch = createContext();

export function PlayerProvider({ children }) {
  const [deviceId, setDeviceId] = useState(null);
  const [playback, setPlayback] = useState({
    duration: 0,
    position: 0,
    paused: false,
  });
  const [trackWindow, setTrackWindow] = useState({
    current_track: {
      uri: null,
    },
    next_track: [],
    previous_track: [],
  });

  const context = {
    deviceId,
    playback,
    track_window: trackWindow,
  };

  const dispatch = {
    setDeviceId,
    setPlayback,
    setTrackWindow,
  };

  return (
    <PlayerContext.Provider value={context}>
      <PlayerDispatch.Provider value={dispatch}>
        {children}
      </PlayerDispatch.Provider>
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayerContext must be used within a PlayerProvider');
  }
  return context;
}

export function usePlayerDispatch() {
  const dispatch = useContext(PlayerDispatch);
  if (!dispatch) {
    throw new Error('usePlayerDispatch must be used within a PlayerProvider');
  }
  return dispatch;
}
