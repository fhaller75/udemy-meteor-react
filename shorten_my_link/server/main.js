import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

import { Links } from '../imports/collections/links';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

function onRoute(req, res, next) {
  // Take the token out of the url
  // Try to find a matiching link
  const link = Links.findOne({ token: req.params.token });

  if (link) {
    // If found, redirect and increment the counter
    Links.update( link, { $inc: { clicks: 1 }});
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    // Else, send to our React app
    next();
  }
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
})

WebApp.connectHandlers.use(middleware);
