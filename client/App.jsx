App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      exercises: null
    }
  },

  getMeteorData() {
    return {
      exercises: Exercises.find({}).fetch(),
      currentUser: Meteor.user()
    };
  },

  componentDidMount() {
    Tracker.autorun(() => {
      let user = Meteor.user()
        , exercises = this.data.exercises;

      const {router} = this.context;

      if (user) {
        this.handleState(exercises);

        router.push({
          pathname: '/dashboard',
          query: {},
          state: this.state
        });
      } else {
        this.handleState();

        router.push({
          pathname: '/',
          query: {},
          state: this.state
        });
      }
    });
  },

  handleState(data) {
    this.setState({
      exercises: data
    });
  },

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
          exercises: this.state.exercises,
          handleState: this.handleState,
          user: Meteor.user()
      });
    });
  },

  render() {
    return (
      <div className="container">
        <Header user={this.data.currentUser}/>

        <Content>
          { this.renderChildren() }
        </Content>
        
        <Footer />
      </div>
    );
  }
});
