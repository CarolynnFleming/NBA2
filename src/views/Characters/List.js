import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function List() {
    const past = useHistory();
    const present = useLocation();
    const gender = new URLSearchParams(present.search).get('gender') ?? 'all';
    const [gods, setGods] = useState([]);
    const [computing, setComputing] = useState(true);

    const genderChange = (event) => {
        past.push(`/?gender=${event.target.value}`);
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
    

    return(
        <>
        <h1>The Cosmos</h1>
        {computing ? (
            <p>Computing Life Forms....</p>
        ): (
            <section>
                <label htmlFor='gender'>Life Form Gender:</label>
                <select id="gender" value={gender} onChange={genderChange}>
                    <option value="all">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">GenderLess</option>
                    <option value="unknown">unknown</option>
                </select>
                {gods.map((lifeForm) => (
                    <article key={lifeForm.id}>
                        <Link to={`/characters/${lifeForm.id}`}>
                            <h2>{lifeForm.name}</h2>
                        </Link>
                        <h3>{lifeForm.gender}</h3>
                        <img src={lifeForm.image} />
                    </article>
                ))}
            </section>
        )}
        </>
    );
}
