# Middle ware

# what?

- A middleware is a function that runs between dispatching an action and the reducer receiving that action.

- flow

  dispatch(action)
  ↓
  Middleware
  ↓
  Reducer
  ↓
  Store Updated

  Middleware gets a chance to:

- Read the action
- Modify the action
- Stop the action
- Dispatch another action
- Perform side effects (API calls, logging, analytics)

# why?

Reducers must be pure functions.
❌ Not allowed in reducers:
example -
reducer(state, action) {
fetch("/api/users"); // Side effect
}

Reducers should only calculate the next state.

So things like:

API calls
Logging
Analytics
Error reporting
Authentication checks

are handled by middleware.

- Example
  Suppose:

dispatch(fetchUsers());

## 1.Without middleware:

dispatch
↓
reducer

Reducer cannot make API calls.

## 2.With middleware:

dispatch(fetchUsers())
↓
Middleware
↓
Call API
↓
Dispatch success/failure action
↓
Reducer

# how?

const loggerMiddleware = () => (next) => (action) => {
console.log("Dispatching:", action.type);
return next(action);
};

const store = configureStore({
reducer: callbackAction,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(loggerMiddleware),
});

## createAsyncThunk

- Why createAsyncThunk?

Reducers must be synchronous and cannot make API calls.

So, Redux Toolkit provides createAsyncThunk() to handle asynchronous operations like fetching data from an API.

createAsyncThunk

Used to perform async operations (mainly API calls).

# Syntax:

export const fetchUsers = createAsyncThunk(
"users/fetchUsers",
async () => {
const response = await fetch("/api/users");
return response.json();
}
);
It automatically creates three actions:
pending → API request started.
fulfilled → API request succeeded.
rejected → API request failed.

The value returned from the async function becomes action.payload in the fulfilled action.

extraReducers

Used to handle actions created outside the slice, such as actions from createAsyncThunk.

# Example:

extraReducers: (builder) => {
builder
.addCase(fetchUsers.pending, (state) => {
state.loading = true;
})
.addCase(fetchUsers.fulfilled, (state, action) => {
state.loading = false;
state.users = action.payload;
})
.addCase(fetchUsers.rejected, (state) => {
state.loading = false;
state.error = "API Failed";
});
}

## API Flow

dispatch(fetchUsers())
↓
pending
↓
API Call
↓
Success? -------- No?
↓ ↓
fulfilled rejected
↓ ↓
Update Data Update Error
↓
React UI Re-renders
reducers vs extraReducers
reducers extraReducers
Handles actions created inside the slice. Handles actions created outside the slice (e.g., createAsyncThunk).
Key Points
createAsyncThunk → Handles API calls.
pending → Loading starts.
fulfilled → Save API response.
rejected → Save error.
extraReducers → Handles thunk actions.
action.payload → Contains the data returned by the API.
Easy way to remember
createAsyncThunk → Makes API Call
↓
pending → Loading
fulfilled → Success + Data
rejected → Error
↓
extraReducers updates the Redux state.

## I recommend learning these topics in this order:

✅ createAsyncThunk (what it is and why we need it)
✅ extraReducers
✅ builder.addCase
✅ pending, fulfilled, rejected
✅ Passing arguments to createAsyncThunk
✅ Error handling with rejectWithValue
✅ unwrap() and awaiting dispatched thunks
✅ API cancellation with AbortController
✅ When to use createAsyncThunk vs RTK Query (the modern RTK approach)
