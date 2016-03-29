Content = React.createClass({
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
});
