# Farmers' Market Platform - frontend

A platform for Customer to discover their local farmers' markets, and pre-order produce for market day. It allows Market Administrator to share information about their Market and organise the Trader of the stalls in one location. The Traders can also share information about themselves, more importantly they can list their stall wares, for Customers to browse and pre-order produce.

### Prerequisites

You will need to have the [fm-backend](https://github.com/Cully-Curwen/fm-backend) server up and running to supply data to this client.<br>
By default this will be set to port 4000. 
```
const httplink = new HttpLink({
  uri: 'http://localhost:4000/',
});
```
If it is not running locally or on a different port the httplink will need to be changed for the ApolloClient. Go into src/index.js to change this.

A MongoDB database is needed to have the server working.

### Installing

You will need to install the dependencies first with the comand 
```
npm install
```

Once you the backend server up and running you can run the app in development mode with the comand
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Once running you will be able to create accounts for Customers, Traders, and Market Admin. <br>
Once you have an account you will be able to create persistent info about the Market/Trader and list products for that market as a trader, for customers to be able to browse and add to their baskets.

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Apollo Client](https://www.apollographql.com/docs/react/) - Apollo Client uses GraphQL to build client applications
* [react-router](https://github.com/ReactTraining/react-router#readme) - Declarative routing for React

## Authors

* **Cully Curwen** - *Initial work*
