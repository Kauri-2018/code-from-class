### client side
  * Index component
    - createStore include reducers and setup the default store
  * Navbar component 
    - map ```isAuthenticated``` into props
    ```
    const mapStateToProps = (state) => {
      return {
        isAuthenticated: state.auth.isAuthenticated
      }
    }
    ```
    - ```isAuthenticated``` is a function, it will call ```localStorage.getItem('token')``` to get the token if available. Then use jwt-decode to decode the token. Check if token expired. return true or false
    try encoded token in https://jwt.io/

  * Quote component
    - map ```quote``` into props
    - map ```onQuoteClick``` and ```onSecretQuoteClick``` dispatches into props
    - ```onQuoteClick```  will dispatch ```fetchQuote``` action 
    - ```fetchQuote``` will call ```request``` in api
    - ```request``` will send get request with headers info to url```/api/v1/quote```

### server side
  * api route will catch this url ```/api/v1/quote```
  and we don't need verify jwt so 
  ```
    verifyJwt({
    credentialsRequired: false,
    secret: getSecret
  })
  ```

  