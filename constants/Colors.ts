/**
 * Unified color system for the app.
 * Includes theme colors (light/dark) and game-specific colors.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

// Theme colors for light/dark mode
export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark
  }
};

// Game-specific colors
export const GameColors = {
  primary500: "#72063c",
  primary600: "#640233",
  primary400: "#9f1d4a",
  primary300: "#3b041f",
  accent500: "#ddb52f"
};

// Reusable shadow styles
export const ShadowStyles = {
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    elevation: 3
  },
  medium: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 4
  }
} as const;
