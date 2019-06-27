import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewPostPage from './pages/NewPost';
import FeedPage from './pages/Feed';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={FeedPage} />
      <Route path="/new" component={NewPostPage} />
    </Switch>
  );
}

export default Routes;