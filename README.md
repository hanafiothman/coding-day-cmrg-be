## Requirements
git and a recent version of NodeJS + npm need to be installed.

## Setup

1. `npm install`

## Server
The server uses [json-server](https://github.com/typicode/json-server) under the hood and is serving a RESTful API under http://localhost:3000/ , allowing CORS by default.

The endpoints are:

```
  /news
  /news/{id}
  /users
  /users/{id}
```

### Running

To run it, `npm start`