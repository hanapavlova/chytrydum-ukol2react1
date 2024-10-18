import './style.css';
import electricityPicture from './electricity.svg';
import waterPicture from './water.svg';

export const Energy = ({electricity, water}) => {
    return (
    <div className="energy">
        <div className="energy__source">
            <div className="energy__icon">
                <img src={electricityPicture} alt = 'electricity'/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">{electricity} kW</div>
            </div>
        </div>
        <div className="energy__source">
            <div className="energy__icon">
                <img src={waterPicture} alt = 'drop of water'/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">{water} m<sup>3</sup></div>
            </div>
        </div>
    </div>
      )}