import React from 'react';

import Container from '@material-ui/core/Container';

import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Container maxWidth="md">
                {props.children}
            </Container >

            <Footer />
        </div>
    );
}

export default Layout;