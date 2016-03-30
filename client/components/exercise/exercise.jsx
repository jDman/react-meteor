let {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
  FontIcon,
  Styles
} = MUI;

let { ThemeManager, LightRawTheme } = Styles;

Exercise = React.createClass({
  propTypes: {
    details: React.PropTypes.object.isRequired,
    username: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  addToFavourites(item) {
    Meteor.call("addFavourite", item);

    this.props.handleState({
      favourites: Favourites.find({}).fetch()
    });
  },

  removeFromFavourites(item) {
    Meteor.call("removeFavourite", item);

    this.props.handleState({
      favourites: Favourites.find({}).fetch()
    });
  },

  render() {
    let user = this.props.username;

    let headerTitle =  "Instruction card for: " + user
      , headerSub = "Difficulty: " + this.props.details.difficulty;

    return (
      <Card>
        <CardHeader title={ headerTitle }
                    subtitle={ headerSub } />
        <CardMedia>
          <img src={ this.props.details.img_src } />
        </CardMedia>
        <CardTitle title={ this.props.details.name } />
        <CardText>
          Lorem ipsum ...
        </CardText>
        <CardActions>
          <FlatButton label="Add to favourites"
                      icon={ <FontIcon className="mdi mdi-star" /> }
                      onClick={ this.addToFavourites.bind(this, this.props) }/>

          <FlatButton label="Remove from favourites"
            icon={ <FontIcon className="mdi mdi-cross" /> }
            onClick={ this.removeFromFavourites.bind(this, this.props) }/>
        </CardActions>
      </Card>
    );
  }
});
