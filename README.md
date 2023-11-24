# Express TypeScript Mongoose User CRUD Project

A user CRUD (Create, Read, Update, Delete) API project built with Mongoose, Express, TypeScript, Zod for validation, bcrypt for password hashing, cors for cross-origin resource sharing, dotenv for environment variables, ts-node-dev for running TypeScript in development, and ESLint for code linting.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Validation](#validation)
- [Security](#security)
- [Development](#development)
- [Linting](#linting)
- [License](#license)

## Introduction

This project is a user CRUD API built with Mongoose, Express, TypeScript, Zod for validation, bcrypt for password hashing, cors for cross-origin resource sharing, dotenv for environment variables, ts-node-dev for running TypeScript in development, and ESLint for code linting.

## Features

- User registration with validation
- User login with password hashing
- Get all users, get user by ID
- Update user details
- Delete user
- Add product object to user orders
- Get all orders of a user
- Get the total price of a user's orders using Mongoose aggregate

## Technologies Used

- ` Mongoose`
- `Express`
- `TypeScript`
- `Zod`
- `bcrypt`
- `cors`
- `dotenv`
- `ts-node-dev`
- `ESLint`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/apucsd/Level-2-assignment-2.git

   cd express-ts-mongoose-crud
   ```

## 1.Install dependencies:

```
npm install
```

## 2.Create a .env file in the root directory with the following content:

```
DATABASE_URL=your_mongodb_url
PORT=5000
BRYCRPT_SALT_ROUND=12
```

## 3.Start the development server:

```
npm run dev
```

# Usage

## API Endpoints

- `POST /api/users: Create a new user.`
- `GET /api/users: Get all users.`
- `GET /api/users: Get all users.`
- `GET /api/users: Get all users.`
- `GET /api/users/:userId: Get user by ID.`
- `PUT /api/users/:userId: Update user details.`
- `DELETE /api/users/:userId: Delete user.`
- `PUT /api/users/:userId/orders: Add a product object to the orders array for the user.`
- `GET /api/users/:userId/orders: Get all orders of a user.`
- `GET /api/users/:userId/orders/total-price: Get the total price of a user's orders.`

## Validation

User input is validated using Zod. Check the `src/app/modules/user/user.validation.ts` file for validation details.

## Security

Passwords are hashed using `bcrypt` for enhanced security.

## Development

Use `npm run dev` to start the development server with `ts-node-dev`. This will automatically restart the server on file changes.

## Linting

ESLint is used for code linting. Use `npm run lint` to run linting checks.
