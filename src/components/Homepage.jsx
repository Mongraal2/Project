import React from 'react'
import pic1 from '../pics/blood.png'
import pic2 from '../pics/gastic.png'
import pic3 from '../pics/pathology.png'
import pic4 from '../pics/radiology.png'

const boxStyle = {
  display: "flex",
  // justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  margin: "30px",
  backgroundColor: "white",
  borderRadius: "20px",
  width: "300px",
  cursor: "pointer"
}

const Homepage = () => {
  return (
    <>
      <div style={{ backgroundImage: "linear-gradient(to right,rgb(78,190,200),rgb(65,90,159))", display: "inline-block", padding: "7px", marginLeft: "23vw", marginTop: "5vh", borderRadius: "25px", color: "white" }}>
        Department List
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "0 20vw" }}>
        <div style={boxStyle}>
          <img src={pic4} />
          <div>
            Radiology
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic1} />
          <div>
            Blood analysis
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic2} />
          <div>
            Gastric Fluid Test
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic3} />
          <div>
            Pathology and Laboratory
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic4} />
          <div>
            Radiology
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic1} />
          <div>
            Blood analysis
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic2} />
          <div>
            Gastric Fluid Test
          </div>
        </div>
        <div style={boxStyle}>
          <img src={pic3} />
          <div>
            Pathology and Laboratory
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage