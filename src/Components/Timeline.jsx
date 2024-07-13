import React from 'react'
import data from "../Assests/data.json"

const Timeline = () => {
  return (
    <div id ='timeline'>
        <div id="timelinebox">
            {data.projects.map((item,index)=>(
                <Timelineitem 
                title = {item.title} 
                text = {item.date}
                index = {index}
                key = {item.title}
                />
            ))}
        </div>
    </div>
  );
};

const Timelineitem = ({title ,text ,index}) =>(
    <div
    className={`timelineitem ${
        index % 2 === 0 ? "left":"right"
    }`}
    >
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>

    </div>
);

export default Timeline