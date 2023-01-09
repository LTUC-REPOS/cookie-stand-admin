import { AuthWrapper } from "./components/auth";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <AuthWrapper>
        <head />
        <body>{children}</body>
      </AuthWrapper>
    </>
  );
}
