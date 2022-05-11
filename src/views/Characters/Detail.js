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
    <div>Detail</div>
  )
}
