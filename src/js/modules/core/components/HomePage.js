import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = {
  title: {
    fontFamily: 'Domaine Display',
    fontSize: 132,
    '& p': {
      lineHeight: 1,
      position: 'absolute',
    },
    '& p:first-child': {
      top: '100px',
      left: '72px',
    },
    '& p:nth-child(2)': {
      bottom: '100px',
      left: '26vw',
    },
    '& p:last-child': {
      right: '120px',
      top: '43vh',
    },
  },
  navbar: {
    fontFamily: 'Neue Haas Grotesk',
    position: 'absolute',
    right: '120px',
    top: '56px',
    '& li': {
      listStyleType: 'none',
      '& a': {
        color: '#000',
        textDecoration: 'none',
        fontSize: '35px',
        margin: '4px 0',
      },
    },
  },
  tagline: {
    fontFamily: 'Neue Haas Grotesk',
    position: 'absolute',
    left: '25vw',
    top: '35vh',
    fontSize: '33px',
    maxWidth: '220px',
  },
  underline: {
    textDecoration: 'underline !important',
  }
};

const HomePage = ({ classes }) => (
  <div>
    <div className={classes.title}>
      <p>The</p>
      <p>Brass</p>
      <p>Tacks</p>
    </div>
    <ul className={classes.navbar}>
      <li><Link className={classes.underline} to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/articles">Articles</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <p className={classes.tagline}>Reason over rhetoric.</p>
  </div>
);

export default injectSheet(styles)(HomePage);
