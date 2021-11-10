import React, { useEffect } from 'react'
import {Link, useLocation} from '@reach/router'
import PirateTable from '../components/PirateTable'
import PirateForm from '../components/PirateForm';
const MngPirate = () => {
    const currentRoute = useLocation().pathname;
    console.log(currentRoute)

    return (
        <div className="w-full h-full flex flex-col justify-center p-20">
            {currentRoute === "/dashboard" || currentRoute==="/pirates/new" || currentRoute.includes("edit") ? <h1 className="text-3xl"><Link to="/dashboard" className="font-semibold text-accent">Manage Pirates</Link>  | <Link to="/pirates/games/1">Manage Pirate Status</Link> </h1> : <h1 className="text-3xl"><Link to="/dashboard">Manage Pirates</Link>  | <Link to="/pirates/game/1" className="font-semibold text-accent">Manage Pirate Status</Link> </h1> }
            <div className="container pt-4 p-10 shadow-lg rounded-lg">
                <div className="flex justify-between mb-3">
                    {currentRoute === "/dashboard" ? <h1 className="text-3xl"><Link to="/dashboard" className="font-semibold text-accent">List</Link> |<Link to="/pirates/new" className="font-normal">Pirate</Link> | Edit</h1> : null} 
                    {currentRoute === "/pirates/new" ? <h1 className="text-3xl"><Link to="/dashboard" className="font-normal">List</Link> |<Link to="/pirates/new" className="font-semibold text-accent">Pirate </Link> | Edit </h1> : null} 
                    {currentRoute.includes("edit") ? <h1 className="text-3xl"><Link to="/dashboard" className="font-normal">List</Link> |<Link to="/pirates/new">Pirate</Link> | <span className="font-semibold text-accent">Edit</span></h1> : null} 
                </div>
                {currentRoute === "/dashboard" ? <PirateTable /> : null }
                <div className="flex justify-center">
                    {currentRoute === "/pirates/new" ? <PirateForm formType={"create"}/> : null}
                </div>
                <div className="flex justify-center">
                    {currentRoute.includes("edit") ? <PirateForm formType={"edit"}/> : null}
                </div>
            </div>
        </div>
    )
}

export default MngPirate
