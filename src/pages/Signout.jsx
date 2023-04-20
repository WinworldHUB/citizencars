import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { KEY } from '../constants';
import { LocalDataContext } from '../App';

const Signout = () => { 
    const navigateTo = useNavigate();
    const { setUserId } = useContext(LocalDataContext);

    useEffect(() => {
        localStorage.removeItem(KEY);
        setUserId(null);
        navigateTo('/signin');
    }, []);
};

export default Signout;