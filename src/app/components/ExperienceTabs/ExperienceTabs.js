import s from './ExperienceTabs.module.css';



export default function ExperienceTabs({onSelect, WORK, EDUCATION, selectedTab}) {

    return (
        <div className={s.container}>
            <button 
                className={s.tabButton}
                onClick={()=> onSelect(WORK)}
            >
                Work
            </button>
            <button 
                onClick={()=> onSelect(EDUCATION)}
                className={s.tabButton}
            >
                Education
            </button>
        </div>
    )
}