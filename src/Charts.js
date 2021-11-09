import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { fetchDailyData } from './api';
import { Line } from 'react-chartjs-2';

function Charts() {
    const [dailyData, setDailyData] = useState({})
    const [x_labels, setX_labels] = useState([])
    useEffect(async () =>{
        try {
            const { data } = await fetchDailyData(); 
            setDailyData(data)
            setX_labels(Object.keys(data.cases))
        } catch (error) {
            return error;
        }
        console.log(dailyData)
    }, [])
    return (
        <div className="Charts">
            <Line
        data={{
          labels: x_labels,
          datasets: [{
            data: Object.values(dailyData.cases),
            label: 'Infected',
            borderColor: 'blue',
            fill: true,
          },{
            data: Object.values(dailyData.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(225, 0, 0, 1)',
            fill: true,
          },{
            data: Object.values(dailyData.recovered),
            label: 'recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 225, 0, 0.5)',
            fill: true,
          }
          ],
        }}
      />
        </div>
    )
}

export default Charts
