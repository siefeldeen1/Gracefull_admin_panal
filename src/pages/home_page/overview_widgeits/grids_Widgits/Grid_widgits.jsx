import React from 'react'
import { Line,Doughnut } from 'react-chartjs-2';
import {  LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import './Grid_widgets.css'
import Chart from 'chart.js/auto';
import { HiArrowRight } from 'react-icons/hi';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,);



function Grid_widgits() {



    const NUMBER_CFG = ['0','0','0','0','0','0','0','0','0','0','0','0'];
    
    const labels = ['Jan',"Feb","Mar","Apr","May","Jun","Aug","Sep","Oct",'Nov',"Dec"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Revenue',
          data: NUMBER_CFG,
          borderColor: "#83979C",
          backgroundColor: "#83979C",
          yAxisID: 'y',
        },
        {
          label: 'Orders',
          data: NUMBER_CFG,
          borderColor: "#D0F569",
          backgroundColor: "#D0F569",
          yAxisID: 'y1',
        }
      ]
    };

      
        const options = {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
          plugins: {
            title: {
              display: true,
           
            },
            legend: {
              display: false,}
          },
          scales: {
            y: {
                type: 'linear',
              beginAtZero: true,
              display: true,
              position: 'left',   
                ticks: {
               
                callback: function(value, index) {
               
                
                  if ( value < 2) return value *10;
                  else return value ; 
               }
              },
             
            },
            y1: {
              type: 'linear',
              display: false,
              position: 'left',
              beginAtZero: true,
              // grid line settings
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            },
          }
        }
      
        const doughnut_data = {
          labels: [
            
            // 'Red',
            // 'Blue',
            // 'Yellow'
          ],
          datasets: [{
            // label: 'My First Dataset',
            data: [1, 0],
            backgroundColor: [
              'black',
              'red',
             
            ],
            hoverOffset: 4
          }]
        };

        const doughnut_options = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom',
              align :"center" ,
            
              ltr : false,
              labels: {
       
                usePointStyle: true,
                pointStyle: 'circle',
                // padding: 20,
              
              }
            }
          }, 
      }

  return (
    <div className='charts_div_cont'>
        <div className='line_chart'>
            <div className='line_chart_header'>
                <div className='chart_title'>Revenue vs Orders</div>

                <div className='otherside_line_header'>

                    <div className='legend_line_bar'>
                        <div className='circle'></div>
                        <div>Revenue</div>
                    </div>

                    <div className='legend_line_bar'>
                        <div className='circle' style={{backgroundColor:"#D0F569"}}></div>
                        <div>Orders</div>
                    </div>
                
                </div>
            </div>

            <Line data={data} options={options} />

        </div>

      <div className='dounut_chart'>
        <div className='chart_title'>Sales by category</div>
        <Doughnut className='chart_dev' data={doughnut_data} options={doughnut_options}/>
        <div className='number_of_money'>$0</div>
        <div className='view_more_chart'>View more details <HiArrowRight/></div>
      </div>
    </div>
  )
}

export default Grid_widgits