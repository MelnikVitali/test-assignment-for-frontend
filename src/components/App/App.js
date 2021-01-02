import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from '../Header';
import TestAssignment from '../TestAssignment';
import LetsGetAcquainted from '../LetsGetAcquainted/LetsGetAcquainted';
import OurCheerfulUsers from '../OurCheerfulUsers';
import RegisterToGet from '../RegisterToGet';

import 'aos/dist/aos.css';
import Footer from '../Footer';

const App = React.memo(() => {
    useEffect(() => {
        AOS.init({
            offset: 80,
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
