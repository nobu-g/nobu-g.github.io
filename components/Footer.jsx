import Link from "next/link";
import * as FontAwesome from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Footer = ({ data }) => {
  let networks = null;
  if (data) {
    networks = data.social.map((network) => {
      // biome-ignore lint/performance/noDynamicNamespaceImportAccess: icon name is data-driven
      const FaIcon = FontAwesome[network.faClassName];
      return (
        <li key={network.name}>
          <Link href={network.url}>
            <FaIcon />
          </Link>
        </li>
      );
    });
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
          <Link href="#home" className="smoothscroll" title="Back to Top">
            <FaChevronUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
