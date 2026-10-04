import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { TransitionProvider } from "./context/TransitionProvider";
import { Header } from "./components/Header";
import { ScrollProgress } from "./components/ScrollProgress";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <TransitionProvider>
            <ScrollProgress />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projeto/:id" element={<ProjectPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </TransitionProvider>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
