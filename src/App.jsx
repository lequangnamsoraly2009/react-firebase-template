import React, { useEffect } from 'react';

import './App.css';

// import { firebaseAuth } from './firebase';
// import { onAuthStateChanged } from 'firebase/auth';

// import { useDispatch, useSelector } from 'react-redux';
// import { getUser, setUser } from './redux/userSlice';

import MainNav from './components/MainNav';
// import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

export default function App() {
  // const showLoadingSpinner = useSelector((state) => state.view.showLoadingSpinner);

  // useEffect(() => {
  //   onAuthStateChanged(firebaseAuth, async (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       const email = user.email;
  //       const displayName = user.displayName;
  //       dispatch(setUser({ uid, email, displayName }));
  //       try {
  //         const allUserData = await dispatch(getUser(uid));
  //       } catch (error) {
  //         console.error(error);
  //       };
  //     };
  //   });
  // }, [dispatch]);

  // if (!uid) {
  //   return (
  //     <div className="App">
  //       <AuthPage />
  //     </div>
  //   );
  // };

  return (
    <div className="App">
      <MainNav />
      {/* {showLoadingSpinner ? <LoadingSpinner /> : null} */}
    </div>
  );
};
