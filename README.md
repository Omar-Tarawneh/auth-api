# auth-api

# bearer-auth

## Features & Notes

- Addetional layers of Encyption
- Tokens will be expired after 1 hour

## Deployment test And URLS

- Heroku main branch
  [oht-auth-api](https://oht-auth-api.herokuapp.com/)

- Github Pull Request
  [Pull-Request](https://github.com/Omar-Tarawneh/auth-api/pull/1)

- Action
  [Action](https://github.com/Omar-Tarawneh/auth-api/actions)

## Setup

`.env`

- `PORT`: PORT NUMBER
- `SECRET`: `secret`

- `MONGODB_URI`: `mongodb+srv://omar:0000@cluster0.vibfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

## Running the app

- `npm satrt`

- Endpoints:
- `/singup`

  - Returns Object

  ```javascript
  {
    "user": {
        "_id": "606b071ec90c2e0e29783059",
        "username": "omar"
        "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9tYXIiLCJpYXQiOjE2MTc2MzMwMDcsImV4cCI6MTYxNzYzNjYwN30.diDiCIwjPTlECh-3rUpJUlhKBa-VP4zKLoLaT9AvJ_k"
  }
  ```

- `/signin`

  - Returns Object

  ```javascript
  {
    "user": {
        "_id": "606b071ec90c2e0e29783059",
        "username": "omar"
        "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9tYXIiLCJpYXQiOjE2MTc2MzMwMDcsImV4cCI6MTYxNzYzNjYwN30.diDiCIwjPTlECh-3rUpJUlhKBa-VP4zKLoLaT9AvJ_k"
  }
  ```

- `/users`

  - Returns Object

    ```javascript
    ['omar', 'jack', 'ahmad'];
    ```

- The routes `/api/v1/:model/:id` and `/api/v2/:model/:id` are the same but `/api/v2/:model/:id` need permession token.

## Tests

- `npm test`

## UML

![uml](Lab06.png)
![uml](lab06-api.png)
