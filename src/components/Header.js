import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="atom">
      <div className="electron" />
      <div className="electron" />
      <div className="electron" />
    </div>
    <div className="content">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Roboto"
          rel="stylesheet"
        />
      </Helmet>
      <div className="inner">
        <div className="typewriter">
          <h1 className="title">Atomic Bytes</h1>
        </div>
        <p>Custom Software Solutions and Professional Services</p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li> */}
        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li> */}
        <li>
          <a href="https://blog.atomicbytes.com">Blog</a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
