import Navbar from "./components/Fragments/Navbar";
import ContactPage from "./pages/contactpage";
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
      <ContactPage />
    </>
  );
};

export default App;
