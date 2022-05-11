import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function List() {
    const past = useHistory();
    const present = useLocation();
    const gender = new URLSearchParams(present.search).get('gender') ?? 'all';
    const [gods, setGods] = useState([]);
    const [computing, setComputing] = useState(true);

    const genderChange = (event) => {
        history.pushState(`/?gender=${event.target.value}`);
    };

    useEffect(() => {
        const captureRm = async () => {
            setComputing(true);
            const genderParams = new URLSearchParams(present.search).get('gender');

            const lifeEquation = 
            genderParams === 'all' || !genderParams
            ? 'https://rickandmortyapi.com/api/character'
            : `https://rickandmortyapi.com/api/character?gender=${genderParams}`;

            const myAnswer = await fetch(lifeEquation);
            const { results } = await myAnswer.json();

            setGods(results)
            setComputing(false);

        };
        captureRm();
    }, [present.search])
    

    
}
