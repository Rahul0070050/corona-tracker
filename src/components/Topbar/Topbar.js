import React from 'react';
import { Style } from './Style';
import { india } from '../ALL_DATA/ALL_DATA';
import Data from './data';



const Topbar = () => {
    const Clasess = Style();

    return (
        <section className={Clasess.topbsrSection}>
            <article>
                <h5 className={Clasess.TopbarTitleAndImage}>
                    india
                    <img src={india} alt="" />
                </h5>
                <h5>
                    Covid19
                </h5>
                <Data />
            </article>
        </section>
    );
}

export default Topbar;
