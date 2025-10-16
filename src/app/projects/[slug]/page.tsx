import { notFound } from 'next/navigation';
import { getProject } from '@/data/projects';
import ProjectNav from '@/components/projects/ProjectNav';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectProblem from '@/components/projects/ProjectProblem';
import ProjectSolution from '@/components/projects/ProjectSolution';
import ProjectFeatures from '@/components/projects/ProjectFeatures';
import ProjectAdditionalFeatures from '@/components/projects/ProjectAdditionalFeatures';
import ProjectTechStack from '@/components/projects/ProjectTechStack';
import ProjectStats from '@/components/projects/ProjectStats';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectCTA from '@/components/projects/ProjectCTA';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-white">
      <ProjectNav currentSlug={slug} />

      <ProjectHero
        name={project.name}
        tagline={project.tagline}
        heroImage={project.hero.image}
        background={project.hero.background}
        brandColor={project.brandColor}
      />

      <ProjectProblem
        title={project.problem.title}
        description={project.problem.description}
        points={project.problem.points}
        brandColor={project.brandColor}
      />

      <ProjectSolution
        title={project.solution.title}
        description={project.solution.description}
        highlights={project.solution.highlights}
        brandColor={project.brandColor}
      />

      <ProjectFeatures
        features={project.features}
        brandColor={project.brandColor}
      />

      <ProjectAdditionalFeatures
        features={project.additionalFeatures}
        brandColor={project.brandColor}
      />

      <ProjectGallery
        screenshots={project.screenshots}
        brandColor={project.brandColor}
      />

      <ProjectStats
        stats={project.impact}
        brandColor={project.brandColor}
      />

      <ProjectTechStack
        techStack={project.techStack}
        brandColor={project.brandColor}
      />

      <ProjectCTA
        projectName={project.name}
        links={project.links}
        brandColor={project.brandColor}
      />
    </main>
  );
}
