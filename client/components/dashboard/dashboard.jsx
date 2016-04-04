Dashboard = React.createClass({
  propTypes: {
    exercises: React.PropTypes.array,
    user: React.PropTypes.object,
    handleState: React.PropTypes.func 
  },

  renderItems(){
    if (this.props.exercises.length) {
      return this.props.exercises.map(response => {
        return response.data.map(exercise => {
          return <Exercise key={exercise.id}
                           details={exercise}
                           username={this.props.user.username}
                           handleState={this.props.handleState}
                           />
        });
      });
    }
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
