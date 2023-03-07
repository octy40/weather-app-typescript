import React from "react";
import "./day.css";

interface Props {
    day: string;
    dayMaxTemperature: number;
    dayMinTemperature: number;
}

const Day: React.FC<Props> = ({ day, dayMaxTemperature, dayMinTemperature }) => {
    return (
        <div className="card">
            <p>{day}</p>
            {/* <p>Logo</p> */}
            <p>{dayMaxTemperature}</p>
            <p>{dayMinTemperature}<sup>o</sup></p>
        </div>
    );
};

export default Day;