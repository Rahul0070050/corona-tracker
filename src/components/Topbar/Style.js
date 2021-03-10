import React from 'react';

import { makeStyles } from '@material-ui/core';

export const Style = makeStyles({
    dataDiv: {
        textAlign: 'center'
    },
    topbarDatas: {
        marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        "& h5": {
            borderRadius: '14px',
            padding: '13px 18px',
            backgroundColor: '#f0f0f0',
            margin: '.5rem 1rem',
            flexGrow: '1',
            width: '15em'
        }
    },
    topbsrSection: {
        margin: '2rem auto',
        padding: '0 4rem',
        "& article": {
            margin: '1rem 0',
            padding: '16px 15px',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
        }
    },
    TopbarTitleAndImage: {
        height: '50',
        float: 'right',
        textTransform: 'capitalize',
        "& img": {
            marginLeft: '10px',
            height: '30px',
            width: '45px'
        }
    }
})