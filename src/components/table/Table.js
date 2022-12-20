import { Box, Card, CardContent, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useFetch from '../useFetch/useFetch';
import { Style } from './Style';

const Table = () => {
    const Clasess = Style();

    const [newLoading, allData] = useFetch('https://api.covidtracking.com/v1/states/current.json')

    console.log(!newLoading && allData[0]?.state);
    return (
        <div className={Clasess.contaoner}>
            <select name="" id="" className={Clasess.districtOption}>
                <option value="">all</option>
            </select>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '1rem 0' }}>
                {newLoading ? <div className={Clasess.dataDiv}><h4>Loading...</h4></div> : allData.map(data => {
                    console.log(data.state);
                    const {
                        state,
                        positive,
                        probableCases,
                        hospitalizedCurrently,
                        lastUpdateEt,
                        death
                    } = data
                    return (
                        <div style={{ margin: '1rem' }}>
                            <Card sx={{ minWidth: 275, padding: '1rem' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        state: {state}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        state: {positive}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        hospitalizedCurrently: {hospitalizedCurrently}
                                    </Typography>
                                    <Typography variant="body2">
                                        lastUpdateEt: {lastUpdateEt}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Table;