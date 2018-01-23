# Store: All application state in single javascript object

# Actions:
  ## The state tree is read only
  ## The only way to change the state tree is dispatching an action.
  ## An Action is a plain javascript object contaning a property *type*.


## Pure vs impure functions

```javascript
// Pure
// no side effects

function square(x) {
  return x * x;
}

function squareAll(items) {
  return items.map(square)
}

// Impure
// no predictable
function square(x) {
  updateXInDataBase(x);
  return x;
}

```

# Reducer -> To describe state mutations, you need a function that takes the previous state of the application, the action being dispatched, and return the next state of app and this function has to be pure.
