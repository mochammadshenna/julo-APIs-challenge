# BrandedThings API Documentation

## Endpoints :

List of available endpoints:

   
1. `GET /wallets`

2. `POST /products`
3. `GET /products`
4. `GET /products/:id`
5. `PUT /products/:id`
6. `DELETE /products/:id`
7.  `PATCH /products/:id`

8.  `GET /users`

9.  `POST /categories`
10. `GET /categories`
11. `DELETE /categories/:id`

12. `GET /histories/`

&nbsp;

## 1. POST /register

Description:

- Create new user as admin

Request:

- body:

```json
{
    "email": <string>,
    "password": <string>
}
```

_Response (201 - Created)_

```json
{
    "message": "New admin has been created as below.",
    "id": <integer>,
    "email": <string>
}
```

_Response (400 - Bad Request)_

```json
{
    "name": "Input Validation Error",
    "message": "Please input email."
}
OR
{
    "name": "Input Unique Constraint Error",
    "message": "email must be unique"
}
OR
{
    "name": "Input Validation Error",
    "message": "Please input a valid email."
}
OR
{
    "name": "Input Validation Error",
    "message": "Please input Password"
}
OR
{
    "name": "Input Validation Error",
    "message": "Password length must be at least 5 characters."
}
```

&nbsp;

## 2. POST /login

Description:

- User Login

Request:

- body:

```json
{
    "email": <string>,
    "password": <string>
}
```

_Response (200 - OK)_

```json
{
    "message": "Login Success.",
    "access_token": <string>,
    "email": <string>,
    "role": "staff" OR "admin"
}
```

_Response (401 - Unauthorized)_

```json
{
    "name": "Invalid Login Error",
    "message": "Invalid email or password"
}
```
_Response (403 - Forbidden)_

```json
{
    "name": "Forbiddenr Error",
    "message": "You are not authorized"
}
```

&nbsp;

## 3. POST /googleSignIn