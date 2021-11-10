import React, { useEffect, useState } from 'react'
import DeleteButton from './DeleteBtn'
import axios from 'axios';
import { Link } from '@reach/router';

const PirateTable = () => {
    const [pirates, setPirates] = useState([]);
    const [domChange, setDomChange] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                console.log("%c All pirates", "color: turquoise; font-size: 1rem")
                console.table(res.data.pirates)
                setPirates(res.data.pirates)
            })
            .catch(err => {
                console.error(err)
            })
    }, [domChange])

    return (
        <div className="mt-5">
            {pirates.map((pirate, i) =>
                <div className="card lg:card-side bordered bg-base-300 shadow-xl p-3" key={i}>
                    <figure>
                        <img src={pirate.imgUrl} className="max-h-64 rounded-lg"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{pirate.name}</h2>
                        <p>"{pirate.catchphrase}"</p>
                        <div className="card-actions">
                            <Link to={"/pirates/"+pirate._id} className="btn btn-ghost">Pirate Info</Link>
                            <DeleteButton id={pirate._id} successCallback={e => setDomChange(prev => !prev)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PirateTable
