import React, { Component } from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';
import HomeLayout from '../../components/home-layout';

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
export default class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count:1
        };
      }
   
    render(){
        return(
          
            <div>
                <HomeLayout>
                <Bar height={200} title="销售额趋势" data={salesData} />
                </HomeLayout>
            </div>)
           
    }

}