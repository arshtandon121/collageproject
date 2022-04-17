import React from 'react'
import Chart from '../../components/chart/Chart'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import "./home.css"
import {userData} from '../../DummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLs from '../../components/widgetLs/WidgetLs'

export default function Home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData}  title="User Analytics" grid dataKey="Active User" />
   <div className="homeWidgets">
     <WidgetSm/>
     <WidgetLs/>
   </div>
    </div>
  )
}
