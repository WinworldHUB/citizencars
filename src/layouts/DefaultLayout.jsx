import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { LocalDataContext } from '../App';
import { KEY } from '../constants'

const DefaultLayout = ({ isTopMarginRequired = true, children }) => {
  const { userId, setUserId } = useContext(LocalDataContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  useEffect(() => {
    const localUserId = localStorage.getItem(KEY);

    if (localUserId) {
      setUserId(localUserId);
    }
   }, []);

  return (
    <React.Fragment>
      <Header />
      {isTopMarginRequired && (
        <div style={{ backgroundColor: 'black', height: '130px' }}>&nbsp;</div>
      )}
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
