import React from "react";
import Image from "./Image";

import style from "../styles/About.module.scss";

const About = ({data}) => {
  if (!data) {
    return <section id="about"></section>;
  }
  const name = data.name;
  const profilePic = "/images/" + data.image;
  const email = data.email;

  return (
    <section id="about" className={style.about}>
      <div className="row">
        <div className="three columns">
          <Image
            className={style["profile-pic"]}
            src={profilePic}
            alt="Nobuhiro Ueda Profile Pic"
            width={120}
            height={120}
          />
        </div>
        <div className={"nine columns " + style['main-col']}>
          <h2>About Me</h2>

          <p>
            I am a Ph.D. student at
            Kurohashi-Chu-Murawaki Lab., Kyoto University, Japan. I&apos;m interested in how
            we can make computers understand natural language. Currently, I&apos;m
            working on a research about anaphora resolution in Japanese. Try{" "}
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
            <div className={'columns ' + style['contact-details']}>
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br/>
                <span>
                  Kurohashi-Chu-Murawaki Lab.
                  <br/>
                  Yoshida-honmachi, Sakyo-ku, Kyoto, 606-8501, Japan
                </span>
                <br/>
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