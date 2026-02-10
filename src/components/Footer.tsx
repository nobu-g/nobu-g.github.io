import { FaChevronUp } from "react-icons/fa";
import type { MainData } from "../types/resumeData";
import { getSocialIcon } from "./socialIcons";

interface FooterProps {
  data: MainData;
}

const Footer = ({ data }: FooterProps) => {
  let networks = null;
  if (data) {
    networks = data.social.reduce<React.JSX.Element[]>((elements, network) => {
      const FaIcon = getSocialIcon(network.faClassName);
      if (!FaIcon) {
        return elements;
      }
      elements.push(
        <li key={network.name}>
          <a href={network.url}>
            <FaIcon />
          </a>
        </li>,
      );
      return elements;
    }, []);
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Nobuhiro Ueda</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a href="#home" className="smoothscroll" title="Back to Top">
            <FaChevronUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
