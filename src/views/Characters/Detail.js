import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'; 

import React from 'react'

export default function Detail() {

    const [rM, setRM] = useStat({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  return (
    <div>Detail</div>
  )
}
