import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const styles = {};

class PageLayout extends PureComponent {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.content}>{children}</div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(mapStateToProps)(injectSheet(styles)(PageLayout)),
);
