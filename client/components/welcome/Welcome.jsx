let {
  Paper,
  Styles
} = MUI;

let { ThemeManager, LightRawTheme } = Styles;

Welcome = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  render() {
    return (
      <div className="center-box">
        <Paper className="circle" zDepth={4} circle={true}>
          <Login />
        </Paper>
      </div>
    );
  }
});
