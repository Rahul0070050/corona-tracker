import React from 'react';
import { useGlobalContext } from '../../context/Context';
import { Style } from './Style';

const Data = () => {
    const Clasess = Style()
    const { loading, fetchData } = useGlobalContext()
    const {
        activeCases,
        activeCasesNew,
        deaths,
        deathsNew,
        previousDayTests,
        recovered,
        recoveredNew,
        totalCases } = fetchData;

    return (
        <>
            {loading ? <div className={Clasess.dataDiv}><h4>Loading...</h4></div> : <div className={Clasess.topbarDatas} >
                <h5>Active Cases: {activeCases}</h5>
                <h5>New Cases: {activeCasesNew}</h5>
                <h5>Daths: {deaths}</h5>
                <h5>New Deaths: {deathsNew}</h5>
                <h5>previous Day Tests: {previousDayTests}</h5>
                <h5>Recovered: {recovered}</h5>
                <h5>New Recovered: {recoveredNew}</h5>
                <h5>Total Cases: {totalCases}</h5>
            </div>
            }
        </>
    )
}

export default Data;
