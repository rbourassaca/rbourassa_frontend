import React from "react"
import ReactPlayer from "react-player/lazy"

const Embed = ({link}) => {
    return(
        <ReactPlayer url={link} width="100%" controls="true" className="embed"/>
    )
}

export default Embed