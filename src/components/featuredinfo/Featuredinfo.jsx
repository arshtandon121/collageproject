import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'


export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹5,411</span>
                <span className="featuredMoneyRate"> 
                -11.5  <ArrowDownward className='featuredIcon Negative'/>
                  </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹4,411</span>
                <span className="featuredMoneyRate"> 
                -71.5  <ArrowDownward className='featuredIcon Negative'/>
                  </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹2,411</span>
                <span className="featuredMoneyRate"> 
                +1.5  <ArrowUpward className='featuredIcon '/>
                  </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>


    </div>
  )
}
