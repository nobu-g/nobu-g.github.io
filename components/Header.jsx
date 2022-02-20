import React from "react";
import Link from "next/link";
import * as FontAwesome from "react-icons/fa";
import {FaChevronCircleDown} from "react-icons/fa";

import style from "../styles/Header.module.css";

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
    <header id="home" className={style.header}>
      <nav id="nav-wrap" className={style['nav-wrap']}>
        <a className={style['mobile-btn']} href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className={style['mobile-btn']} href="#home" title="Hide navigation">
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

      <div className={style.banner + " row"}>
        <div className={style['banner-text']}>
          <h1 className="responsive-headline">I&apos;m {name}.</h1>
          <h3>{description}</h3>
          <hr/>
          <ul className={style.social}>{networks}</ul>
        </div>
      </div>

      <p className={style['scrolldown']}>
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
