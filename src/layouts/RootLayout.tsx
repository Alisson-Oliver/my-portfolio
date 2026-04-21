import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}
