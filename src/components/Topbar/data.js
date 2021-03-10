import React from 'react';
import { useGlobalContext } from '../../context/Context';
import { Style } from './Style';

const Data = () => {
    const Clasess = Style()
    const { loading, data } = useGlobalContext()
    const {
        activeCases,
        activeCasesNew,
        deaths,
        deathsNew,
        previousDayTests,
        recovered,
        recoveredNew,
        totalCases } = data;

    if (loading) {
        return (
            <div className={Clasess.dataDiv}>
                <h3>Loding...</h3>
            </div >
        );
    } else {
        return (
            <div className={Clasess.topbarDatas}>
                <h5>Active Cases: {activeCases}</h5>
                <h5>New Cases: {activeCasesNew}</h5>
                <h5>Daths: {deaths}</h5>
                <h5>New Deaths: {deathsNew}</h5>
                <h5>previous Day Tests: {previousDayTests}</h5>
                <h5>Recovered: {recovered}</h5>
                <h5>New Recovered: {recoveredNew}</h5>
                <h5>Total Cases: {totalCases}</h5>
            </div >
        )
    }
}

export default Data;
