import Navbar from "./components/Fragments/Navbar";
import HeroPage from "./pages/heropage";
import ProjectPage from "./pages/projectspage";
import SkillPage from "./pages/skillpage";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <SkillPage />
      <ProjectPage />
    </>
  );
};

export default App;
