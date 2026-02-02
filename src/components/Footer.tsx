import * as FontAwesome from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import type { MainData } from "../types"

interface FooterProps {
  data: MainData
}

const Footer = ({ data }: FooterProps) => {
  const networks = data.social.map((network) => {
    const FaIcon = FontAwesome[network.faClassName as keyof typeof FontAwesome] as React.ComponentType
    return (
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noreferrer noopener">
          <FaIcon />
        </a>
      </li>
    )
  })

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
  )
}

export default Footer
