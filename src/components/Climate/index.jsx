import './style.css';
import {useState} from 'react';
import temp from './temp.svg';
export const Climate = ({temperature, humidity}) => {
    
    const [grade, setGrade] = useState(temperature)
        const increase = () => {
            setGrade(grade+1);}
        const decrease = () => {
            setGrade(grade-1);}

    return (
    <div className="climate">
<div className="climate__icon">
    <img src={temp} alt='thermometer'/>
</div>
<div className="climate__content">
    <div className="climate__temperature">{grade}&deg;C</div>
    <div className="climate__humidity">{humidity}&nbsp;%</div>
</div>
<div className="climate__controls">
    <button onClick={increase} className="button">+</button>
    <button onClick={decrease} className="button">-</button>
</div>
</div>
  )}