import React from 'react'
import './home_page.css'

import Sidebar from '../sidebar/Sidebar'
import Welcome from './overview_widgeits/welcome_widgets/Welcome'
import Info_widgits from './overview_widgeits/info_widgits/Info_widgits'

function Home_page() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>

      <div className='div_continer'>
      <Welcome/>
      <Info_widgits/>
      </div>

    </div>
  )
}

export default Home_page