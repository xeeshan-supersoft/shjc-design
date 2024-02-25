import React from 'react';
import Layout from '../../components/Layout';


const HomePage = () => {
    return (
        <Layout>
            <h1 class="text-3xl font-bold underline bg-blue-500 ">
                Hello world!
            </h1>
            <p>This is some content specific to the Home Page.</p>
        </Layout>
    );
}

export default HomePage;