"use client";
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
  const [freeboardleveldiameter, setFreeboardleveldiameter] = useState(0);
  const [bottomliningleveldiameter, setBottomliningleveldiameter] = useState(0);
  const [inbetweenheight, setInbetweenheight] = useState(0);
  const [density, setDensity] = useState(0);

  const result = () => {
    const inbetweenheight = height - bottomlining - freeboard;
    setInbetweenheight(inbetweenheight);
    const pieHby3 = (3.1416 / 3000) * inbetweenheight;
    // console.log(pieHby3);
    setPieHby3(pieHby3.toFixed(3));

    const I14 = (0.5 * (topdiameter - bottomdiameter)) / inbetweenheight;
    const freeboardleveldiameter =
      topdiameter - 2 * sidelining - I14 * 2 * freeboard;
    setFreeboardleveldiameter(Math.round(freeboardleveldiameter));
    // console.log(freeboardleveldiameter)

    const bottomliningleveldiameter =
      I14 * 2 * bottomlining + (bottomdiameter - 2 * sidelining);
    setBottomliningleveldiameter(Math.round(bottomliningleveldiameter));
  };
  const r = Math.floor(bottomliningleveldiameter / 2);
  const R = Math.floor(freeboardleveldiameter / 2);
  const temp = ((R * R + R * r + r * r) / 1000000).toFixed(3)

  return (
    <body>
      <Box component="form">
        <h1 className="head">Ladle Capacity & Ladle Fabrication Weight Calculator</h1>
        <div className="box">
          <div className="content">
            <h2 className="head">Fabricated Dimensions</h2>
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
            <p>&prod;H/3: {pieHby3}</p>
            <p>R: {R}mm</p>
            <p>r: {r}mm</p>
            <p>R^2+Rr+r^2: {temp}mm</p>
          </div>

          <div className="content">
            <h2 className="head">After Lining</h2>
            <p>Free Board Level Diameter : {freeboardleveldiameter}</p>
            <p>Bottom Lining Level Diameter : {bottomliningleveldiameter}</p>
            <p>In Between Heigh : {inbetweenheight}</p>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Density"
                variant="outlined"
                type="number"
                onChange={(e) => setDensity(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              result();
            }}
          >
            Calculate
          </Button>
        </Stack>
      </Box>

      <div className="outcome"></div>
      <p>Volumn of Ladle : {pieHby3*temp} cu.M</p>
      <p>Capacity of Ladle : {pieHby3*temp*density} MT</p>
    </body>
  );
}
