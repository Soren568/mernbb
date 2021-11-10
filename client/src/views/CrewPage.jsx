import React from 'react'
import PirateTable from '../components/PirateTable'
import {Link} from '@reach/router'

const CrewPage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center p-14">
            <div className="container pt-4 p-10 shadow-2xl rounded-xl h-4/6">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Pirate Crew</h1>
                    <Link to="/pirates/new" className="btn btn-secondary ">Add Pirate</Link>
                </div>
                <PirateTable/>
            </div>
        </div>
    )
}

export default CrewPage
