import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap/lib";

const styles = {};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, children } = this.props;

    return (
      <Grid fluid>
        <div className={classes.content}>
          {children}
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(injectSheet(styles)(PageLayout)));
