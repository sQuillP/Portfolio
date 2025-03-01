import { getLeetcodeData } from '@/utility/leetcode';
import s from './leetcode.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// must wrap fetch function for swr integration.
const colorMap = {
    "Easy":{"color":'rgb(28 186 186)'},
    "Medium":{"color":"rgb(231 166 4)"},
    "Hard":{"color":"rgb(246 55 55)"},
    "All":{"color":"var(--text-secondary)"}
};



function formatTime(ms) {
    const now = new Date().getTime()/1000 - parseInt(ms,10);
    const daysAgo = Math.floor(now/(60*60*24));

    if(daysAgo > 1) return `${daysAgo} days ago`;

    else if (daysAgo == 0) { return "Today";}
    return `${daysAgo} day ago`;
    
}

const link = 'https://leetcode.com/problems'

export default async function Leetcode() {

    const leetCodeData = await getLeetcodeData();

    if(leetCodeData === null) {
        // show error fetching leetcode data.
        return (
            <div className={s.error}>
                <p className={s.notfound}>404</p>
                <p className={s.errorText}>It appears that leetcode servers are down. Maybe try refreshing the page...</p>
                <p className={s.errorText}>
                    You can always 
                    <strong> <a className={s.a} target='_blank' href={'https://leetcode.com/u/William_Pattison/'}>check out my profile</a> </strong> 
                    to see my profile details
                </p>
            </div>
        )
    }

    const {user, submissions} = leetCodeData;

    console.log(leetCodeData);

    return (
        <>
            <p className={s.problemSolved}>Problems Solved</p>
            <div className={s.difficultyCards}>
                {
                    user.submitStats.acSubmissionNum.map(stat => {
                        return (
                            <div key={stat.difficulty} className={s.difficultyCard}>
                                <p 
                                    style={{color:colorMap[stat.difficulty].color}} 
                                    className={s.difficulty}
                                >
                                    {stat.difficulty}
                                </p>
                                <p className={s.number}>{stat.count} / {stat.total}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.rankCard}>
                <p className={s.descriptor}>🌎 Current Global Rank 🌎 </p>
                <p className={s.descriptor}>{user.profile.ranking}</p>
            </div>
            <div>
                <p className={s.recentDesc}>Recently Solved</p>
            </div>
            <div className={s.recentAc}>
                {
                    submissions.slice(0,5).map(submission => {
                        return (
                            <div key={submission.titleSlug} className={s.submission}>
                                <p className={s.submissionText}>{submission.title}</p>
                                <div className={s.link}>
                                    <p className={`${s.submissionText} ${s.timestamp}`}>{formatTime(submission.timestamp)}</p>
                                    <a target='_blank' style={{marginLeft: '15px'}} href={`${link}/${submission.titleSlug}/description/`}>
                                        <FontAwesomeIcon icon={faUpRightFromSquare} size='lg' color='var(--text-primary)'/>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )



}