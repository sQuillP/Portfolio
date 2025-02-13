import s from './ExperienceTabs.module.css';



export default function ExperienceTabs({onSelect, WORK, EDUCATION, selectedTab}) {

    function styleSelected(tab, assignedTab) {
        if (assignedTab === tab) {
            return {color:'var(--text-primary)', background: "var(--bg-primary)"}
        }
        return {color: 'var(--text-primary)', background:'var(--bg-secondary)'}
    }

    return (
        <div className={s.container}>
            <button 
                className={s.tabButton}
                onClick={()=> onSelect(WORK)}
                style={styleSelected(selectedTab, WORK)}
            >
                Work
            </button>
            <button 
                onClick={()=> onSelect(EDUCATION)}
                className={s.tabButton}
                style={styleSelected(selectedTab, EDUCATION)}
            >
                Education
            </button>
        </div>
    )
}