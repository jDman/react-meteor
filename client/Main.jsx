Meteor.startup(() => {
  // render the component after the page is ready
  let { Router, Route, browserHistory, IndexRoute } = ReactRouter;

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

  ReactDOM.render((
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Welcome } />
        <Route path="/Dashboard" component={ Dashboard } />
      </Route>
    </Router>
  ), document.getElementById('app'));
});
