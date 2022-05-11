import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'; 

import React from 'react'

export default function Detail() {

    const [rM, setRM] = useStat({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchRmCharacters = async() => {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const rmData = await res.json();
            setRM(rmData);
            setLoading(false);
        };
        fetchRmCharacters();
    }, []);
  return (
    <>
    <h1> The Planets and Stars are something we truly do not understand!</h1>
    <Link to="/">Back to what is Known</Link>
    {loading ? (
        <p>Loading The Strange....</p>
    ) : (
        <article>
            <h2>{rM.name}</h2>
            <img src={rM.image}/>
            <h4>{rM.gender}</h4>
            <h4>{rM.species}</h4>
        </article>
    )}
    </>
  );
}
