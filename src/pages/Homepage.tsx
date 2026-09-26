import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { AboutPreview } from '../components/sections/AboutPreview';
import { Contact } from '../components/sections/Contact';
import { Skills } from '../components/sections/Skills';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <AboutPreview />
      <Contact />
    </div>
  );
}

export default Homepage;
