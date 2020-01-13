const blue = "#00BCD3";

export default {
  container: {
    paddingTop: "10%",

    "& h4": {
      color: blue,
      paddingBottom: "1rem"
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",

    paddingRight: "1rem",
    paddingBottom: ".5rem",

    "& span": {
      color: blue
    }
  }
};
