## How to run application locally?

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Learn More](#learn-more)

## Installation

To get started with the project, clone the repository and install the dependencies:

### 1. Clone the repository

```
git clone https://github.com/hasanali112/CryptoMart-client

cd CryptoMart-client
```

2. Install dependencies <br/>Make sure you have Node.js installed. Then, install the project dependencies using npm or yarn:

```
npm install
# or
yarn install
```

After running the command, the app should be available at http://localhost:3000.

2. Building the application for production
   To build the app for production, use the following command:

```
npm run build
# or
yarn build
```

3. Start the production server
   After building the app, you can start the production server:

```
npm run start
# or
yarn start
```

The production app will be available at http://localhost:3000.

## Available Scripts<br/>

In the project directory, you can run the following scripts:

`npm run dev:` Runs the application in development mode.<br/>
`npm run build:` Builds the application for production.<br/>
`npm run start:` Starts the application in production mode.<br/>
`npm run lint:` Runs the linter to check for code issues.<br/>
`npm run test:` Runs the test suite (if tests are configured).

## Project Structure<br/>

The project has the following structure:

```
.
├── pages           # Contains the Next.js pages (routes)
├── public          # Static assets (images, fonts, etc.)
├── components      # Reusable React components
├── styles          # Global and component-level styles
├── utils           # Utility functions and helper files
├── next.config.js  # Next.js configuration
└── package.json    # Project dependencies and scripts

```

### Live Site Link : https://cryptomartstock.vercel.app
