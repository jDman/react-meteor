Meteor.methods({
  addFavourite(item) {
    let user = Meteor.user()
      , fave;

    if (!this.userId) return;

    fave = {
      userId: user._id,
      exerciseId: item.details.id,
      name: item.details.name
    };

    Favourites.upsert({ exerciseId: item.details.id }, fave);
  },

  removeFavourite(item) {
    let user = Meteor.user()
      , fave = Favourites.findOne({ exerciseId: item.details.id });

    if (!fave || !user) return;

    Favourites.remove({ exerciseId: item.details.id });

  }
});
