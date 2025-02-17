import s from './ExperienceSheet.module.css';
import Image from 'next/image';

export default function ExperienceSheet({experiences}) {


    return (
        <div className={s.main}>
            <div className={s.border}>
                {
                    experiences.map( experience => {
                        return (
                            <div 
                                key={experience.institution} 
                                className={s.experienceContainer}
                            >
                                <div className={s.image}>
                                    <Image  src={experience.image} height={50} width={50} alt="" />
                                </div>
                                <p className={s.meta}>{experience.from} - {experience.to}</p>
                                <p className={s.institution}>{experience.institution}</p>
                                <p className={s.meta}>{experience.title}</p>
                                <ul className={s.ul}>
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
        </div>
    )
}