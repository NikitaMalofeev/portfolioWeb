import type { AppProps } from "next/app";
import "@/scss/index.scss";
import { Raleway, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";

// подключение шрифтов с помощью next с нужными настройками для загрузки шрифтов после парсинга html и css и не сохранение их в кэш
const raleway = Raleway({ subsets: ["latin"] });
const firecode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firecode.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
