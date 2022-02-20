import React from "react";

import style from "../styles/Resume.module.scss";

const Resume = ({data}) => {
  let education = null;
  let publications = null;
  let experience = null;
  let honors = null;

  if (data.experience) {
    education = data.education.map((education) => {
      return (
        <div key={education.school}>
          <h3 className={style.h3}>{education.school}</h3>
          <p className={style.info}>
            {education.degree} <span>&bull;</span>
            <em className={style.date}>{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    publications = data.publications.map((publication) => {
      return (
        <div key={publication.title}>
          <h3>{publication.title}</h3>
          <p>
            {publication.author}
            <br/>
            {publication.misc}
            <br/>
            {Object.entries(publication.resource).map(([kind, url]) => (
              <span key={kind}>
                [<a href={url}>{kind}</a>]
              </span>
            ))}
            {publication.award && <>
              <img
                src={publication.award.image}
                height="16"
                width="16"
                alt="Award Icon"
                style={{'verticalAlign': 'middle', 'marginLeft': '1rem', 'marginRight': '.5rem'}}
              />
              <span>{publication.award.name}</span>
            </>}
          </p>
        </div>
      );
    });

    const ta = data.experience["teaching assistant"].map((ta) => {
      return (
        <li key={ta.title}>
          <h4>{ta.title}</h4>
          <p className={style.info}>
            {ta.place}
            <span>&bull;</span> <em className={style.date}>{ta.years}</em>
          </p>
          <p>{ta.description}</p>
        </li>
      );
    });

    const intern = data.experience["internship"].map((intern) => {
      return (
        <li key={intern.company}>
          <h4>{intern.company}</h4>
          <p className={style.info}>
            {intern.place}
            <span>&bull;</span> <em className={style.date}>{intern.years}</em>
            <br/>
            {intern.description}
            <br/>
            {Object.entries(intern.resource).map(([kind, url]) => (
              <span key={kind}>
                [<a href={url}>{kind}</a>]
              </span>
            ))}
          </p>
        </li>
      );
    });

    experience = (
      <>
        <div key="teaching assistant">
          <h3>Teaching Assistant</h3>
          <ul>{ta}</ul>
        </div>
        <div key="intern">
          <h3>Internship</h3>
          <ul>{intern}</ul>
        </div>
      </>
    );

    honors = data.honors.map(honor => {
      return (
        <div key={honor.name}>
          <h3>{honor.name}</h3>
          <span>&bull;</span> <em className={style.date}>{honor.years}</em>
        </div>
      );
    });
  }

  // const skills = data.skills.map(skills => {
  //   const className = 'bar-expand ' + skills.name.toLowerCase();
  //   return (
  //     <li key={skills.name}>
  //       <span style={{width: skills.level}} className={className}></span><em>{skills.name}</em>
  //     </li>
  //   );
  // })

  return (
    <section id="resume" className={style.resume}>
      <div className={"row " + style.education}>
        <div className={"three columns " + style["header-col"]}>
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className={"nine columns " + style["main-col"]}>
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className={"row " + style.publication}>
        <div className={"three columns " + style["header-col"]}>
          <h1>
            <span>Publications</span>
          </h1>
        </div>

        <div className={"nine columns " + style["main-col"]}>
          <div className="row item">
            <div className="twelve columns">{publications}</div>
          </div>
        </div>
      </div>

      <div className={"row " + style.experience}>
        <div className={"three columns " + style["header-col"]}>
          <h1>
            <span>Experience</span>
          </h1>
        </div>
        <div className={"nine columns " + style["main-col"]}>{experience}</div>
      </div>

      <div className={"row " + style.honors}>
        <div className={"three columns " + style["header-col"]}>
          <h1>
            <span>Honors</span>
          </h1>
        </div>
        <div className={"nine columns " + style["main-col"]}>{honors}</div>
      </div>

      {/*<div className="row skill">*/}
      {/*  <div className="three columns header-col">*/}
      {/*    <h1><span>Skills</span></h1>*/}
      {/*  </div>*/}
      {/*  <div className="nine columns main-col">*/}
      {/*    <div className="bars">*/}
      {/*      <ul className="skills">*/}
      {/*        {skills}*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default Resume;
