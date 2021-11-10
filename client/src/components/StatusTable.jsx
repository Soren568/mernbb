import React, { useEffect, useState } from 'react';
import { useParams } from '@reach/router';
import axios from 'axios';

const PirateTable = props => {
    const { gameId } = useParams()
    const currentGame = `game${gameId}` //passed in as a variable to access pirate.game1 attribute
    const [status, setStatus] = useState("");
    const [pirates, setPirates] = useState([]);
    const [domChange, setDomChange] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                console.log("%c All pirates - Status", "color: turquoise; font-size: 1rem")
                console.table(res.data.pirates)
                setPirates(res.data.pirates)
            })
            .catch(err => {
                console.error(err)
            })
    }, [domChange])

    const updateStatus = (e, pirate) => {
        e.preventDefault();
        setStatus(e.target.name);
        axios.put('http://localhost:8000/api/pirates/' + pirate._id, { [currentGame]: e.target.name })
            .then(res => {console.log("Successful status update") ; setDomChange(prev => !prev)})
            .catch(err => {
                console.error("THIS IS AN ERROR", err)
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    console.log(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message)
                }
            });
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-auto min-w-max table-zebra">
                    <thead>
                        <tr>
                            <th className="w-1/3">Name</th>
                            <th className="w-2/3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pirates.map((pirate, i) =>
                            <tr key={i}>
                                <td>{pirate.name}</td>
                                <td className="flex-row tabs tabs-boxed justify-end">
                                    <button name="play" onClick={e => updateStatus(e, pirate)} class={pirate[currentGame] === "play" ? "tab tab-active" : "tab"} >Playing</button>
                                    <button name="noplay" onClick={e => updateStatus(e, pirate)} class={pirate[currentGame] === "noplay" ? "tab bg-red-400 rounded-lg text-gray-50" : "tab"}>Not Playing</button>
                                    <button name="undecided" onClick={e => updateStatus(e, pirate)} class={pirate[currentGame] === "undecided" ? "tab bg-yellow-300 rounded-lg text-gray-50" : "tab"}>Undecided</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PirateTable
