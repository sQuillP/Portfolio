import Link from "next/link";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import s from './page.module.css';
import Image from "next/image";


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
          <div>
            <h1 className={s.h1}>Hi, Will here</h1>
            <p className={s.p}>I am a {Math.floor(calculateYears(BIRTHDAY))} year old software engineer currently based in Indianapolis.</p>
            <p className={s.p}>I enjoy running, juggling, and sometimes riding unicycles.</p>
          </div>
          <div className={s.profileContainer}>
            <Image alt="wat" height={200} width={200} className={s.profile} src={'/profile.webp'}/>
          </div>
        </div>
          <SocialLinks/>
      </section>
    </div>
  );
}
