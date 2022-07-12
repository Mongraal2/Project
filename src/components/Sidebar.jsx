import React from 'react'
import pic from '../pics/sidebar.png';
import back from '../pics/back.png';
const boxStyle = {
    backgroundColor: "white",
    fontSize: "25px",
    minWidth: "400px",
    boxShadow: "2px 2px 20px 2px rgb(176,176,176)",
}
const barStyle = {
    padding: "20px",
    marginLeft: "15px",
    color: "grey",
    display: "flex",
    justifyContent: "space-between  ",
    alignItems: "center"
}
const Sidebar = ({ setHide }) => {
    return (
        <div style={boxStyle}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <img src={pic} style={{ padding: "10px" }} />
                <img src={back} style={{ padding: "10px", cursor: "pointer" }} onClick={() => setHide(true)} />
            </div>
            <div style={barStyle}><div>Dashboard</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Doctor</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Clinic</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Patient</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Department</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Doctor Schedule</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Appoinment</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Payment</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Admin Profile</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>User Permission</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
            <div style={barStyle}><div>Dashboard</div><div style={{ direction: "rtl", fontSize: "30px", cursor: "pointer" }}>&gt;</div></div>
        </div>
    )
}

export default Sidebar