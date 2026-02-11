import style from "../styles/Resume.module.css";
import type { ResumeSection } from "../types/resumeData";

const Author = ({ author }: { author: string }) => {
  const highlightKeyword = (text: string, keywords: string[]) => {
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
    return parts.map((part, i) =>
      keywords.includes(part) ? (
        // biome-ignore lint/suspicious/noArrayIndexKey: text split parts have no unique ID
        <u key={`${part}-${i}`}>{part}</u>
      ) : (
        part
      ),
    );
  };
  return <span>{highlightKeyword(author, ["Nobuhiro Ueda", "植田 暢大"])}</span>;
};

interface ResumeProps {
  data: ResumeSection;
}

const Resume = ({ data }: ResumeProps) => {
  let education = null;
  let publications = null;
  let experiences = null;
  let honors = null;

  if (data) {
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

    publications = Object.entries(data.publications).map(([kind, items]) => (
      <div key={kind}>
        <h3>{kind}</h3>
        <ul>
          {items.map((item) => (
            <li key={item.title}>
              <h4>{item.title}</h4>
              <p>
                <Author author={item.author} />
                <br />
                {item.misc}
                <br />
                {Object.entries(item.resource).map(([kind, url]) => (
                  <span key={kind}>[{url ? <a href={url}>{kind}</a> : kind}]</span>
                ))}
                {item.award && (
                  <>
                    <img
                      src={item.award.image}
                      height="16"
                      width="16"
                      alt="Award Icon"
                      className={style.awardIcon}
                    />
                    <span>{item.award.name}</span>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    ));

    experiences = Object.entries(data.experience).map(([kind, items]) => (
      <div key={kind}>
        <h3>{kind}</h3>
        <ul>
          {items.map((item) => (
            <li key={item.title}>
              <h4>{item.title}</h4>
              <p className={style.info}>
                {item.place}
                <span>&bull;</span>
                <em className={style.date}>{item.years}</em>
                <br />
                {item.description ? (
                  <>
                    {item.description}
                    <br />
                  </>
                ) : (
                  ""
                )}
                {Object.entries(item.resource).map(([kind, url]) => (
                  <span key={kind}>[{url ? <a href={url}>{kind}</a> : kind}]</span>
                ))}
                {item.award && (
                  <>
                    <img
                      src={item.award.image}
                      height="16"
                      width="16"
                      alt="Award Icon"
                      className={style.awardIcon}
                    />
                    <span>{item.award.name}</span>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    ));

    honors = data.honors.map((honor) => {
      return (
        <div key={honor.name}>
          <h3>{honor.name}</h3>
          <p className={style.info}>
            <em className={style.date}>{honor.years}</em>
            <br />
            {Object.entries(honor.resource).map(([kind, url]) => (
              <span key={kind}>[{url ? <a href={url}>{kind}</a> : kind}]</span>
            ))}
          </p>
        </div>
      );
    });
  }

  return (
    <section id="resume" className={style.resume}>
      <div className={`row ${style.education}`}>
        <div className={`three columns ${style["header-col"]}`}>
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className={`nine columns ${style["main-col"]}`}>
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className={`row ${style.publication}`}>
        <div className={`three columns ${style["header-col"]}`}>
          <h1>
            <span>Publications</span>
          </h1>
        </div>

        <div className={`nine columns ${style["main-col"]}`}>
          <div className="row item">
            <div className="twelve columns">{publications}</div>
          </div>
        </div>
      </div>

      <div className={`row ${style.experience}`}>
        <div className={`three columns ${style["header-col"]}`}>
          <h1>
            <span>Experience</span>
          </h1>
        </div>
        <div className={`nine columns ${style["main-col"]}`}>{experiences}</div>
      </div>

      <div className={`row ${style.honors}`}>
        <div className={`three columns ${style["header-col"]}`}>
          <h1>
            <span>Honors</span>
          </h1>
        </div>
        <div className={`nine columns ${style["main-col"]}`}>{honors}</div>
      </div>
    </section>
  );
};

export default Resume;
