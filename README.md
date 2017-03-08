# YaasApiOAuth2V1

> TypeScript abstraction library for RAML-based REST API [YaasApiOAuth2V1](https://api.eu.yaas.io/hybris/oauth2/v1).

Auto-generated using [raml-typescript-generator](https://github.com/brainboutique/raml-typescript-generator). 

## Installation

```sh
npm install yaas-api-oauth-2-v1 --save
```

## Usage

### TypeScript
```ts
import {YaasApiOauth2V1} from 'yaas-api-oauth-2-v1';
...
constructor(..) {
  this.yaasApiOauth2V1 = new YaasApiOauth2V1({});
}
```

To support multiple versions of the API, it is recommended to alias the import so it can easily be mapped to a later API version - and, due to the nature of Typescript, 
you should be alerted on API signature changes already at compile time:

 ```ts
import {YaasApiOauth2V1 as YaasApiOauth2} from 'yaas-api-oauth-2-v1';
 ```


### JS (Legacy)
API skeleton as it would be produced by MuleSoft's [raml-javascript-generator](https://github.com/mulesoft-labs/raml-javascript-generator) JS generator is shipped for reference and to ease migrations:
```js
var YaasApiOauth2V1 = require('yaas-api-oauth-2-v1/leagcy.js')

var client = new YaasApiOauth2V1()
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options per request by passing an object as the last argument of request methods. For example:

```javascript
client = new YaasApiOauth2V1({ ... })

client('GET', '/', {
  baseUri: 'https://api.eu.yaas.io/hybris/oauth2/anotherVersion',
  headers: {
    'Content-Type': 'application/json'
  }
})
```

For dynamic header injection - for example required for non-standard REST services asking for custom authentication token - a provider may be defined:

```javascript
client = new YaasApiOauth2V1({
  getHeaders: ()=>{ return(this.myToken ? {Authorization: "Bearer " + this.myToken} : {}) }
});
```

#### Base URI
By default, endpoint as defined in RAML file `https://api.eu.yaas.io/hybris/oauth2/v1` is used.

**Note** If supported by API provider, it is recommended to use one API version definition (i.e. RAML file and corresponding API TypeScript library) and switch endpoint based on the desired environment, for example `test`, `qa` or `prod`

You can override the base URI by setting the `baseUri` property, or initializing a client with a base URI. For example:

```javascript
new YaasApiOauth2V1({
  baseUri: 'https://api.eu.yaas.io/hybris/oauth2/anotherVersion',
});
```


### Methods

All methods return an Observable wrapping a [Popsicle](https://github.com/blakeembrey/popsicle) obtained response:

#### `revoke.post([body, [options]])`

Revokes given access token.

```js
client.revoke.post([body, [options]]).then(...)
```
  
#### `authorize.get([query, [options]])`

Starts the authorization procedure with the parameters specified in the URL query.

```js
client.authorize.get([query, [options]]).then(...)
```
  
#### `authorize.post([body, [options]])`

This starts the authorization procedure with the parameters specified in the request body (form parameters).

```js
client.authorize.post([body, [options]]).then(...)
```
  
#### `token.post([body, [options]])`

Use only ONE of the authorization types:
<ul>
<li>[RECOMMENDED] `Authorization` header, OR</li>
<li>`client_id` and `client_secret` body parameters. Remove the content of the prefilled <strong>Authorization</strong> Basic example when you use this authorization type.</li>
</ul>

Examples:
- Client Credentials grant type
```sh
 curl -X POST 'https://api.beta.yaas.io/hybris/oauth2/v1/token' \
 -d 'grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&scope=scope1' \
 -H 'content-type: application/x-www-form-urlencoded'
```
- Resource Owner Password Credentials grant type
```sh
 curl -X POST 'https://api.beta.yaas.io/hybris/oauth2/v1/token' \
 -d 'grant_type=password&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&username=USERNAME&password=USER_PASSWORD&scope=scope1' \
 -H 'content-type: application/x-www-form-urlencoded'
```

```js
client.token.post([body, [options]]).then(...)
```
  
#### `userinfo.get([query, [options]])`

Returns claims about the authenticated end user.

```js
client.userinfo.get([query, [options]]).then(...)
```
  
#### `userinfo.post([body, [options]])`

Returns claims about the authenticated end user.

```js
client.userinfo.post([body, [options]]).then(...)
```
  
#### `tokeninfo.get([query, [options]])`

When the query parameters <strong>access_token</strong> is provided, this endpoint returns tenant, scopes, allowedServices, etc. associated with the access token.

```js
client.tokeninfo.get([query, [options]]).then(...)
```
  
## License

Apache 2.0
