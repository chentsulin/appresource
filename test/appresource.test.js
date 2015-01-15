'use strict';

var should = require('chai').should;
var sinon = require('sinon');
var express = require('express');

describe('appresource', function() {

  var app, controller, appresource, mock;

  beforeEach(function() {

    app = express();

    appresource = require('../index')(app);

    controller = {
      index: function(req, res) {},
      create: function(req, res) {},
      store: function(req, res) {},
      show: function(req, res) {},
      edit: function(req, res) {},
      update: function(req, res) {},
      destroy: function(req, res) {}
    };
  });

  it('should call get on /resource with controller\'s index method', function() {

    var spy = sinon.spy(app, 'get');

    spy.withArgs('/users', controller.index);

    appresource('/users', controller);

    spy.withArgs('/users', controller.index).calledOnce;
  });

  it('should call get on /resource/create with controller\'s create method', function() {

    var spy = sinon.spy(app, 'get');

    spy.withArgs('/users/create', controller.create);

    appresource('/users', controller);

    spy.withArgs('/users', controller.create).calledOnce;
  });

  it('should call post on /resource with controller\'s store method', function() {

    var spy = sinon.spy(app, 'post');

    spy.withArgs('/users', controller.store);

    appresource('/users', controller);

    spy.withArgs('/users', controller.store).calledOnce;
  });

  it('should call get on /resource/:id with controller\'s show method', function() {

    var spy = sinon.spy(app, 'get');

    spy.withArgs('/users/:id', controller.show);

    appresource('/users', controller);

    spy.withArgs('/users/:id', controller.show).calledOnce;
  });

  it('should call get on /resource/:id/edit with controller\'s edit method', function() {

    var spy = sinon.spy(app, 'get');

    spy.withArgs('/users/:id/edit', controller.edit);

    appresource('/users', controller);

    spy.withArgs('/users/:id/edit', controller.edit).calledOnce;
  });

  it('should call put on /resource with controller\'s update method', function() {

    var spy = sinon.spy(app, 'put');

    spy.withArgs('/users/:id', controller.update);

    appresource('/users', controller);

    spy.withArgs('/users/:id', controller.update).calledOnce;
  });

  it('should call delete on /resource with controller\'s destroy method', function() {

    var spy = sinon.spy(app, 'delete');

    spy.withArgs('/users/:id', controller.destroy);

    appresource('/users', controller);

    spy.withArgs('/users/:id', controller.destroy).calledOnce;
  });

});
