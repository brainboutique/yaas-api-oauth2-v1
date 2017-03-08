var popsicle = require('popsicle')
var extend = require('deep-extend')
var setprototypeof = require('setprototypeof')

var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

module.exports = Client

function template (string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}

function request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: options.headers,
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}

function Client (options) {
  this._path = ''
  this._options = extend({
    baseUri: 'https://api.eu.yaas.io/hybris/oauth2/v1',
    baseUriParameters: {}
  }, options)

  function client (method, path, options) {
    return request(client, method, path, options)
  }

// ### ctr 1
// ### createProtoResources
  this.revoke = new Revoke(client, '/revoke')
// ### createProtoResources
  this.authorize = new Authorize(client, '/authorize')
// ### createProtoResources
  this.token = new Token(client, '/token')
// ### createProtoResources
  this.userinfo = new Userinfo(client, '/userinfo')
// ### createProtoResources
  this.tokeninfo = new Tokeninfo(client, '/tokeninfo')
  this._client=client;
  setprototypeof(client, this)
  return client
}

Client.form = popsicle.form
Client.version = 'v1'
Client.Security = {
}
function Revoke (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
Revoke.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function Authorize (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
Authorize.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
Authorize.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function Token (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
Token.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function Userinfo (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
Userinfo.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
Userinfo.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function Tokeninfo (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
Tokeninfo.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
