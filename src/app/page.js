"use client";
import { useEffect,useState } from 'react';
import * as React from "react";
import Ladlecalculator from "./components/Ladle/page";
// import Box from "@mui/material/Box";
import Header from "./components/h1";
// import Calculate from "./components/Calculate";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { useState } from "react";
import Footer from "./components/f1";
import CC from "./components/CC_machine/page"
import Home from "./components/Home/page"
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from './components/Loader/page';

export default function BasicTextFields() {
  let loaderbool;

  useEffect(() => {
    AOS.init({});
    loaderbool = localStorage.getItem("loader");
    // alert(loaderbool)
    localStorage.setItem("loader","false")
    // console.log(loaderbool);

  }, [])

  return (
    <div>
      <Home/>
    </div>
  );
}
