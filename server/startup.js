Meteor.startup(() => {
  if (!Exercises.findOne()) {
    Exercises.insert({
      data:
      [
        {
          id: 1,
          name: 'Push ups',
          difficulty: 3,
          user_rating: 4,
          img_src: 'http://placehold.it/200x100'
        },
        {
          id: 2,
          name: 'Sit ups',
          difficulty: 1,
          user_rating: 2,
          img_src: 'http://placehold.it/200x100'
        },
        {
          id: 3,
          name: 'Pull ups',
          difficulty: 5,
          user_rating: 5,
          img_src: 'http://placehold.it/200x100'
        }
      ]
    });
  }
});
