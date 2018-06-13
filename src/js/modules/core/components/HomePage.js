import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { Mail } from './Icons';

const styles = {
  HomePage: {
    margin: '182px 14vw 0 14vw',
  },
  info: {
    position: 'absolute',
    right: '45px',
    top: '21px',
    textAlign: 'right',
  },
  title: {
    fontFamily: 'Domaine Display',
    fontSize: '66px',
    marginBottom: '28px',
    lineHeight: 0.64,
  },
  subtitle: {
    fontFamily: 'Atlas Grotesk',
    fontSize: '22px',
    lineHeight: 1.5,
    width: '50%',
  },
  sneakPeek: {
    marginTop: '202px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftCol: {
    flexBasis: '42%',
  },
  header: {
    fontFamily: 'Canela',
    fontSize: '36px',
    lineHeight: 1.17,
    marginBottom: '17px',
  },
  preview: {
    fontFamily: 'Atlas Grotesk',
    fontSize: '17px',
    lineHeight: 1.59,
  },
  rightCol: {
    flexBasis: '44%',
  },
  imgContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 0 8px 2px rgba(136, 136, 136, 0.5)',
    padding: '10% 0',
    textAlign: 'center',
    '& img': {
      width: '90%',
    },
  },
  email: {
    fontFamily: 'Maison Neue',
    fontSize: '16px',
    marginBottom: '9px',
    '& a': {
      color: '#000',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& img': {
      marginRight: '6px',
      position: 'relative',
      top: '3px',
    },
  },
  iLoveNyc: {
    fontSize: '13px',
    fontFamily: 'Atlas Grotesk',
    color: 'rgba(0, 0, 0, 0.82)',
    textTransform: 'uppercase',
  },
  '@media (max-width: 768px)': {
    title: {
      textAlign: 'center',
    },
    subtitle: {
      textAlign: 'center',
      width: '100%',
    },
    sneakPeek: {
      display: 'block',
    },
    leftCol: {
      marginBottom: '30px',
    },
    rightCol: {
      marginBottom: '60px',
    },
  },
  '@media (max-width: 586px)': {
    HomePage: {
      marginLeft: '7vw',
      marginRight: '7vw',
    },
    title: {
      lineHeight: 1,
    },
    info: {
      top: '17px',
      right: '28px',
    },
  },
};

const HomePage = ({ classes }) => (
  <div className={classes.HomePage}>
    <div className={classes.info}>
      <p className={classes.email}>
        <Mail />
        <Link to="mailto:jason.kao@columbia.edu">jason.kao@columbia.edu</Link>
      </p>
      <p className={classes.iLoveNyc}>Made in New York, NY</p>
    </div>

    <p className={classes.title}>The Brass Tacks</p>
    <p className={classes.subtitle}>
      We publish visual essays on the web to inform sociopolitical discussion.
    </p>

    <div className={classes.sneakPeek}>
      <div className={classes.leftCol}>
        <p className={classes.header}>
          Our first article is around the corner.
        </p>
        <p className={classes.preview}>
          Titled &ldquo;The Honorable Handshakers&rdquo;, this piece analyzes the methods
          and extent to which the Democrats and the Republicans have appealed to
          the morals within us.
        </p>
      </div>
      <div className={classes.rightCol}>
        <div className={classes.imgContainer}>
          <img src="./img/lyrics.jpg" alt="showcase" />
        </div>
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(HomePage);
