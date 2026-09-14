"use client";

import { useTheme } from "../../context/ThemeContext";
import ThemedPage from "../ThemedPage";

export default function ThemeSettingsPage() {
  // A second, separate page consuming the same context.
  const { theme, colors, isDark } = useTheme();

  return (
    <ThemedPage
      title="Settings"
      otherHref="/theme"
      otherLabel="← Back to the theme page"
    >
      <p>
        A different route entirely, reading the same context with the same{" "}
        <code>useTheme()</code> hook.
      </p>
      <ul>
        <li>Theme: {theme}</li>
        <li>Dark mode: {isDark ? "on" : "off"}</li>
        <li>Background: {colors.background}</li>
        <li>Text: {colors.text}</li>
        <li>Accent: {colors.accent}</li>
      </ul>
    </ThemedPage>
  );
}
