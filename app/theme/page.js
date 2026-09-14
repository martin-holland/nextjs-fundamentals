"use client";

import { useTheme } from "../context/ThemeContext";
import ThemedPage from "./ThemedPage";

export default function ThemeHomePage() {
  // This page reads the shared state through the hook, as the task requires.
  const { theme, isDark } = useTheme();

  return (
    <ThemedPage
      title="Theme Toggle App"
      otherHref="/theme/settings"
      otherLabel="Go to the settings page →"
    >
      <p>
        The theme lives in a React context shared by every page under{" "}
        <code>/theme</code>. Toggle it here, follow the link to the settings
        page, and the choice travels with you — no prop drilling and no reload.
      </p>
      <p>
        This page currently renders in <strong>{theme}</strong> mode, so it is{" "}
        {isDark ? "using the dark palette" : "using the light palette"}.
      </p>
    </ThemedPage>
  );
}
