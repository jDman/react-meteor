let { DropDownMenu, MenuItem, Styles } = MUI;

let { ThemeManager, LightRawTheme } = Styles;

Navigation = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  getInitialState() {
    return {
      value: 2
    }
  },

  componentWillMount() {
    injectTapEventPlugin();
  },

  handleChange(event, index, value){
    event.preventDefault();

    this.setState({value});
  },

  render() {
    return (
      <DropDownMenu value={this.state.value}
                    onChange={this.handleChange}
                    iconStyle={{fill: 'black'}}>
        <MenuItem value={1} primaryText="Never"/>
        <MenuItem value={2} primaryText="Every Night"/>
        <MenuItem value={3} primaryText="Weeknights"/>
        <MenuItem value={4} primaryText="Weekends"/>
        <MenuItem value={5} primaryText="Weekly"/>
      </DropDownMenu>
    );
  }
});
