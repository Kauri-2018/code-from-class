# A example React project that calls a local web API

This is a starter project that illustrates React components consuming a web API.


## Steps

To experience this repo in all of its glory:

* Clone this repo

```sh
cd react-to-web-api
npm install
npm run dev
```

* Navigate to [http://localhost:3000](http://localhost:3000)


## Exercise options

* Understand where and how each component is being used

  - Make small changes to confirm your hypotheses
  - Reset all changes you've made since last commit with `git checkout .`

* The database can be updated by many users. Simulate this by opening a second browser, having one add a record, and make a 'refresh button' on the second one, which updates the records the client side knows about. Example steps: 

  - [ ] 1. Build the button and get it to log something when you click it
  - [ ] 2. Get the click to send a GET to your API, and get the server to prove it received it 
  - [ ] 3. Get the server to respond with the list of current records/widgets.
  - [ ] 4. Get the client-side to receive that response, and update the client-side state so you can see all the new records

* Extend the details that are stored in widgets - add a `rating` field to what is displayed and on the add form

* Add the ability to delete a widget

* Add the ability to update a widget

  - [ ] 1. Build the button and get it to log something when you click it
  - [ ] 2. Get the click to send something to your API, and get the server to prove it received something
  - [ ] 3. Get the server to save something sent with click. Find a way to check something was save to the 'database' (remember we're only storing the database in memory in this exercise)
  - [ ] 4. Get the server to send a message back to the user, and kick off some update of the user interface (you might want to force it to get all items again, like in the _refresh button_ case)

* Add more components and write tests for them in `test` (the tests can be run with `npm test`)


## CORS

Using `npm start`, the client is served from the same the port as the API. In this scenario we don't run into the limitations of CORS (cross-origin resource sharing). However, if we want to expose our API to clients hosted at different domain names and/or ports, we must enable this by configuring our CORS configuration.

To experience the effects of CORS:

* Run `npm start` in one terminal to expose the API on port 3000.
* Run `npm run dev` in a different terminal to serve the client on port 8080.
* Visit [http://localhost:8080](http://localhost:8080) and the site should continue to work fine.
* Have a look at how the Express middleware uses the `cors` package in `server/server.js`. Try commenting out that line and restarting `npm start`. Refresh the app and you should see errors. Read more about how to configure the [`cors` package](https://npmjs.org/package/cors) and try different configurations.

