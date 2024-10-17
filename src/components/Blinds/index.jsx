import './style.css';
import {useState} from 'react';
import blindsClosed from './blinds-closed.svg';
import blindsOpen from './blinds-open.svg';

export const Blinds = ({state}) => {
    
    const [isOpen, setIsOpen] = useState(state)
        const handleClick = () => {
            setIsOpen(!isOpen)}
    
    return (
    <div className="blinds">
<div className="blinds__icon">
    <img src={isOpen ? blindsOpen : blindsClosed}/>
</div>
<div className="blinds__name">
    Žaluzie
</div>
<div className="blinds__controls">
    {isOpen ? 
        <>
        <button onClick={handleClick} className="button button--active">Otevřeno</button>
        <button className="button">Zavřeno</button>
        </> :
        <>
        <button className="button ">Otevřeno</button>
        <button onClick={handleClick} className="button button--active">Zavřeno</button>
        </>
    }
</div>
</div>
    )}