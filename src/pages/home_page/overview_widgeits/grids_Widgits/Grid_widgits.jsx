import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
function Grid_widgits() {



    const NUMBER_CFG = ['0','0','0','0','0','0','0','0','0','0','0','0'];
    
    const labels = ['Jan',"Feb","Mar","Apr","May","Jun","Aug","Sep","Oct",'Nov',"Dec"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Revenue',
          data: NUMBER_CFG,
          borderColor: "blue",
          backgroundColor: "blue",
          yAxisID: 'y',
        },
        {
          label: 'Orders',
          data: NUMBER_CFG,
          borderColor: "green",
          backgroundColor: "green",
          yAxisID: 'y1',
        }
      ]
    };
 
      
        const options = {
          responsive: true,
          interaction: {
       
            intersect: true,
          },
          stacked: false,
          plugins: {
            title: {
              display: true,
           
            }
          },
          scales: {
            y: {
            
              display: true,
              position: 'left',
            },
            y1: {
       
              display: true,
              position: 'right',
      
              // grid line settings
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            },
          }
        }
      

  return (
    <div>
        <div className='line_chart'>
            <div className='line_chart_header'>
                <div>Revenue vs Orders</div>

                <div className='otherside_line_header'>

                    <div className='legend_line_bar'>
                        <div className='circle'></div>
                        <div>Revenue</div>
                    </div>

                    <div className='legend_line_bar'>
                        <div className='circle'></div>
                        <div>Orders</div>
                    </div>
                
                </div>
            </div>

            <Line data={data} options={options} />

        </div>
    </div>
  )
}

export default Grid_widgits