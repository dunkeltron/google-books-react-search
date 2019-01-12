import React from "react";

export function ListItem(props) {
  const{ description, title,subtitle,imageLinks,authors} = props.data.volumeInfo;
  return (
    
    
    <li className="list-group-item">
      <span><button className="btn btn-primary">Saved</button></span>
      <span><button className = "btn btn-danger">View</button></span>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <h5>Written by: {authors}</h5>
      <img src = {imageLinks.thumbnail}/>
      <p>{description}</p>
    </li>

  )
}
