import React, { useState } from "react";

import Card from "./UI/Card";

import classes from "./ArticlePreview.module.css";

import drawerImg from "./../images/drawers.jpg";
import authorImg from "./../images/avatar-michelle.jpg";
import ShareIcon from "./UI/ShareIcon";
import ShareBar from "./UI/ShareBar";

const ArticlePreview = (props) => {
  const [isShareBar, setIsShareBar] = useState('unclicked');
  let shareIconFill = "#6E8098";
  let shareIconStyle = `${classes.popupParent}`;

  const toggleShareHandler = () => {
    if (isShareBar === 'unclicked' || isShareBar === 'hidden') {
      setIsShareBar('shown');
    } else {
      setIsShareBar('hidden');
    }
  };

  if (isShareBar === 'shown') {
    shareIconFill = "#FFFFFF";
    shareIconStyle = `${classes.popupParent} ${classes.popupParentClicked}`;
  } else{
    shareIconFill = "#6E8098";
    shareIconStyle = `${classes.popupParent}`;
  }

  console.log("ArticlePreview isShareBar: " + isShareBar);
  console.log("ArticlePreview shareIconStyle: " + shareIconStyle);

  return (
    <Card>
      <img src={drawerImg} className={classes["article-img"]} alt="drawers" />
      <div className={classes.article}>
        <h3 className={classes.headline}>{props.headline}</h3>
        <p className={classes.preview}>{props.preview}</p>
        <div className={classes.bylineContainer}>
          <img src={authorImg} className={classes.authorImg} alt="author" />
          <p className={classes.author}>
            {props.author}
            <span className={classes.date}>{props.date}</span>
          </p>
          <div className={shareIconStyle} onClick={toggleShareHandler}>
            <ShareIcon fill={shareIconFill} />
          </div>
          <ShareBar isDisplayBar={isShareBar} />
        </div>
      </div>
    </Card>
  );
};

export default ArticlePreview;
