import React from "react";

import classes from "./ShareBar.module.css";

import fbIcon from "./../../images/icon-facebook.svg";
import pintIcon from "./../../images/icon-pinterest.svg";
import twitterIcon from "./../../images/icon-twitter.svg";

const ShareBar = (props) => {
  let barStyle = "";

  if (props.isDisplayBar === 'unclicked') {
    barStyle = `${classes.bar}`;
  } else if (props.isDisplayBar === 'shown') {
    barStyle = `${classes.bar} ${classes.barDisplay}`;
  } else {
    barStyle = `${classes.bar} ${classes.barNondisplay}`;
  }

  return (
    <div className={barStyle}>
      <span className={classes.share}>Share</span>
      <img src={fbIcon} className={classes.icon} alt="fb-icon" />
      <img src={pintIcon} className={classes.icon} alt="pinterest-icon" />
      <img src={twitterIcon} className={classes.icon} alt="twitter-icon" />
      <div className={classes.triangle} />
    </div>
  );
};

export default ShareBar;
