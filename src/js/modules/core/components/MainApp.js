import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  MainApp: {},
};

const MainApp = ({ classes }) => {
  return <div className={classes.MainApp}>hi</div>;
};

export default injectSheet(styles)(MainApp);
