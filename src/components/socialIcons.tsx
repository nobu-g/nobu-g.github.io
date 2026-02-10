import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa";

const SOCIAL_ICON_MAP: Record<string, IconType> = {
  FaLinkedinIn,
  FaGithub,
  FaSkype,
};

export const getSocialIcon = (iconName: string): IconType | null => {
  return SOCIAL_ICON_MAP[iconName] ?? null;
};
