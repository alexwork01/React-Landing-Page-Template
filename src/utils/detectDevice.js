import { isMobile } from "react-device-detect";

export const detectDevice = () => (isMobile ? "Mobile" : "Desktop");
