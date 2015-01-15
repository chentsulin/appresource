'use strict';

module.exports = function(app) {

  return function(resourcePath, controller) {

    [
      {
        action: 'index',
        verb: 'get',
        path: resourcePath
      },
      {
        action: 'create',
        verb: 'get',
        path: resourcePath + '/create'
      },
      {
        action: 'store',
        verb: 'post',
        path: resourcePath
      },
      {
        action: 'show',
        verb: 'get',
        path: resourcePath + '/:id'
      },
      {
        action: 'edit',
        verb: 'get',
        path: resourcePath + '/:id/edit'
      },
      {
        action: 'update',
        verb: 'put',
        path: resourcePath + '/:id'
      },
      {
        action: 'destroy',
        verb: 'delete',
        path: resourcePath + '/:id'
      },
    ]
    .foreach(function(route) {

      if (controller[route.action]) {
        app[route.verb](route.path, controller[route.action]);
      }

    });

  };
};
