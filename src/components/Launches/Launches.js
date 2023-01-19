import {useEffect, useState} from "react";
import axios from "axios";

import {Launch} from "../Launch/Launch";

const Launches = () => {
const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/').then(value => (setLaunches([...value.data])))
    }, [])

    return (
        <div className='launches'>
            {launches.filter(launch => launch.launch_year !== '2020').map(launch =><Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};