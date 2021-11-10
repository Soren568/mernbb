import React from 'react'
import {Link, useLocation} from '@reach/router'
import StatusTable from '../components/StatusTable'

const MngStatus = () => {
    const currentRoute = useLocation().pathname;

    return (
        <div className="w-full h-full flex flex-col justify-center p-20">
            {currentRoute === "/dashboard" || currentRoute==="/pirates/new" ? <h1 className="text-3xl"><Link to="/dashboard" className="font-semibold text-accent">Manage Pirates</Link>  | <Link to="/pirates/game/1">Manage Pirate Status</Link> </h1> : <h1 className="text-3xl"><Link to="/dashboard">Manage Pirates</Link>  | <Link to="/pirates/game/1" className="font-semibold text-accent">Manage Pirate Status</Link> </h1> }
            <div className="container pt-4 p-10 shadow-lg rounded-lg">
                <div className="flex justify-between mb-3">
                    {currentRoute === "/pirates/games/1" ? <h1 className="text-3xl"><Link to="/pirates/games/1" className="font-semibold text-accent"> Game 1 </Link> | <Link to="/pirates/games/2"> Game 2 </Link> | <Link to="/pirates/games/3"> Game 3</Link> </h1> : null} 
                    {currentRoute === "/pirates/games/2" ? <h1 className="text-3xl"><Link to="/pirates/games/1"> Game 1 </Link> | <Link to="/pirates/games/2" className="font-semibold text-accent"> Game 2 </Link> | <Link to="/pirates/games/3"> Game 3</Link> </h1> : null} 
                    {currentRoute === "/pirates/games/3" ? <h1 className="text-3xl"><Link to="/pirates/games/1"> Game 1 </Link> | <Link to="/pirates/games/2" > Game 2 </Link> | <Link to="/pirates/games/3"  className="font-semibold text-accent"> Game 3</Link> </h1> : null} 
                </div>
                <StatusTable/>
            </div>
        </div>
    )
}

export default MngStatus
