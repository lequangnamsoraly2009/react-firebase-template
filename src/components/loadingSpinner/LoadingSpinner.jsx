import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowLoadingSpinner } from '../../redux/viewSlice';
import {
  LoadingSpinnerStyles,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';

export default function LoadingSpinner() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setShowLoadingSpinner());
    }, 1250);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <Wrapper className="loading-spinner-wrapper">
      <LoadingSpinnerStyles className="lds-default">
        <div id="child-1"></div>
        <div id="child-2"></div>
        <div id="child-3"></div>
        <div id="child-4"></div>
        <div id="child-5"></div>
        <div id="child-6"></div>
        <div id="child-7"></div>
        <div id="child-8"></div>
        <div id="child-9"></div>
        <div id="child-10"></div>
        <div id="child-11"></div>
        <div id="child-12"></div>
      </LoadingSpinnerStyles>
    </Wrapper>
  );
};