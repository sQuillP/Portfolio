import Image from 'next/image';
import s from './ProjectCard.module.css';
import Tag from '../components/Tag/Tag';

export default function ProjectCard({title, description, tags}) {


    return (
        <div style={s.main}>
            <div className={s.cardImage}>
                <Image height={150} width={200}/>
            </div>
            <div>
                <p className={s.cardHeader}>{title}</p>
                <p className={s.description}>{description}</p>
                <div className={s.tags}>
                    {
                        tags.map(tag => {
                            return <Tag key={tag} tag={tag}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}