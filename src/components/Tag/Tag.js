import s from './Tag.module.css';



export default function Tag({tag}) {
    return (
        <div className={s.main}>
            <p className={s.tagText}>{tag}</p>
        </div>
    )
}