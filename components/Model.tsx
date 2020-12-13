import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { height } = Dimensions.get("window");
const φ = (3 + Math.sqrt(5)) / 2;

export const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;


export interface Contact {
  name: string;
  phone: string;
  email: string;
}

export interface Site {
  id: string;
  name: string;
  image: string;
  address: string;
  contacts: Contact[];
}