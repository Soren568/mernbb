import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { navigate, useParams, Link } from '@reach/router'

const PirateForm = props => {
    // Model attributes
    const [name, setName] = useState("");
    const [catchphrase, setCatchphrase] = useState("");
    const [rank, setRank] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [pegleg, setPegleg] = useState(true);
    const [hook, setHook] = useState(true);
    const [eyepatch, setEyepatch] = useState(true);
    const [treasures, setTreasures] = useState(0);

    // Backend validation errors
    const [errors, setErrors] = useState();
    const { id } = useParams();
    const { formType } = props;

    const handleSubmit = (e, pirate) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates", pirate)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.error(err.response.data.errors)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr)
            })

    }
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center pt-2 p-14 bg-base-300">
                <div className="container pt-4 p-10 shadow-2xl rounded-xl h-4/6 bg-base-100">
                    <div className="flex justify-between mb-3">
                        <h1 className="text-3xl font-bold">Add a Pirate</h1>
                        <Link to="/pirates" className="btn btn-secondary ">Back to the Crew</Link>
                    </div>
                    <div className="card shadow-lg w-lg bg-base-200">
                        <div className="card-body">
                            {errors ?
                                (<div class="alert alert-warning mb-3 text-2xs">
                                    <div class="flex-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mx-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                        </svg>
                                        {errors.map((error, i) => <p key={i}> {error} ||| </p>)}
                                    </div>
                                </div>) : null
                            }
                            <form onSubmit={e => handleSubmit(e, { name, catchphrase, imgUrl, treasures, rank, hook, eyepatch, pegleg })} className="grid grid-cols-2 gap-14">
                                <div className="w-96">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Pirate Name</span>
                                        </label>
                                        <input onChange={e => setName(e.target.value)} value={name} name="name" type="text" placeholder="Bill Turner" class="input input-warning input-bordered" />
                                        <label class="label">
                                            <span class="label-text-alt">Name must be more than 2 characters</span>
                                        </label>
                                    </div>
                                    <div class="form-control mb-3">
                                        <label class="label">
                                            <span class="label-text">Catch Phrase</span>
                                        </label>
                                        <input onChange={e => setCatchphrase(e.target.value)} value={catchphrase} name="catchphrase" type="text" placeholder="Part of the crew, part of the ship" class="input input-warning input-bordered" />
                                    </div>
                                    <div class="form-control mb-3">
                                        <label class="label">
                                            <span class="label-text">Image URL</span>
                                        </label>
                                        <input onChange={e => setImgUrl(e.target.value)} value={imgUrl} name="catchphrase" type="text" placeholder="" class="input input-warning input-bordered" />
                                    </div>
                                    <div class="form-control mb-3">
                                        <label class="label">
                                            <span class="label-text">Treasure Count</span>
                                        </label>
                                        <input onChange={e => setTreasures(e.target.value)} value={treasures} name="catchphrase" type="number" placeholder="" class="input input-warning input-bordered w-20" />
                                    </div>
                                </div>
                                <div className="w-96">
                                    <div class="form-control mb-6">
                                        <label class="label">
                                            <span class="label-text">Crew Position</span>
                                        </label>
                                        <select onChange={e => setRank(e.target.value)} class="select select-bordered select-warning w-full max-w-xs">
                                            <option disabled="disabled" selected="selected">Rank in crew</option>
                                            <option value="captain">Captain</option>
                                            <option value="firstmate">First Mate</option>
                                            <option value="quartermaster">Quarter Master</option>
                                            <option value="boatswain">Boatswain</option>
                                            <option value="monkey">Powder Monkey</option>
                                        </select>
                                    </div>
                                    <div class="form-control mb-3">
                                        <label htmlFor="" className="label">
                                            Pirate Features
                                        </label>
                                        <div class="my-1 py-0 p-2 card bordered">
                                            <div class="form-control">
                                                <label class="cursor-pointer label">
                                                    <span class="label-text font-semibold ">Hook Hand</span>
                                                    <input type="checkbox" onClick={e => setHook(prev => !prev)} checked={hook ? "checked" : null} class="checkbox checkbox-accent" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="my-1 py-0 p-2 card bordered">
                                            <div class="form-control">
                                                <label class="cursor-pointer label">
                                                    <span class="label-text font-semibold ">Eye Patch</span>
                                                    <input type="checkbox" onClick={e => setEyepatch(prev => !prev)} checked={eyepatch ? "checked" : null} class="checkbox checkbox-accent" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="my-1 py-0 p-2 card bordered">
                                            <div class="form-control">
                                                <label class="cursor-pointer label">
                                                    <span class="label-text font-semibold ">Peg Leg</span>
                                                    <input type="checkbox" onClick={e => setPegleg(prev => !prev)} checked={pegleg ? "checked" : null} class="checkbox checkbox-accent" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-accent">{formType === "edit" ? "Edit Pirate" : "Add Pirate"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PirateForm
