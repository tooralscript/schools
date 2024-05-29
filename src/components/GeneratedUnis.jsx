import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import style from "../styles/GeneratedUnis.module.css";

export default function GeneratedUnis() {
  const [data, setData] = useState(null);
  const selectedYear = useSelector(state => state.filter.selectedYear);
  const searchQuery = useSelector(state => state.filter.searchQuery);

  useEffect(() => {
    axios.get('https://665609963c1d3b60293c04e5.mockapi.io/data/universities')
      .then(response => {
        const filteredData = response.data.filter(uni =>
          (selectedYear ? uni.uniCreateDate === selectedYear : true) &&
          (searchQuery ? uni.uniName.toLowerCase().includes(searchQuery.toLowerCase()) : true)
        );
        setData(filteredData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedYear, searchQuery]);

  if (!data) return <div>Gozleyin...</div>;

  return (
    <div className={style.uniContainer}>
      <h1 className={style.uniHeading}>Universities List</h1>
      <ul className={style.uniList}>
      {data.length > 0 ? (
          data.map(uni => (
            <li key={uni.id} className={style.uniItem}>
              <h2 className={style.uniName}>{uni.uniName}</h2>
              <p className={style.uniDetails}>Creation Date: {uni.uniCreateDate}</p>
              <p className={style.uniDetails}>Corpus Count: {uni.uniCorpuses.length}</p>
            </li>
          ))
        ) : (
          <li>Netice yoxdur...</li>
        )}
      </ul>
    </div>
  );
}
