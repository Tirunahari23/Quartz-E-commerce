export const homeSx = {
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  loader: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    main: { width: "100%", px: "2%", py: "1%", boxSizing: "border-box" },
    con1: {
      display: { xs: "none", md: "flex" },
      text: {
        color: "grey",
        "&:hover": {
          color: "black",
        },
      },
      default: { fontWeight: "700" },
    },
    login: {
      textTransform: "none",
      color: "grey",
      "&:hover": {
        color: "black",
      },
    },
    title: { fontSize: "30px", fontWeight: "800", fontFamily: "sarif" },

    menu: { display: { xs: "flex", md: "none" }, position: "relative" },
  },
  select: {
    width: "250px",
    bgcolor: "#f9f4f2",
    color: "black",
    height: "50px",
    textAlign: "center",
    "&:active": { "& #lable": { display: "block" } },
    "& fieldset": {},
    "& .MuiFormLabel-root.Mui-focused": {
      display: "none",
    },
    "& .MuiInputBase-root": {
      height: "50px",
    },
    "& .MuiInputBase-root.Mui-focused": {
      border: "1px solid",
    },
    "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent ",
    },
    "& .MuiCheckbox-root": {
      color: "#05C3FD",
    },
    "& .MuiAutocomplete-clearIndicator": {
      display: "none",
    },

    "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
      padding: 0,
    },
  },

  accodion: {
    boxShadow: "none",
  },
};

export const cardSx = {
  main: { width: { xs: "200px", sm: "320px" }, height: "420px" },
  imgCon: {
    width: { xs: "200px", sm: "320px" },
    height: { xs: "200px", sm: "320px" },
    position: "relative",
    overflow: "hidden",
  },
  img: {
    width: { xs: "200px", sm: "320px" },
    height: { xs: "200px", sm: "320px" },
  },
  quick: {
    width: { xs: "200px", sm: "320px" },
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "rgba(246, 239, 229, 0.7)",
    boxSizing: "border-box",
    bottom: "0",
    transition: "0.5s ease-in-out",
    height: "50px",
    opacity: "1",
  },
  quickHide: {
    position: "absolute",
    bottom: "0",
    width: { xs: "200px", sm: "320px" },
    transition: "0.5s ease-in-out",
    height: "0px",
    textAlign: "center",
    opacity: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    "& .MuiTypography-root": {
      fontSize: "20px",
    },
  },
};
export const mapSx = {
  main: {
    width: "100%",
    display: "flex",
    gap: 3,
    flexWrap: "wrap",
    justifyContent: "end",
  },
};

export const FooterStyles = {
  main: {
    width: "80%",
    color: "grey",
    boxSizing: "border-box",
    p: "2.5%",
    flexWrap: { xs: "nowrap", md: "wrap" },
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "start", sm: "start" },
  },
  title: {
    fontSize: { xs: "30px", sm: "30px", md: "50px" },
    color:'black'
  },
  margins: {
    marginBottom: { xs: "30px", md: "" },
  },
  btn: { border: "1px solid grey", color: "grey" },
};

