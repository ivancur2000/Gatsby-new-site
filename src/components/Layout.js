import React from 'react'
import PropTypes from 'prop-types';

import { 
  container, 
  heading,
  navLinks, 
  navLinkItem, 
  navLinkText 
} from './Layout.module.css';

import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={ container }>
      <title>{ pageTitle }</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link
              className={navLinkText} 
              to='/' 
            >Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link
              className={navLinkText} 
              to='/about'
              >About Me</Link> 
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{ pageTitle }</h1>
        { children }
      </main>
    </div>
  )
}

export default Layout;

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}
