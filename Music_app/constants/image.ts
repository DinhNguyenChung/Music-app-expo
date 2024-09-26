import unknowArtistImage from "@/assets/unknown_artist.png";
import unknowTrackImage from "@/assets/unknown_track.png";
import { Image } from "react-native";

export const unknownArtistImageUri =
  Image.resolveAssetSource(unknowArtistImage).uri;
export const unknownTrackImageUri =
  Image.resolveAssetSource(unknowTrackImage).uri;
