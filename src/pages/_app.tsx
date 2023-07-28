import type { AppProps } from "next/app";

import "../styles/globals.css";
import { AuthProvider } from "../context/auth-context";
import { ThemeProvider } from "next-themes";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
        <ThemeToggleButton />
      </ThemeProvider>
    </AuthProvider>
  );
}
