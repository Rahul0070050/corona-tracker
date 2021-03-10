import React from 'react';
import Card from '../Card/Card';
import { Style } from './Style';

const Table = () => {
    const Clasess = Style();
    return (
        <div className={Clasess.contaoner}>
            <select name="" id="" className={Clasess.districtOption}>
                <option value="">all</option>
            </select>
            <Card />
        </div >
    );
}

export default Table;