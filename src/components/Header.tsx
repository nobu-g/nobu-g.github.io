import * as FontAwesome from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import style from "../styles/Header.module.css";
import type { MainData } from "../types/resumeData";

interface HeaderProps {
  data: MainData;
  section: string;
  opaque: boolean;
}

const Header = ({ data, section, opaque }: HeaderProps) => {
  let name: string | undefined,
    description: string | undefined,
    networks: React.JSX.Element[] | undefined;
  if (data) {
    name = data.name;
    description = data.description;
    networks = data.social.map((network) => {
      // biome-ignore lint/performance/noDynamicNamespaceImportAccess: icon name is data-driven
      const FaIcon = FontAwesome[
        network.faClassName as keyof typeof FontAwesome
      ] as React.ComponentType;
      return (
        <li key={network.name}>
          <a href={network.url}>
            <FaIcon />
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home" className={style.header}>
      <nav id="nav-wrap" className={`${style["nav-wrap"]}${opaque ? ` ${style.opaque}` : ""}`}>
        <a className={style["mobile-btn"]} href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className={style["mobile-btn"]} href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className={style.nav}>
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

      <div className={`${style.banner} row`}>
        <div className={style["banner-text"]}>
          <h1 className="responsive-headline">I&apos;m {name}.</h1>
          <h3>{description}</h3>
          <hr />
          <ul className={style.social}>{networks}</ul>
        </div>
      </div>

      <p className={style.scrolldown}>
        <a href="#about" className="smoothscroll">
          <IoIosArrowDropdownCircle />
        </a>
      </p>
    </header>
  );
};

export default Header;
