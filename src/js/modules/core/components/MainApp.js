import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  MainApp: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '100px',
  },
};

const MainApp = ({ classes }) => (
  <div className={classes.MainApp}>
    <p>
      Welcome to <a href="http://github.com/brtacks">The Brass Tacks.</a>
    </p>
  </div>
);

export default injectSheet(styles)(MainApp);
