import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const Ladlecalculator = () => {
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
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [input5, setInput5] = useState(0);
  const [input6, setInput6] = useState(0);
  const [output1, setOutput1] = useState(0);
  const [output2, setOutput2] = useState(0);
  const [output3, setOutput3] = useState(0);


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
  const temp = ((R * R + R * r + r * r) / 1000000).toFixed(3);
  
  const result2 = ()=>{
    const s13 = parseInt(input1) + parseInt(input5) + parseInt(input5);
    const s14 = parseInt(input2) + parseInt(input5) + parseInt(input5);
    const s16 = 0.5 * ((s13 - s14) / parseInt(input3));
    const output1 = (s16*2*input6)+s13;
    const output2 = s14-(s16*2*input4)
    const output3 = parseInt(input3)+parseInt(input4)+parseInt(input6)
    setOutput1(Math.round(output1))
    setOutput2(Math.round(output2))
    setOutput3(Math.round(output3))
  }

  return (
    <body>
      <Box component="form">
        <h1 className="head">
          Ladle Capacity & Ladle Fabrication Weight Calculator
        </h1>
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
      <p>Volumn of Ladle : {pieHby3 * temp} cu.M</p>
      <p>Capacity of Ladle : {pieHby3 * temp * density} MT</p>

      <Box component="form">
        <div className="box">
          <div className="content">
            <h2 className="head">After Lining</h2>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Input"
                variant="outlined"
                type="number"
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Input"
                variant="outlined"
                type="number"
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Input"
                variant="outlined"
                type="number"
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Input"
                variant="outlined"
                type="number"
                onChange={(e) => setInput4(e.target.value)}
              />
            </div>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Input"
                variant="outlined"
                type="number"
                onChange={(e) => setInput5(e.target.value)}
              />
            </div>
            <div className="row">
              <TextField
                required
                className="textfield"
                id="outlined-number"
                label="Input"
                variant="outlined"
                type="number"
                onChange={(e) => setInput6(e.target.value)}
              />
            </div>
            <p>{((3.1416/3000)*input3).toFixed(3)}</p>
            <p>{(input1/2)}</p>
            <p>{(input2/2)}</p>
          </div>
          <div className="content">
            <h2 className="head">Fab. Size</h2>
            <p>{output1}</p>
            <p>{output2}</p>
            <p>{output3}</p>
          </div>
        </div>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              result2();
            }}
          >
            Calculate
          </Button>
        </Stack>
        <div>
          <p>Capacity: {(output1*output2*density)} </p>
          <p>Volumn: {output1*output2}</p>
        </div>
      </Box>
    </body>
  );
};

export default Ladlecalculator;
