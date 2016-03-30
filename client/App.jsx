let _ = lodash;

App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      exercises: null,
      favourites: null
    };
  },

  getMeteorData() {
    return {
      exercises: Exercises.find({}).fetch(),
      favourites: Favourites.find({}).fetch(),
      currentUser: Meteor.user()
    };
  },

  componentDidMount() {
    Tracker.autorun(() => {
      let user = Meteor.user()
        , exercises = this.data.exercises
        , favourites = this.data.favourites;

      const {router} = this.context;

      if (user) {
        this.handleState({
          exercises: exercises,
          favourites: favourites
        });

        router.push({
          pathname: '/dashboard',
          query: {},
          state: this.state
        });
      } else {
        this.handleState({
          exercises: [],
          favourites: []
        });

        router.push({
          pathname: '/',
          query: {},
          state: this.state
        });
      }
    });
  },

  handleState(data) {
    let updated = _.assign({}, this.state);

    if (data.exercises) {
      updated.exercises = data.exercises;
    }

    if (data.favourites) {
      updated.favourites = data.favourites;
    }

    this.setState(updated);
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
