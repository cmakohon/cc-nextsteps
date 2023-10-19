import React from "react";

export default function Video({url, title}) {
  return (
    <iframe width="100%" height="400" src={url} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}