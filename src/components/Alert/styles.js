export default {
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    display: "flex",
    flexDirection: "column",

    width: "60%",

    boxShadow: "1px 2px 5px black",
    backgroundColor: "#fff"
  },
  modalContent: {
    flexDirection: "column",

    padding: "1.5rem"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",

    paddingRight: "1rem",
    paddingBottom: ".5rem",

    "& button": {
      color: "#00BCD3"
    }
  },
  alertName: {
    paddingBottom: "1rem",

    color: "#CA0045"
  },
  alertContant: {
    opacity: 0.7
  }
};
