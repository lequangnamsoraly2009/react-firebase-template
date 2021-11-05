# React, Firebase, Redux Toolkit, and Styled Components Project Template

## Firebase Config

- [Create a Firebase project](https://firebase.google.com/docs/web/setup#create-project)

- [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)

### firebase.js

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAI,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore();
export const firebaseAuth = getAuth();
export const firebaseFunctions = getFunctions(firebaseApp);
```

### .env

```env
REACT_APP_FIREBASE_API_KEY=

REACT_APP_FIREBASE_AUTH_DOMAIN=

REACT_APP_FIREBASE_PROJECT_ID=

REACT_APP_FIREBASE_STORAGE_BUCKET=

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=

REACT_APP_FIREBASE_APP_ID=

REACT_APP_FIREBASE_MEASUREMENT_ID=
```

## Redux Toolkit

- [Create a Redux State Slice​](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice)

- [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)

- [Create a Redux Store​](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store)

### userSlice.js

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  firebaseAuth,
  // firestoreDB,
} from '../firebase';

export const signUp = createAsyncThunk('user/signUp', async ({ submittedEmail, submittedPassword }) => {
  const userCredential = await createUserWithEmailAndPassword(firebaseAuth, submittedEmail, submittedPassword);

  const uid = userCredential.user.uid;
  const email = userCredential.user.email;
  const displayName = userCredential.user.displayName;
  return { uid, email, displayName };
});

export const signIn = createAsyncThunk('user/signIn', async ({ submittedEmail, submittedPassword }) => {
  const userCredential = await signInWithEmailAndPassword(firebaseAuth, submittedEmail, submittedPassword);

  const uid = userCredential.user.uid;
  const email = userCredential.user.email;
  const displayName = userCredential.user.displayName;
  return { uid, email, displayName };
});

// export const getUser = createAsyncThunk(
//   'user/getUser',
//   async (uid) => {
//     try {
//       return allUserData;
//     } catch (error) {
//       console.error(error);
//     };
//   }
// );

const initialState = {
  uid: null,
  email: null,
  displayName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
    },
    resetUser(state, action) {
      return initialState;
    },
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.status = 'success';
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.status = 'success';
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;
export default userSlice.reducer;
```

### viewSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLoadingSpinner: true,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setShowLoadingSpinner(state, { payload }) {
      state.showLoadingSpinner = !state.showLoadingSpinner;
    },
    resetView(state, action) {
      return initialState;
    },
  },
});

export const { setShowLoadingSpinner, resetView } = viewSlice.actions;
export default viewSlice.reducer;
```

### store.js

```javascript
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import viewReducer from './viewSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    view: viewReducer,
  },
});
```

## React

### App.jsx

- [onAuthStateChanged](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged)

```javascript
import React, { useEffect } from 'react';

import './App.css';

import { firebaseAuth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from './redux/userSlice';

import MainNav from './components/MainNav';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

export default function App() {
  const showLoadingSpinner = useSelector((state) => state.view.showLoadingSpinner);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        dispatch(setUser({ uid, email, displayName }));
        try {
          const allUserData = await dispatch(getUser(uid));
        } catch (error) {
          console.error(error);
        }
      }
    });
  }, [dispatch]);

  if (!uid) {
    return (
      <div className="App">
        <AuthPage />
      </div>
    );
  }

  return (
    <div className="App">
      <MainNav />
      {showLoadingSpinner ? <LoadingSpinner /> : null}
      {/* Add views here */}
    </div>
  );
}
```

## CSS Custom Properties

- [Custom properties (--\*): CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

### App.css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

/**** Basic CSS Reset ****/
* {
  box-sizing: border-box;
  font-family: var(--font-brand);
  font-weight: var(--font-weight-normal);
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  text-decoration: none;
}

/**** Colors ****/
:root {
  /* Background Color */
  --clr-background: #ffffff;

  /* Brand Color */
  --clr-brand: #3d405b;

  /* Accent Color */
  --clr-accent: #e07a5f;

  /* Headings Color */
  --clr-headings: #3d405b;

  /* Primary Text Color */
  --clr-primary-text: #3d405b;

  /* Secondary Text Color */
  --clr-secondary-text: #ffffff;

  /* Success Color */
  --clr-success: #16a34a;
  --clr-success-light: #bbf7d0;

  /* Danger Color */
  --clr-danger: #dc2626;
  --clr-danger-light: #fecaca;

  /* Brand Font */
  --font-brand: 'Poppins', sans-serif;

  /* Supporting Font */
  /* --font-supporting: TBD; */

  /* Font Weights */
  --font-weight-light: 200;
  --font-weight-normal: 400;
  --font-weight-heavy: 600;

  /* Font Sizes */
  --font-size-0-5: 0.5rem;
  --font-size-0-75: 0.75rem;
  --font-size-0-875: 0.875rem;
  --font-size-1: 1rem;
  --font-size-1-125: 1.125rem;
  --font-size-1-25: 1.25rem;
  --font-size-1-5: 1.5rem;
  --font-size-1-75: 1.75rem;
  --font-size-2: 2rem;
  --font-size-2-5: 2.5rem;
  --font-size-3: 3rem;
  --font-size-4: 4rem;
  --font-size-5: 5rem;
  --font-size-8: 8rem;

  /* Spacing */
  --space-0-125: 0.125rem;
  --space-0-25: 0.25rem;
  --space-0-5: 0.5rem;
  --space-0-75: 0.75rem;
  --space-1: 1rem;
  --space-1-5: 1.5rem;
  --space-2: 2rem;
  --space-3: 3rem;
  --space-4: 4rem;
  --space-6: 6rem;
  --space-8: 8rem;
  --space-10: 10rem;
  --space-12: 12rem;

  /* Box Shadows */
  --box-shadow: 0.125rem 0.75rem 0.75rem rgba(200, 200, 200, 0.75);
  --box-shadow-inset: inset 0.125rem 0.25rem 0.5rem rgba(200, 200, 200, 0.75);
  --box-shadow-button: 0.125rem 0.125rem var(--clr-accent);

  /* Border Radius */
  --border-radius: var(--space-0-5);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.App {
  animation: fadeIn 0.75s ease-in;
  background-color: var(--clr-background);
  min-height: 100vh;
  padding-bottom: var(--space-1);
}
```
