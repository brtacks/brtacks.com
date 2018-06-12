import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Circles: {
    '& div': {
      width: '340px',
      height: '340px',
      position: 'absolute',
      borderRadius: '50%',
    },
    '& div:first-child': {
      backgroundColor: '#eae9e5',
      top: '-22px',
      left: '226px',
    },
    '& div:nth-child(2)': {
      backgroundColor: '#eae9e5',
      top: '82px',
      left: '757px',
    },
    '& div:nth-child(3)': {
      backgroundColor: '#c0cb98',
      bottom: '71px',
      left: '35vw',
    },
    '& div:last-child': {
      backgroundColor: '#075871',
      bottom: '-10px',
      left: '33px',
    },
  },
};

const Circles = ({ classes }) => (
  <div className={classes.Circles}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default injectSheet(styles)(Circles);
