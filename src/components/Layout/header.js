import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    position: 'relative',
    borderBottom: '1px dashed black',
    '& p': {
      margin: 0
    }
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  wireframe: {
    backgroundColor: 'white'
  }
});

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <p>{siteTitle}</p>
    </header>
  );
};

export default Header;
