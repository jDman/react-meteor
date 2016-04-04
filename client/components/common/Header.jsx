let {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
  FontIcon,
  Styles
} = MUI;

let { ThemeManager, LightRawTheme } = Styles;

Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    user: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  render() {
    return (
      <div className="toolbar">
        <Toolbar>
          <ToolbarGroup float="left">
            <ToolbarTitle text="Stick Fit" />

            <FontIcon className="mdi mdi-home" />

            <ToolbarSeparator />
          </ToolbarGroup>
          <ToolbarGroup float="left">
            { this.props.user ?
            <Navigation /> : ''
            }

            { this.props.user ?
              <Login /> : ''
            }
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
});
