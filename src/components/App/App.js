import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from '../Header';
import TestAssignment from '../TestAssignment';
import LetsGetAcquainted from '../LetsGetAcquainted/LetsGetAcquainted';
import OurCheerfulUsers from '../OurCheerfulUsers';
import Register from '../Register';

import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({ offset: 80 });
    }, []);
    return (
        <>
            <Header />
            <TestAssignment />
            <LetsGetAcquainted />
            <OurCheerfulUsers />
            <Register />
        </>
    );
};

export default App;
