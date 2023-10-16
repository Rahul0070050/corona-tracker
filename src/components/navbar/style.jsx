import { makeStyles } from '@material-ui/core';

export const Style = makeStyles({
    navbar: {
        padding: '18px',
        backgroundColor: '#581b98',
        paddingLeft: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-around",
        "& div": {
            "& img": {
                height: '80px',
                width: '80px',
                borderRadius: '50%'
            }
        },
    },
    time: {
        border: "solid 3px #ffcdab",
        margin: 'auto 0px',
        color: 'white',
        fontSize: '30px',
        padding: "8px 17px"
    },
    navbarTitle: {
        display: 'inline',
        verticalAlign: 'middle',
        color: 'white',
        marginLeft: '10px',
        fontSize: '2.34rem',
    },
    navbarInpOptions: {
        height: '2rem',
        width: '12em',
        padding: '0px 7px',
        fontWeight: '20px'
    },













    // =============@MEDIA QUERY============= //

    '@media(max-width: 1200px)': {
        navbar: {
            padding: '10px',
            "& div": {
                "& img": {
                    height: '55px',
                    width: '55px'
                }
            }
        },
        time: {
            fontSize: '10px'
        },
        navbarTitle: {
            fontSize: '1em'
        },
        navbarInpOptions: {
            display: 'none'
        }
    },
    '@media(max-width:500px)': {
        navbar: {
            padding: '18px 3px',
            "& div": {
                "& img": {
                    display: 'none'
                }
            }
        },
        navbarTitle: {
            fontSize: '15px',
            marginLeft: '2px'
        },
        time: {
            border: 'none',
            padding: '3px 0px',
            fontSize: `15px`
        }
    }
})