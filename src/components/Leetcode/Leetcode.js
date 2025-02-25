import { getLeetcodeData } from '@/utility/leetcode';
import s from './leetcode.module.css';

// must wrap fetch function for swr integration.
const colorMap = {
    "Easy":{"color":'rgb(28 186 186)'},
    "Medium":{"color":"rgb(231 166 4)"},
    "Hard":{"color":"rgb(246 55 55)"},
    "All":{"color":"var(--text-secondary)"}
};



function formatTime(ms) {
    console.log('ms', ms);
    const now = new Date().getTime()/1000 - parseInt(ms,10);
    console.log(now);
    const daysAgo = Math.floor(now/(60*60*24));

    if(daysAgo > 1) return `${daysAgo} days ago`;

    return `${daysAgo} day ago`;
    
}


export default async function Leetcode() {

    const leetCodeData = await getLeetcodeData();

    if(leetCodeData === null) {
        // show error fetching leetcode data.
        return (
            <div>
                no leetcode data at this time.
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
                                <p className={s.submissionText}>{formatTime(submission.timestamp)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )



}