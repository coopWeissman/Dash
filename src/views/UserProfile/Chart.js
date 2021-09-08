import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { BarChart, Legend, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';


function Chart(props) {
    const interest = props.interest;
    // const [years, setYears] = useState(50);
    var age = props.age;
    var retirement= props.retirement;
    var years = retirement-age;
    var savings = props.savings;
    var amount = props.amount;
    var final = props.contibutions;
    const time = 0 ; 
    const [id, setId] = useState(3);
    const data = [
      
      ]

      for (var i = 0; i < years; i=i+1){
        age = age+1
        savings= savings* 1.1
      data.push(
        {
          "name": age,
          "id": id+i,
          "uv": 1.1,
          "pv": amount,
        }
      )
      console.log(data)
    }
    
    return (
      
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      
    
    )
}

export default Chart;


  
                              
  