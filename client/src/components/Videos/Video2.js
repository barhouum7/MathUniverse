import React, { Component } from "react"
import video1 from "../../assets/videos/vid2.mp4"

class Video extends Component {
  render() {
    return (
      <>
      <div>
        <video src={video1} muted loop autoplay="true" 
        style={{ 
          position: "absolute",
          // height: "60vh" ,
          objectFit: "cover",
          top: "50px",
          left: "0",
          right: "0",
          width: "100%",
          height: "80%",
          backgroundAttachment: "fixed",
          }}
    />
      </div>
      <div style={{ 
          position: "absolute",
          // height: "60vh" ,
          objectFit: "cover",
          top: "50px",
          left: "0",
          right: "0",
          width: "100%",
          height: "80%",
          backgroundColor: "#738878",
          mixBlendMode: "overlay",
          backgroundAttachment: "fixed",
          zIndex: "100",
          }}>
      </div>
      </>
    )
  }
}

export default Video