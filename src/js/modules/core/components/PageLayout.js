import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap/lib';

const styles = {};

class PageLayout extends PureComponent {
  render() {
    const { classes, children } = this.props;

    return (
      <Grid fluid>
        <div className={classes.content}>{children}</div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(mapStateToProps)(injectSheet(styles)(PageLayout)),
);
