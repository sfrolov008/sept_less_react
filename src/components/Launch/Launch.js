const Launch = ({launch}) => {
    const {mission_name, launch_year,links} = launch;
    return (
        <div className='launch'>
            <img src={links.mission_patch_small} alt={mission_name}/>
            <div>{mission_name}</div>
            <div>launch_year: {launch_year}</div>

        </div>
    );
};

export {Launch};
