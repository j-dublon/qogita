# Qogita's Front-End Technical Challenge.

Congratulations on reaching the technical challenge stage of the interview process at Qogita.

We are excited to potentially have you join the Engineering team, where you will work alongside brilliant people to build a revolutionary global wholesale B2B platform.

## Background

This challenge is built around the front-end stack we use at Qogita – [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Next.js](https://nextjs.org/), and [Tailwind CSS](https://tailwindcss.com/).

You are expected to use the tools and techniques are you are most comfortable with to produce good quality code that can be understood by engineers of varying experience.

**Please address the functional requirements listed in the task below, and any non-functional requirements you see as appropriate.**

## Task – Shopping Cart

Your task is to expand this project to display products, and allow customers to add them to a shopping cart. You may use third party libraries to assist you. We expect you to prioritise the usability of your user-interface over how pretty it looks.

This task should take 3-4 hours to complete, and you will be given a week to do this. Upon completion, please submit the assignment on a zip file and send it to us by email.

### Requirements

#### Home page

- Display products retrieved from the `/products` endpoint. See [API](#api).
- Customers should be able to browse all available products (there are 100 in total).
- Customers should be able to add products to a shopping cart.

#### Cart page

- Display the products the customer has added to their shopping cart.
- Customers should be able to remove products from their shopping cart.
- The shopping cart's value should be prominently displayed.

##### Bonus requirements

- Customers should be able to change the quantity of a particular product in their shopping cart.

## Getting started

The existing code includes a development environment, and an [API](#api) with product data for you to interact with. The relevant API response types can be found in [src/types.ts](src/types.ts). Please do not use `data/products.json` directly.

### Setup

```sh
cd frontend-challenge
npm install
```

### Running locally

#### Development

Start the project in development mode.

```sh
npm run dev
```

#### Production

Build and start the project in production mode.

```sh
npm start
```

## API

The API can be interacted with via `http://localhost:3000/api` and has the following endpoints:

#### `/products`

The `/products` endpoint accepts `GET` requests and will return the first page of 20 products. To retrieve a different page of 20 products, you can pass the `page` query parameter (e.g. `/products?page=2`).

#### `/products/[gtin]`

The `/products/[gtin]` endpoint accepts `GET` requests and will return a product matching the GTIN (e.g. `/products/8005610625720`). If no product is found, the API will respond with a `404` status.

## Unit and integration tests

To run the tests, use: `npm run test`
