import { Outlet } from "react-router-dom";
import { AppScrollRestoration } from "../components/AppScrollRestoration";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <AppScrollRestoration />
    </div>
  );
}
