import React, { useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Style } from './Style';

const Table = () => {
    const Clasess = Style();

    return (
        <div className={Clasess.contaoner}>
            <select name="" id="" className={Clasess.districtOption}>
                <option value="">all</option>
            </select>
            <div className={Clasess.dataDiv}><h4>Loading...</h4></div>
        </div>
    );
}

export default Table;