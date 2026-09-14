import { ThemeProvider } from "../context/ThemeContext";

export default function ThemeLayout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
