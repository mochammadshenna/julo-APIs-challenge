# Mini Wallet Challenge

## Endpoints :

List of available endpoints:

   
1. `POST /init`
2. `POST /wallets`
3. `GET /wallets`
4. `POST /wallets/deposits`
5. `POST /wallets/withdrawals`
6. `PATCH /wallets`


&nbsp;

## 1. POST /init

Description:

- Create new user 

Request:

- body:

_Response (201 - Created)_

```json
{
  "data": {
    "token": "cb04f9f26632ad602f14acef21c58f58f6fe5fb55a"
  },
  "status": "success"
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

## 2. POST /wallets

Description:

- Access to Wallet

Request:

- body:

_Response (200 - OK)_

```json
{
  "status": "success",
  "data": {
    "wallet": {
      "id": "6ef31ed3-f396-4b6c-8049-674ddede1b16",
      "owned_by": "c4d7d61f-b702-44a8-af97-5dbdafa96551",
      "status": "enabled",
      "enabled_at": "1994-11-05T08:15:30-05:00",
      "balance": 0
    }
  }
}
```

## 3. GET /wallets
Description:

- Access to Wallet

Request:

- body:

_Response (200 - OK)_

```json
{
  "status": "success",
  "data": {
    "wallet": {
      "id": "c4d7d61f-b702-44a8-af97-5dbdafa96551",
      "owned_by": "6ef31975-67b0-421a-9493-667569d89556",
      "status": "enabled",
      "enabled_at": "1994-11-05T08:15:30-05:00",
      "balance": 0
    }
  }
}
```

## 4. POST /wallets/deposits

Description:

- Access to Deposit

Request:

- body:

_Response (200 - OK)_

```json
{
  "status": "success",
  "data": {
    "deposit": {
      "id": "ea0212d3-abd6-406f-8c67-868e814a2433",
      "deposited_by": "526ea8b2-428e-403b-b9fd-f10972e0d6fe",
      "status": "success",
      "deposited_at": "1994-11-05T08:15:30-05:00",
      "amount": 0,
      "reference_id": "f4cee01f-9188-4a29-aa9a-cb7fb97d8e0a"
    }
  }
}
```

## 5. POST /wallets/withdrawals

Description:

- Access to Withdrawal

Request:

- body:

_Response (200 - OK)_

```json
{
  "status": "success",
  "data": {
    "withdrawal": {
      "id": "ea0212d3-abd6-406f-8c67-868e814a2433",
      "withdrawn_by": "526ea8b2-428e-403b-b9fd-f10972e0d6fe",
      "status": "success",
      "withdrawn_at": "1994-11-05T08:15:30-05:00",
      "amount": "60000",
      "reference_id": "c4cee01f-2188-4a29-aa9a-cb7fb97d8e0a"
    }
  }
}
```

## 6. PATCH /wallets
Description:

- Update Wallet in detail

Request:

- body:

_Response (200 - OK)_

```json
{
  "status": "success",
  "data": {
    "wallet": {
      "id": "6ef31ed3-f396-4b6c-8049-674ddede1b16",
      "owned_by": "526ea8b2-428e-403b-b9fd-f10972e0d6fe",
      "status": "disabled",
      "disabled_at": "1994-11-05T08:15:30-05:00",
      "balance": 0
    }
  }
}
```
