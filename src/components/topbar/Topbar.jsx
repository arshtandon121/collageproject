import React from 'react'
import "../topbar/topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";


export default function Topbar() {
  return (
    <div className='topbar'>
    <div className="TopbarWrapper">
        <div className="topleft">
          <span className="logo">Jutti Store</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
          <NotificationsNone />
          <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <Language />
          <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <Settings />
          </div>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" className="topAvatar" />
        </div>
    </div>
    </div>
  )
}
