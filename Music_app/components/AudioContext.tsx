// import React, { createContext, useContext, useState, useEffect } from "react";
// import { Audio } from "expo-av";

// const AudioContext = createContext<any>(null);

// export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
//   const [sound, setSound] = useState<Audio.Sound | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [position, setPosition] = useState(0);

//   const play = async (uri: string) => {
//     try {
//       if (sound) {
//         await sound.stopAsync();
//         await sound.unloadAsync();
//         setPosition(0);
//       }

//       const { sound: newSound } = await Audio.Sound.createAsync({ uri });
//       setSound(newSound); // Cập nhật sound
//       await newSound.playAsync();
//       setIsPlaying(true);

//       // Thiết lập status update
//       newSound.setOnPlaybackStatusUpdate((status) => {
//         if (status.isLoaded) {
//           setPosition(status.positionMillis); // Cập nhật vị trí khi âm thanh phát
//           if (status.didJustFinish) {
//             setIsPlaying(false); // Đặt lại trạng thái khi âm thanh đã kết thúc
//             setPosition(0); // Đặt lại vị trí
//           }
//         } else {
//           console.warn("Sound is not loaded");
//         }
//       });
//     } catch (error) {
//       console.error("Error in play function:", error);
//     }
//   };
//   const pause = async () => {
//     try {
//       if (sound && isPlaying) {
//         await sound.pauseAsync(); // Tạm dừng âm thanh
//         setIsPlaying(false); // Cập nhật trạng thái thành không phát
//       }
//     } catch (error) {
//       console.error("Error in pause function:", error);
//     }
//   };
//   const stop = async () => {
//     try {
//       if (sound) {
//         await sound.stopAsync();
//         setIsPlaying(false);
//         // setPosition(0); // Đặt lại vị trí khi dừng
//       }
//     } catch (error) {
//       console.error("Error in stop function:", error);
//     }
//   };

//   const playFromPosition = async () => {
//     try {
//       if (sound) {
//         await sound.setPositionAsync(position); // Phát từ vị trí đã dừng
//         await sound.playAsync();
//         setIsPlaying(true);
//       } else {
//         console.warn("Sound is not loaded, cannot play from position");
//       }
//     } catch (error) {
//       console.error("Error in playFromPosition function:", error);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (sound) {
//         sound.unloadAsync();
//       }
//     };
//   }, [sound]);

//   return (
//     <AudioContext.Provider
//       value={{
//         play,
//         pause,
//         stop,
//         playFromPosition,
//         isPlaying,
//         position,
//         sound,
//       }}
//     >
//       {children}
//     </AudioContext.Provider>
//   );
// };

// export const useAudio = () => useContext(AudioContext);
import React, { createContext, useContext, useState, useEffect } from "react";
import { Audio } from "expo-av";

const AudioContext = createContext<any>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);

  const play = async (uri: string) => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setPosition(0);
      }

      const { sound: newSound, status } = await Audio.Sound.createAsync({
        uri,
      });

      if (status.isLoaded) {
        setSound(newSound); // Cập nhật sound
        await newSound.playAsync();
        setIsPlaying(true);

        // Thiết lập status update
        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded) {
            setPosition(status.positionMillis); // Cập nhật vị trí khi âm thanh phát
            if (status.didJustFinish) {
              setIsPlaying(false); // Đặt lại trạng thái khi âm thanh đã kết thúc
              setPosition(0); // Đặt lại vị trí
            }
          } else {
            console.warn("Sound is not loaded");
          }
        });
      } else {
        console.warn("Audio file is not loaded properly");
      }
    } catch (error) {
      console.error("Error in play function:", error);
    }
  };

  const pause = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          await sound.pauseAsync(); // Tạm dừng âm thanh
          setIsPlaying(false); // Cập nhật trạng thái thành không phát
        } else {
          console.warn("Sound is either not loaded or not playing");
        }
      }
    } catch (error) {
      console.error("Error in pause function:", error);
    }
  };

  const stop = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          await sound.stopAsync();
          setIsPlaying(false);
          setPosition(0); // Đặt lại vị trí khi dừng hoàn toàn
        } else {
          console.warn("Sound is not loaded, cannot stop");
        }
      }
    } catch (error) {
      console.error("Error in stop function:", error);
    }
  };

  const playFromPosition = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          await sound.setPositionAsync(position); // Phát từ vị trí đã dừng
          await sound.playAsync();
          setIsPlaying(true);
        } else {
          console.warn("Sound is not loaded, cannot play from position");
        }
      }
    } catch (error) {
      console.error("Error in playFromPosition function:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <AudioContext.Provider
      value={{
        play,
        pause,
        stop,
        playFromPosition,
        isPlaying,
        position,
        sound,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
