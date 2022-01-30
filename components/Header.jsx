import React from "react";
import Link from "next/link";
import * as FontAwesome from "react-icons/fa";
import {FaChevronCircleDown} from "react-icons/fa";

const Header = (props) => {
  if (props.data) {
    var name = props.data.name;
    var description = props.data.description;
    var networks = props.data.social.map(network => {
      const FaIcon = FontAwesome[network.faClassName];
      return (
        <li key={network.name}>
          <Link href={network.url}>
            <a>
              <FaIcon/>
            </a>
          </Link>
        </li>
      )
    });
  }
  const section = props.section;

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={section === "home" ? "current" : ""}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={section === "about" ? "current" : ""}>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li className={section === "resume" ? "current" : ""}>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li className={section === "portfolio" ? "current" : ""}>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I&apos;m {name}.</h1>
          <h3>{description}</h3>
          <hr/>
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <Link href="#about">
          <a className="smoothscroll">
            <FaChevronCircleDown/>
          </a>
        </Link>
      </p>
    </header>
  );
};

export default Header;
