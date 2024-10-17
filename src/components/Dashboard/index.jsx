import './style.css';
import { Lights } from "../Lights"
import { Climate } from "../Climate"
import { Energy } from "../Energy"
import { Blinds } from "../Blinds"

export const Dashboard = ({data}) => {
    return (<main className="dashboard">
        < Lights lights={data.lights} />
        < Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
        < Blinds state={data.blinds}/>
        < Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}/>
    </main>)
    }