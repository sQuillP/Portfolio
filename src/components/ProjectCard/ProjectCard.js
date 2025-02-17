import Image from 'next/image';
import s from './ProjectCard.module.css';
import Tag from '@/components/Tag/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';



export default function ProjectCard({title, description, tags, image, link, source}) {

    return (
        <div className={s.main}>
            <div className={s.cardImage}>
                <Image unoptimized src={image} style={{objectFit: 'contain'}} alt='Project image' width={300} height={160} />
            </div>
                <p className={s.cardHeader}>{title}</p>
                <p className={s.description}>{description}</p>
                <div className={s.tags}>
                    {
                        tags.map(tag => {
                            return <Tag key={tag} tag={tag}/>
                        })
                    }
                </div>
                <div className={s.urls}>
                    {
                        link && (
                            <Link className={s.link} target='_blank' href={link}>
                                <div className={s.url}>
                                    <FontAwesomeIcon icon={faGlobe} size='xs' color='var(--bg-primary)'/>
                                    <p className={s.urlText}>Visit</p>
                                </div>
                            </Link>
                        )
                    }
                    {
                        source && (
                            <Link className={s.link} target='_blank' href={source}>
                                <div className={s.url}>
                                    <FontAwesomeIcon icon={faGithub} size='xs' color='var(--bg-primary)'/>
                                    <p className={s.urlText}>Source</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
        </div>
    )
}