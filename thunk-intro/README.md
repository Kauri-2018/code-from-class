# Calling an API from a Redux client

Steps we followed in the lecture:

* Built an API on the server
* Install `redux-thunk` and `superagent`
* Configure `redux-thunk` and browser dev tools in `client/index.js`
  - https://github.com/zalmoxisus/redux-devtools-extension
  - https://github.com/gaearon/redux-thunk
* Create an async action creator
  - `getWords()` in `client/actions/index.js`
  - dispatch a normal action after we get the results from the API call
* Add a `SHOW_WORDS` case to our `words` reducer
* Call the async action creator from `<App>`
  - convert `<App>` to a class-based component
  - add a `componentDidMount` function
  - call the async action creator from `componentDidMount`
* Convert `addWord()` in `client/actions/index.js` to an async action creator
  - the `ADD_WORD` case in `client/reducers/words.js` can be removed because it is no longer used
  - the `nextWordId` variable is also no longer being used because the `id` of the words are provided after being retrieved from the API