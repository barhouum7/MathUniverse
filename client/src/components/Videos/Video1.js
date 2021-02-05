import React, { Component } from "react"
import video1 from "../../assets/videos/vid1.mp4"

class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} width="600" height="300" autoplay="true" controls="controls" />
      </div>
    )
  }
}

export default Video