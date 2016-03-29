Login = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.login));
  },

  componentWillUnmount() {
    Blaze.remove(this.view);
  },

  render() {
    return <div className="login" ref="login" />;
  }
});
