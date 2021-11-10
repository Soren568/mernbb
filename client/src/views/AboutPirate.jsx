import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { navigate, useParams, Link } from '@reach/router'

const AboutPirate = () => {
    const { id } = useParams();
    const [pirate, setPirate] = useState();
    const [change, setChange] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => setPirate(res.data.pirate))
            .catch(err => console.log(err))
    }, [change])

    const updateFeature = (e) => {
        axios.put('http://localhost:8000/api/pirates/' + id, { [e.target.name]: e.target.value })
            .then(res => setChange(prev => !prev))
            .catch(err => console.log(err))
    }

    return (pirate ? (
        <div className="w-full h-full flex flex-col justify-center pt-2 p-14 bg-base-300">
            <div className="container pt-4 p-10 shadow-2xl rounded-xl h-4/6 bg-base-100">
                <div className="flex justify-between mb-3">
                    <h1 className="text-6xl font-bold">{pirate.name}</h1>
                    <Link to="/pirates" className="btn btn-secondary ">Back to the Crew</Link>
                </div>
                <div className="card w-lg bg-base-200">
                    <div className="card-body grid grid-cols-2 gap-14">
                        <div className="w-96">
                            <img src={pirate.imgUrl} className="max-h-72"></img>
                            <p className="font-semibold text-xl text-center">Catchphrase: <span className="text-accent">{pirate.catchphrase}</span></p>
                        </div>
                        <div className="w-96">
                            <h1 className="text-center text-xl font-bold">About</h1>
                            <div className="flex flex-col justify-evenly h-full">
                                <p className="font-semibold text-xl">Position: <span className="text-accent">{pirate.rank}</span></p>
                                <p className="font-semibold text-xl">Treasures: <span className="text-accent">{pirate.treasures}</span></p>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-xl">Peg Leg: <span className="text-accent">{pirate.pegleg ? "Yes" : "No"}</span></p>
                                    {pirate.pegleg ? <button className="btn btn-error btn-sm" onClick={e => updateFeature(e)} name="pegleg" value={false}>No</button> : <button className="btn btn-success btn-sm" onClick={e => updateFeature(e)} name="pegleg" value={true}>Yes</button>}
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-xl">Eye Patch: <span className="text-accent">{pirate.eyepatch ? "Yes" : "No"}</span></p>
                                    {pirate.eyepatch ? <button className="btn btn-error btn-sm" onClick={e => updateFeature(e)} name="eyepatch" value={false}>No</button> : <button className="btn btn-success btn-sm" onClick={e => updateFeature(e)} name="eyepatch" value={true}>Yes</button>}
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-xl">Hook Hand: <span className="text-accent">{pirate.hook ? "Yes" : "No"}</span></p>
                                    {pirate.hook ? <button className="btn btn-error btn-sm" onClick={e => updateFeature(e)} name="hook" value={false}>No</button> : <button className="btn btn-success btn-sm" onClick={e => updateFeature(e)} name="hook" value={true}>Yes</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    ))
}

export default AboutPirate
