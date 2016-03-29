Dashboard = React.createClass({
  renderItems(){
    return this.props.exercises[0].data.map(exercise => {
      return <Exercise key={exercise.id}
                       details={exercise}
                       username={this.props.user.username}/>
    });
  },

  render() {
    return (
      <Content>
        <div>
          <h2>Dashboard</h2>

          { this.props.exercises ?
            this.renderItems() : '' }
        </div>
      </Content>
    );
  }
});
