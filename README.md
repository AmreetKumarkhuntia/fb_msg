# RICHPANEL ASSESSMENT

Welcome to Messenger Manager, an application designed to streamline the management of business messages on Facebook.

## Overview

Messenger Manager is a powerful tool that simplifies the handling of business conversations on Facebook. Whether you're a small business owner, a customer support agent, or simply someone managing multiple Facebook Pages, this app is tailored to your needs.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (>=20.5.1)
- npm (>=9.8.0) or yarn
- mongo DB (>=5.0.8)

## Getting Started

To start with Messenger Manager, please refer to the [Installation](#installation) section below for step-by-step instructions.

## Frontend Installation

To set up the frontend of Messenger Manager, follow these simple steps:
1. Clone this repository to your local machine.
2. Navigate to the `server` directory:
     ```bash
     cd client
 3. Install Required Packages
    ```bash
    npm install
    
## Backend Installation

To set up the frontend of Messenger Manager, follow these simple steps:
1. Clone this repository to your local machine.
2. Navigate to the `server` directory:
     ```bash
     cd server
 3. Install Required Packages
    ```bash
    npm install

## MongoDB Server Setup

Messenger Manager relies on a MongoDB database to store and manage data. Follow these steps to set up a MongoDB server:

1. **Install MongoDB**: If you haven't already, [install MongoDB](https://docs.mongodb.com/manual/installation/) on your local machine or a remote server.

2. **Start MongoDB**: Start the MongoDB server. On your local machine, you can typically start MongoDB with the following command:

   ```bash
   mongod
3. Use the Required server from MongoDBCompass or from PowerShell with a database named `MSNGR` using the following command-
   ```bash
   mongo
   > use MSNGR

## Example environment file configuration for server
     Here is an example of an environment file in the server folder - 
     ```bash
     APP_SECRET = `App secret key of app`
     APP_ID = `App Id for Facebook login/messenger`
     JWT_SECRET = `JWT Secret Key(can be anything)`
     MONGO_URL = `mongo DB database URL`
     PORT = `2000\(any other desired port)`
     FRONTEND_URL = http://localhost:3000
     MONGO_ID = `Your ID`
     MONGO_PASS = `Your Pass`

## Interface Screenshots
1. Login Page -![Screenshot (179)](https://github.com/AmreetKumarkhuntia/fb_msg/assets/79908976/314e310f-49dc-41ec-a39e-883635313cb0)

2. Sign Up Page -![Screenshot (180)](https://github.com/AmreetKumarkhuntia/fb_msg/assets/79908976/e97e3fdf-b750-4c56-962f-8c8780266e21)

3. FB Connect Page -![Screenshot (182)](https://github.com/AmreetKumarkhuntia/fb_msg/assets/79908976/3a1e9cbc-2682-4459-9417-b0a22fc022db)

4. Messenger Page -![Screenshot (181)](https://github.com/AmreetKumarkhuntia/fb_msg/assets/79908976/6b1df4f0-010b-41ae-9ace-026d2cfa1b8c)
(This page is hardcoded as of the current version since we had no access to messenger but will add it asap.)

## Contribution

We welcome contributions from the community! If you'd like to contribute to the development of Messenger Manager, please review our [Contribution Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute it according to the terms of the license.

## Support

For questions, bug reports, or assistance, please reach out to our support team at [amreetleo123@gmail.com](mailto:amreetleo123@gmail.com).

Thank you for choosing Messenger Manager to streamline your business messaging experience on Facebook!
