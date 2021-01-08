import React, { Suspense, useEffect } from 'react';
import AOS from 'aos';

import Header from '../Header';
import TestAssignment from '../TestAssignment';
import LetsGetAcquainted from '../LetsGetAcquainted';
import OurCheerfulUsers from '../OurCheerfulUsers';
import Footer from '../Footer';

import 'aos/dist/aos.css';

const RegisterToGet = React.lazy(() => import('../RegisterToGet'));

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
            <Suspense fallback={<div>Loading...</div>}>
                <RegisterToGet />
            </Suspense>
            <Footer />
        </>
    );
});

export default App;
