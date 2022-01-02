import React from 'react';
import style from './Home.module.scss';
import { Helmet } from 'mongez/components';
import { styled } from '@material-ui/core';
import reactIcon from 'assets/images/react.png';

const Heading = styled('h1')({
    // marginTop: '20%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '3rem',
});

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '400px',
});

export default function Home() {
    return (
        <>
            <Helmet title="appName" description="appDescription" />

            <Heading>Welcome To React Mongez App</Heading>

            <Img className={style.spin} src={reactIcon} />
        </>
    )
}
