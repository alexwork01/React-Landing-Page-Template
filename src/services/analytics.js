import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

export const EVENT_TYPE = {
  navigation: "navigation",
  appLoaded: "appLoaded",
};

export const logToAnalytics = (type, payload) => {
  logEvent(analytics, type, payload);
};
