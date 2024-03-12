import HomePage from "./(home)/page";
import AboutPage from "./about/page";
import Header from "./components/Header";

import ContactPage from "./contact/page";
import ProjectPage from "./project/page";
import SkillPage from "./skill/page";

const page = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
};

export default page;
