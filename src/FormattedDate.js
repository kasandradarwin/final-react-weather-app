import React from "react";

export default function FormattedDate(props) {

let date = new Date(props.date * 1000);

let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];
let hours = date.getHours();


if (hours < 10) {
    hours = `0${hours}`;
}

if (hours > 12 ) {
    hours = (hours - 12);
}

let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

return(
    <div>
        {day} {hours}:{minutes}
    </div>
    );
}