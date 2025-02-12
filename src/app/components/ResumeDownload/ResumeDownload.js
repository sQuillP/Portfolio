import s from './resumeDownload.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function ResumeDownload() {




    return (
        <button className={s.main}>
            Resume
            <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faFileArrowDown} size='lg'/>
        </button>
    )
}