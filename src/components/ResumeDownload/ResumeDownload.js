import s from './resumeDownload.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import confetti from 'canvas-confetti';

export default function ResumeDownload() {


    function onDownloadResume(event) {
        const link = document.createElement('a');
        link.href = '/William Pattison Resume.pdf';
        link.download='William Pattison Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function shootConfetti(event) {
        const r = event.target.getBoundingClientRect();
        const x = (r.left + r.width/2)/window.innerWidth;
        const y = (r.top + r.height/2)/window.innerHeight;
        confetti({origin:{x,y}});
    }


    return (
        <button onMouseEnter={shootConfetti} onClick={onDownloadResume} className={s.main}>
            Resume
            <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faFileArrowDown} size='lg'/>
        </button>
    )
}