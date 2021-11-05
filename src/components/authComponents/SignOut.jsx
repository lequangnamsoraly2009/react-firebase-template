import React from 'react';
import { firebaseAuth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { clearVideos } from '../../redux/selectedVideosSlice';
import { clearCustomBranding } from '../../redux/brandingSlice';
import { resetView } from '../../redux/viewSlice';
import { resetUser } from '../../redux/userSlice';
import { Button } from '../styledComponents/styledComponentsIndex';
import setCustomProperties from '../../utils/setCustomProperties';

export default function SignOut() {
  const dispatch = useDispatch();

  const signOutUser = async () => {
    try {
      dispatch(resetView());
      dispatch(clearVideos());
      dispatch(clearCustomBranding());
      dispatch(resetUser());
      setCustomProperties({});
      await signOut(firebaseAuth);
    } catch (error) {
      console.error(error);
    };
  };

  return <Button onClick={signOutUser} className="outlined">Sign Out</Button>;
};