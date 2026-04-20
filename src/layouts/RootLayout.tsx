import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";
import { StarBackground } from "../components/StarBackground";

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarBackground intensity={0.5} />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}
