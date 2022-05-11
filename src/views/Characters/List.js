import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function List() {
    const past = useHistory();
    const present = useLocation();
    const gender = new URLSearchParams(location.search).get('gender') ?? 'all';
    const [gods, setGods] = useState([]);
    const [computing, setComputing] = useState(true);

    const genderChange = (event) => {
        history.pushState(`/?gender=${event.target.value}`);
    };
  return (
    <div>List</div>
  )
}
