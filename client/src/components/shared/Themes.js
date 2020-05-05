import { createMuiTheme } from '@material-ui/core/styles';

class Themes {

  static rosedust = '#9D5C63';
  static burlywood = '#E4BB97';
  static ashgrey = '#CBD4C2';
  static lightgrey = '#F0EFF4';
  static darkgrey = '#584B53';

  static main = createMuiTheme({
    palette: {
      primary: {
        main: this.darkgrey,
        contrastText: this.lightgrey,
      },
      secondary: {
        main: this.lightgrey,
        contrastText: this.darkgrey,
      },
    },
    // for overriding material ui elements (globally)
    //overrides: {
    //  MuiTabs: {
    //    root: {
    //    }
    //  },
    //  MuiTab: {
    //    root: {
    //    },
    //  },
    //},
    typography: {
      fontSize: 12,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: 36,
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: 36,
        fontWeight: 400,
        letterSpacing: "0.00833em",
        lineHeight: 1.2,
      },
      h3: {
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h4: {
        fontSize: 30,
        fontWeight: 400,
        letterSpacing: "0.00833em",
        lineHeight: 1.2,
      },
      h5: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h6: {
        fontSize: 24,
        fontWeight: 400,
        letterSpacing: "0.00833em",
        lineHeight: 1.2,
      },
      subtitle1: {
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1.3,
      },
      subtitle2: {
        fontSize: 18,
        fontWeight: 400,
        letterSpacing: "0.00833em",
        lineHeight: 1.3,
      },
      body1: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      body2: {
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: "0.00833em",
        lineHeight: 1.4,
      },
    },
    spacing: [8, 12, 16, 20, 24],
  })

  static themeA = createMuiTheme({
    ...this.main,
    palette: {
      primary: {
        main: this.rosedust,
        //contrastText: this.lightgrey,
      },
      secondary: {
        main: this.lightgrey,
      },
    },
  })

  static themeB = createMuiTheme({
    ...this.main,
    palette: {
      primary: {
        main: this.ashgrey,
        contrastText: this.darkgrey,
      },
      secondary: {
        main: this.darkgrey,
      },
    },
  })

  static themeC = createMuiTheme({
    ...this.main,
    palette: {
      primary: {
        main: this.burlywood,
        contrastText: this.darkgrey,
      },
      secondary: {
        main: this.darkgrey,
      },
    },
  })

}

export default Themes
