import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Layout, LayoutWrapper, Main } from 'mongez/layout';

export default function BaseLayout({ ...props }) {
    return (
        <Layout>
            <LayoutWrapper>
                <Header />
                <Main children={props.children} />
                <Footer />
            </LayoutWrapper>
        </Layout>
    )
};