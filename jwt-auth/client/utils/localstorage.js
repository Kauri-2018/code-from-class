// const localStorage = global.window.localStorage
// Unless you've declared a variable named localStorage in a custom defined scope, they're the same. localStorage refers to window.localStorage. In fact every variable in global namespace can be accessed as window.<variableName>
export function get (key) {
  return localStorage.getItem(key)
}

export function set (key, value) {
  if (value === null) {
    localStorage.removeItem(key)
  } else {
    localStorage.setItem(key, value)
  }
}
