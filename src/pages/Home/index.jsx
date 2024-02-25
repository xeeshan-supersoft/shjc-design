import React from 'react';
import Layout from '../../components/Layout';
import Carousel from '../Carousel';
import Carousel2 from '../Carousel2';
import Cards from '../Cards';
import Tabs from '../Tabs';
import Stats from '../Stats';


const HomePage = () => {
    return (
        <Layout>
            <Carousel />
            <Tabs />
            <Cards />
            <Carousel2 />
            <Stats />
        </Layout>
    );
}

export default HomePage;