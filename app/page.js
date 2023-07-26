"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "./components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function BasicTextFields() {

  const [topdiameter, setTopdiameter] = useState(null);
  const [bottomdiameter, setBottomdiameter] = useState(null);
  const [height, setHeight] = useState(null);
  const [bottomlining, setBottomlining] = useState(null);
  const [sidelining, setSidelining] = useState(null);
  const [freeboard, setFreeboard] = useState(null);
  const [pieHby3, setPieHby3] = useState(null);

  const result = ()=>{
    const inbetweenheight = height-bottomlining-freeboard
    const pieHby3 = (3.1416/3000)*inbetweenheight
    console.log(pieHby3)
    setPieHby3(pieHby3.toFixed(3))
  }

  return (
    <Box
      component="form"
    >
      <Header />
      <div className="content">
        <div className="row">
          <TextField
            required
            className="textfield"
            id="outlined-number"
            label="Top Diameter"
            variant="outlined"
            type="number"
            onChange={(e) => setTopdiameter(e.target.value)}
          />
          <TextField
          required
          className="textfield"
            id="outlined-number"
            label="Bottom Diameter"
            variant="outlined"
            type="number"
            onChange={(e) => setBottomdiameter(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
          required
          className="textfield"
            id="outlined-number"
            label="Height"
            variant="outlined"
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          />
          <TextField
          required
          className="textfield"
            id="outlined-number"
            label="Bottom Lining"
            variant="outlined"
            type="number"
            onChange={(e) => setBottomlining(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
          required
          className="textfield"
            id="outlined-number"
            label="Side Lining"
            variant="outlined"
            type="number"
            onChange={(e) => setSidelining(e.target.value)}
          />
          <TextField
          required
          className="textfield"
            id="outlined-number"
            label="Free Board"
            variant="outlined"
            type="number"
            onChange={(e) => setFreeboard(e.target.value)}
          />
        </div>
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" onClick={()=>{result()}}>
          Calculate
        </Button>
      </Stack>
      <div style={{ fontSize: "20px" }}>${pieHby3}</div>
    </Box>
  );
}
