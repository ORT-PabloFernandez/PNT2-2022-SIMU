import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme } from "@mui/material/styles";

const useStyles = createTheme((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    zIndex: 200,
    backroundColor: "gray",
    padding: "10px 80px",

    color: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    color: "white",
  },
}));

export default function AppPagination({ setPage, pageNumber }) {
  const classes = useStyles;
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          onChange={(e) => handleChange(e.target.textContent)}
          style={{ display: "flex", justifyContent: "center" }}
          variant="outlined"
          count={pageNumber}
        />
      </div>
    </div>
  );
}
