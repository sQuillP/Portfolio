import s from './page.module.css';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import featuredProjects from '@/config/featuredProjects.json';

export default function Projects() {


    return (
        <section className={s.main}>
            <p className={s.intro}>Personal Projects</p>
            <div className={s.projectsList}>
                {
                    featuredProjects.map(project => {
                        return (
                            <ProjectCard
                                {...project}
                                key={project.title}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}