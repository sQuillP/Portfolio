import Link from "next/link";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import s from './page.module.css';
import Image from "next/image";
import ResumeDownload from "./components/ResumeDownload/ResumeDownload";


/**
 * 
 * @param {*} date Any valid date string.
 * @returns number of years since that day
 */
function calculateYears(date) {
  try {

    const ms = Date.now() - new Date(date).getTime();
    console.log(ms)

    return ms/(1000*60*60*24*365);

  } catch(error) {
    console.log(error.message)
    return 0
  }
}




export default function Home() {

  const BIRTHDAY = '02/26/1999';

  return (
    <div>
      <section>
        <div>
          <div className={s.topDesc}>

            <div className={s.textDetails}>
              <h1 className={s.h1}>Hey! I'm Will</h1>
              <p className={s.p}>I am a {Math.floor(calculateYears(BIRTHDAY))} year old software engineer currently based in Indianapolis.</p>
              <p className={s.p}>Some abnormal talents of mine include juggling and riding unicycles (but not both).</p>
              <ResumeDownload/>
              <SocialLinks/>
            </div>

            <div className={s.profileContainer}>
              <Image alt="wat" height={150} width={150} src={'/profile.webp'}/>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
