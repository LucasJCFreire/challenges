import "./globals.scss";
import Header from "../components/header/Header";

export const metadata = {
  title: "Focal Point",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
