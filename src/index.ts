/// <reference types="@types/es6-shim" />
//========================================================================
// RAML-defined Typed REST Client for 'YaasApiOAuth2V1'
//========================================================================

import * as popsicle from 'popsicle';
import * as extend from 'deep-extend';
import {Observable} from '@reactivex/rxjs';


//========================================================================
// Schema 'userInfoClaims'
//========================================================================
export namespace UserInfoClaims {
   export interface UserInfoClaims {
     /**
      * Subject - Identifier for the End-User at the Issuer
      */
     sub?: string;
     /**
      * Tenant for which End-User is authenticated (Private Claim)
      */
     tenant?: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'oauth2Error'
//========================================================================
export namespace Oauth2Error {
   export interface Oauth2Error {
     /**
      * Error
      */
     error?: string;
     /**
      * Error description
      */
     errorDescription?: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'clientCredentialsResponse'
//========================================================================
export namespace ClientCredentialsResponse {
   export interface ClientCredentialsResponse {
     access_token?: string;
     expires_in?: number;
     token_type?: string;
     traits?: string;
     [k: string]: any;
   }
}


//========================================================================
// Actions
//========================================================================


var TEMPLATE_REGEXP = /{([^{}]+)}/g

function template(string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}  

 export class YaasApiOauth2V1 {
  _client: any;
  _path: string;
  _options: any;
  _form: any;
  _version: any;
  _Security: any;

  // RAML resources without parameters

  revoke:Resources.Revoke;
  authorize:Resources.Authorize;
  token:Resources.Token;
  userinfo:Resources.Userinfo;
  tokeninfo:Resources.Tokeninfo;

  constructor(options?:any) {
    this._path = ''
    this._options = extend({
      baseUri: 'https://api.eu.yaas.io/hybris/oauth2/v1',
      baseUriParameters: {}
    }, options)
  
    //function client (method, path, options) {
    //  return this.request(client, method, path, options)
    //}
    
    // Initialize RAML resourcs without parameters

  this.revoke = new Resources.Revoke(this, '/revoke')
  this.authorize = new Resources.Authorize(this, '/authorize')
  this.token = new Resources.Token(this, '/token')
  this.userinfo = new Resources.Userinfo(this, '/userinfo')
  this.tokeninfo = new Resources.Tokeninfo(this, '/tokeninfo')
    this._client=this;
    this._form = popsicle.form
    this._version = 'v1'
    this._Security = {

    }
  // RAML resources with parameters
  

}

 request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: extend(options.headers, options.getHeaders ? options.getHeaders() : {}),
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}


}
export module Resources {
  // createResource - Revoke
  export class Revoke { 
    _client: any; _path: string;
    constructor(client, path) {
      this._client = client
      this._path = path
    }
    /**
     * POST on Revoke
     */
    POST(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_401":any}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'post', this._path, options)
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Revoke { 
  }
  // createResource - Authorize
  export class Authorize { 
    _client: any; _path: string;
    constructor(client, path) {
      this._client = client
      this._path = path
    }
    /**
     * GET on Authorize
     */
    GET(responseType:string, clientId:string, redirectUri?:string, scope?:string, state?:string, idTokenHint?:string, nonce?:string, display?:string, hybrisSessionId?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_302":any,"_400":any}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         if (responseType !== undefined && responseType !== null) options.query['response_type']=responseType;
         if (clientId !== undefined && clientId !== null) options.query['client_id']=clientId;
         if (redirectUri !== undefined && redirectUri !== null) options.query['redirect_uri']=redirectUri;
         if (scope !== undefined && scope !== null) options.query['scope']=scope;
         if (state !== undefined && state !== null) options.query['state']=state;
         if (idTokenHint !== undefined && idTokenHint !== null) options.query['id_token_hint']=idTokenHint;
         if (nonce !== undefined && nonce !== null) options.query['nonce']=nonce;
         if (display !== undefined && display !== null) options.query['display']=display;
         if (hybrisSessionId !== undefined && hybrisSessionId !== null) options.query['hybris-session-id']=hybrisSessionId;
         this._client.request(this._client, 'get', this._path, options)
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
    /**
     * POST on Authorize
     */
    POST(body:any, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_302":any,"_400":any}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         options.body=body;
         this._client.request(this._client, 'post', this._path, options)
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Authorize { 
  }
  // createResource - Token
  export class Token { 
    _client: any; _path: string;
    constructor(client, path) {
      this._client = client
      this._path = path
    }
    /**
     * POST on Token
     */
    POST(body:any, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:ClientCredentialsResponse.ClientCredentialsResponse,"_400"?:Oauth2Error.Oauth2Error}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         options.body=body;
         this._client.request(this._client, 'post', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Token { 
  }
  // createResource - Userinfo
  export class Userinfo { 
    _client: any; _path: string;
    constructor(client, path) {
      this._client = client
      this._path = path
    }
    /**
     * GET on Userinfo
     */
    GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:UserInfoClaims.UserInfoClaims}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'get', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
    /**
     * POST on Userinfo
     */
    POST(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:UserInfoClaims.UserInfoClaims}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'post', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Userinfo { 
  }
  // createResource - Tokeninfo
  export class Tokeninfo { 
    _client: any; _path: string;
    constructor(client, path) {
      this._client = client
      this._path = path
    }
    /**
     * GET on Tokeninfo
     */
    GET(accessToken:string, details?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400"?:Oauth2Error.Oauth2Error}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         if (accessToken !== undefined && accessToken !== null) options.query['access_token']=accessToken;
         if (details !== undefined && details !== null) options.query['details']=details;
         this._client.request(this._client, 'get', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Tokeninfo { 
  }
}
