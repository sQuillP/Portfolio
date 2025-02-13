import s from './ExperienceSheet.module.css';


export default function ExperienceSheet({experiences}) {


    return (
        <div className={s.main}>
            {
                experiences.map( experience => {
                    return (
                        <div 
                            key={experience.institution} 
                            className={s.experienceContainer}
                        >
                            <p className={s.meta}>{experience.from} - {experience.to}</p>
                            <p className={s.institution}>{experience.institution}</p>
                            <p className={s.meta}>{experience.title}</p>
                            <ul>
                                {
                                    experience.experiences.map( exp => {
                                        return (
                                            <li 
                                                key={exp}
                                                className={s.li}
                                            >
                                                <p className={s.experience}>{exp}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}