import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from '../Header';
import TestAssignment from '../TestAssignment';
import LetsGetAcquainted from '../LetsGetAcquainted';
import OurCheerfulUsers from '../OurCheerfulUsers';
import RegisterToGet from '../RegisterToGet';
import Footer from '../Footer';

import 'aos/dist/aos.css';

const App = React.memo(() => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 700
        });
    }, []);

    return (
        <>
            <Header />
            <TestAssignment />
            <LetsGetAcquainted />
            <OurCheerfulUsers />
            <RegisterToGet />
            <Footer />
        </>
    );
});

export default App;
