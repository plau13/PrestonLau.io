import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Featured from '@/components/sections/Featured';
import Lessons from '@/components/sections/Lessons';
import Contact from '@/components/sections/Contact';
import { getFeaturedProjects, getJobs, getLessons } from '@/lib/content';

export default async function HomePage() {
  const [projects, jobs, lessons] = await Promise.all([
    getFeaturedProjects(),
    getJobs(),
    getLessons(),
  ]);

  return (
    <main>
      <Hero />
      <About />
      <Experience jobs={jobs} />
      <Featured projects={projects} />
      <Lessons lessons={lessons} />
      <Contact />
    </main>
  );
}
