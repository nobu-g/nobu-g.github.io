import style from "../styles/About.module.css";
import type { MainData } from "../types/resumeData";

interface AboutProps {
  data: MainData;
}

const About = ({ data }: AboutProps) => {
  if (!data) {
    return <section id="about"></section>;
  }
  const name = data.name;
  const profilePic = `/images/${data.image}`;
  const email = data.email;

  return (
    <section id="about" className={style.about}>
      <div className="row">
        <div className="three columns">
          <img
            className={style["profile-pic"]}
            src={profilePic}
            alt="Nobuhiro Ueda Profile Pic"
            width={120}
            height={120}
          />
        </div>
        <div className={`nine columns ${style["main-col"]}`}>
          <h2>About Me</h2>

          <p>
            I am a researcher at the Data Science Laboratory, NEC Corporation,
            Japan. I&apos;m interested in how we can make computers understand
            natural language. Previously, I was working on a research about
            anaphora resolution in Japanese. Try{" "}
            <a
              href="https://lotus.kuee.kyoto-u.ac.jp/cohesion-analysis/pub/"
              target="_blank"
              rel="noreferrer noopener"
            >
              our Japanese anaphora resolution demo
            </a>
            .
          </p>
          <div className="row">
            <div className={`columns ${style["contact-details"]}`}>
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  NEC Tamagawa Office, NEC Corporation
                  <br />
                  Nakahara-ku Shimonumabe 1753, Kawasaki, Kanagawa, 211-0011,
                  Japan
                </span>
                <br />
                {/*<span>{phone}</span><br/>*/}
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
