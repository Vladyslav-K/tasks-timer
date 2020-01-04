const violet = "#4823C2";

export default {
  timerContainer: {
    marginBottom: "1.5rem"
  },

  taskInput: {
    "& $input::placeholder": {
      color: violet,
      textAlign: "center",
      opacity: 1
    }
  },

  timerFab: {
    width: "10rem",
    height: "10rem",

    margin: "1.5rem",

    background: "white",

    color: violet,
    fontSize: "1.5rem"
  },

  timerButton: {
    color: violet,
    background: "white"
  }
};
