import React, { memo, useEffect, useState } from 'react';
import { coronaNavbarImage } from '../ALL_DATA/ALL_DATA';
import { Style } from './style';

function Navbar() {
    const Clasess = Style();
    const [time, setTime] = useState(new Date().toLocaleString())
    useEffect(() => {
        console.log(2);
        const updateTime = setInterval(() => {
            console.log(3);
            setTime(new Date().toLocaleString())
            return () => {
                clearInterval(updateTime)
            }
        },1000)
    },[])
    return (
        <nav className={Clasess.navbar} >
            <div>
                <img src={coronaNavbarImage} alt="" />
                <h2 className={Clasess.navbarTitle}><strong>C</strong>OVID-19 <strong>C</strong> <strong>T</strong>racker</h2>
            </div>
            <h4 className={Clasess.time}>{time}</h4>
            <input type="text" className={Clasess.navbarInpOptions} placeholder="Districts.." />
        </nav >
    )
}

export default memo(Navbar)