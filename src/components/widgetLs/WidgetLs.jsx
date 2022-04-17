import React from "react";
import "./widgetLs.css";


export default function WidgetLs() {

const Button = ({type}) =>{
  return <button  className={ "widgetLsButton " + type }>{type}</button>
}

  return (
    <div className="widgetLs">
      <h3 className="widgetlsTitle">Latest Transactions</h3>
      <table className="widgetLsTable">
        <tr className="widgetLsTr">
          <th className="widgetLsTh">Customer</th>
          <th className="widgetLsTh">Date</th>
          <th className="widgetLsTh">Amount</th>
          <th className="widgetLsTh">Status</th>
        </tr>
        <tr className="widgetLsTr">
          <td className="widgetLsUser">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              alt=""
              className="widgetLsImg"
            />
            <span className="widgetLsName">Sujan</span>
          </td>

          <td className="widgetLsDate"> 2 june 2021 </td>
          <td className="widgetLsAmount"> ₹1269 </td>
          <td className="widgetLsStatus">
           <Button type="Approved" />  
           </td>
        </tr>

        <tr className="widgetLsTr">
          <td className="widgetLsUser">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              alt=""
              className="widgetLsImg"
            />
            <span className="widgetLsName">Sujan</span>
          </td>

          <td className="widgetLsDate"> 2 june 2021 </td>
          <td className="widgetLsAmount"> ₹1269 </td>
          <td className="widgetLsStatus">
           <Button type="Pending" />  
           </td>
        </tr>

        <tr className="widgetLsTr">
          <td className="widgetLsUser">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              alt=""
              className="widgetLsImg"
            />
            <span className="widgetLsName">Sujan</span>
          </td>

          <td className="widgetLsDate"> 2 june 2021 </td>
          <td className="widgetLsAmount"> ₹1269 </td>
          <td className="widgetLsStatus">
           <Button type="Declined" />  
           </td>
        </tr>


      </table>
    </div>
  );
}
