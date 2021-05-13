import React from "react";

const About = (props) => {
  if (!props.data) {
    return <section id="about"></section>;
  }
  const name = props.data.name;
  const profilePic = "images/" + props.data.image;
  // const city = props.data.address.city;
  // const state = props.data.address.state;
  // const zip = props.data.address.zip;
  // const phone = props.data.phone;
  const email = props.data.email;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilePic}
            alt="Nobuhiro Ueda Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            I am a master student and a Ph.D. candidate at
            Kurohashi-Chu-Murawaki Lab., Kyoto University. I'm interested in how
            we can make computers understand natural language. Currently, I'm
            working on a research about anaphora resolution in Japanese. Try{" "}
            <a
              href="https://lotus.kuee.kyoto-u.ac.jp/cohesion-analysis/public/"
              target="_blank"
              rel="noreferrer noopener"
            >
              our Japanese anaphora resolution demo
            </a>
            .
          </p>
          <div className="row">
            <div className="columns contact-details">
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
