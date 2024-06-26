import React from "react";
import style from "../styles/Content.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneratedUnis from "../components/GeneratedUnis";
import GeneratedSchools from "../components/GeneratedSchools";
import GeneratedLyceums from "../components/GeneratedLyceums";
import Filter from "../components/Filter";
import { useDispatch } from 'react-redux';
import { setUniClicked, setSchoolClicked, setLyceumClicked } from '../features/menu/menuSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Content() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/content');
  }, []);

  const uniClicked = useSelector(state => state.menu.uniClicked);
  const schoolClicked = useSelector(state => state.menu.schoolClicked);
  const lyceumClicked = useSelector(state => state.menu.lyceumClicked);

  const dispatch = useDispatch();

  const handleUniClick = () => {
    dispatch(setUniClicked(true));
    dispatch(setSchoolClicked(false));
    dispatch(setLyceumClicked(false));
  };
  
  const handleSchoolClick = () => {
    dispatch(setUniClicked(false));
    dispatch(setSchoolClicked(true));
    dispatch(setLyceumClicked(false));
  };
  
  const handleLyceumClick = () => {
    dispatch(setUniClicked(false));
    dispatch(setSchoolClicked(false));
    dispatch(setLyceumClicked(true));
  };

  return (
    <div className={style.container}>
      <div className={style.menu}>
        <nav>
          <Link
            to="universities"
            className={style.link}
            onClick={handleUniClick}
            style={{
              backgroundColor: uniClicked ? "rgb(190, 116, 6)" : "beige",
            }}
          >
            Universities
          </Link>
          <Link
            to="schools"
            className={style.link}
            onClick={handleSchoolClick}
            style={{
              backgroundColor: schoolClicked ? "rgb(190, 116, 6)" : "beige",
            }}
          >
            Schools
          </Link>
          <Link
            to="lyceums"
            className={style.link}
            onClick={handleLyceumClick}
            style={{
              backgroundColor: lyceumClicked ? "rgb(190, 116, 6)" : "beige",
            }}
          >
            Lyceums
          </Link>
        </nav>
      </div>

      <div className={style.rightSide}>
        {/* filter box - component will be written */}

        <div className={style.filterBox}>
        <Routes>
            <Route path="/" element={<Filter/>} />
            <Route path="/universities" element={<Filter/>} />
            <Route path="/schools" element={<Filter/>} />
            <Route path="/lyceums" element={<Filter/>} />
          </Routes>
        </div>

        {/* content generated by selection from the menu - router set up, component selection */}

        <div className={style.generatedContent}>
          <Routes>
            <Route path="/universities" element={< GeneratedUnis/>} />
            <Route path="/schools" element={<GeneratedSchools/>} />
            <Route path="/lyceums" element={<GeneratedLyceums />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
