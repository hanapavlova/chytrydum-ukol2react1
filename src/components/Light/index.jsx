import {useState} from 'react';
import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

export const Light = ({name, state}) => {

        const [isOn, setIsOn] = useState(state === 'on')
        const handleClick = () => {
            setIsOn(!isOn)}

    return (
<div onClick={handleClick} className="light">
        <div className="light__icon">
            <img src={isOn ? lightOn : lightOff}/>
        </div>
        <div className="light__name">
            {name}
        </div>
</div>
)}
