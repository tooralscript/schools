import React, { useState } from 'react';
import style from "../styles/Filter.module.css";
import { useSelector } from 'react-redux';

export default function Filter() {

  const uniClicked = useSelector(state => state.menu.uniClicked);
  const schoolClicked = useSelector(state => state.menu.schoolClicked);
  const lyceumClicked = useSelector(state => state.menu.lyceumClicked);

  return (
    <div className={style.container}>
      <span style={{display: (uniClicked || schoolClicked || lyceumClicked) ? "none" : "inline" }}>Choose item from the menu</span>
      <form action="submit" style={{display : (uniClicked || schoolClicked || lyceumClicked) ? "flex" : "none" }}>
        <div style={{display : uniClicked ? "block" : "none"}}>
          <label htmlFor="yaranma">Yaranma ili: </label>
          <select name="yaranma" id="yaranma">
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2008</option>
            <option value="2008">2009</option>
            <option value="2009">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div>
          <label htmlFor="axtarish">Ada gore axtarish: </label>
          <input type="search" id='axtarish' name='axtarish' />
        </div>
        <div>
        </div>
      </form>
    </div>
  )
}
