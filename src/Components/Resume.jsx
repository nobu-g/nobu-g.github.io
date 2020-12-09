import React from "react";

const Resume = (props) => {
  let education = null;
  let publications = null;
  let experience = null;

  if (props.data) {
    education = props.data.education.map((education) => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    publications = props.data.publications.map((publication) => {
      return (
        <div key={publication.title}>
          <h3>{publication.title}</h3>
          <p>
            {publication.author}
            <br />
            {publication.misc}
          </p>
        </div>
      );
    });

    const ta = props.data.experience["teaching assistant"].map((ta) => {
      return (
        <li key={ta.title}>
          <h4>{ta.title}</h4>
          <p>
            {ta.place}
            <span>&bull;</span> <em className="date">{ta.years}</em>
          </p>
          <p>{ta.description}</p>
        </li>
      );
    });

    const intern = props.data.experience["internship"].map((intern) => {
      return (
        <li key={intern.company}>
          <h4>{intern.company}</h4>
          <p>
            {intern.place}
            <span>&bull;</span> <em className="date">{intern.years}</em>
          </p>
          <p>{intern.description}</p>
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
  }

  // const skills = props.data.skills.map(skills => {
  //   const className = 'bar-expand ' + skills.name.toLowerCase();
  //   return (
  //     <li key={skills.name}>
  //       <span style={{width: skills.level}} className={className}></span><em>{skills.name}</em>
  //     </li>
  //   );
  // })

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row publications">
        <div className="three columns header-col">
          <h1>
            <span>Publications</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{publications}</div>
          </div>
        </div>
      </div>

      <div className="row experience">
        <div className="three columns header-col">
          <h1>
            <span>Experience</span>
          </h1>
        </div>
        <div className="nine columns main-col">{experience}</div>
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
