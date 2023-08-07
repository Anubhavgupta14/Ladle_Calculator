"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./globals.css";
import Header from "../Header";
import Footer from "../Footer";

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
  const [outputlining1, setOutputlining1] = useState(0);
  const [outputlining2, setOutputlining2] = useState(0);
  const [outputlining3, setOutputlining3] = useState(0);
  const [outputlining4, setOutputlining4] = useState(0);

  const result = () => {
    event.preventDefault();
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

  const result2 = () => {
    event.preventDefault();
    const s13 = parseInt(input1) + parseInt(input5) + parseInt(input5);
    const s14 = parseInt(input2) + parseInt(input5) + parseInt(input5);
    const s16 = 0.5 * ((s13 - s14) / parseInt(input3));
    const output1 = s16 * 2 * input6 + s13;
    const output2 = s14 - s16 * 2 * input4;
    const output3 = parseInt(input3) + parseInt(input4) + parseInt(input6);
    setOutput1(Math.round(output1));
    setOutput2(Math.round(output2));
    setOutput3(Math.round(output3));
    setOutputlining1(((3.1416 / 3000) * input3).toFixed(3));
    setOutputlining2(input1 / 2);
    setOutputlining3(Math.round(input2 / 2));
    const temp2 =
      (outputlining2 * outputlining2 +
        outputlining2 * outputlining3 +
        outputlining3 * outputlining3) /
      1000000;
  };

  const [section, setSection] = useState("");
  const [casting_speed, setCasting_speed] = useState("");
  const [heat_size, setHeat_size] = useState("");
  const [negative_strip, setNegative_strip] = useState("");
  const [oscl_stroke, setOscl_stroke] = useState("");
  const [nozzle_degree, setNozzle_degree] = useState("");
  const [constant, setConstant] = useState("");
  const [no_of_strands, setNo_of_strands] = useState("");
  const [viscosity_powder, setViscosity_powder] = useState("");


  return (
    <div className="body">
      <Header />
      <div className="main-box">
        <Box component="form">
          <div className="box">
            <div className="content">
              <h2 className="head">CCM Complete Solution</h2>
              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Section</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={section}
                    label="Section"
                    onChange={(e) => setSection(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>100x100</MenuItem>
                    <MenuItem value={20}>110x110</MenuItem>
                    <MenuItem value={20}>80x80</MenuItem>
                    <MenuItem value={20}>120x120</MenuItem>
                    <MenuItem value={20}>125x125</MenuItem>
                    <MenuItem value={20}>130x130</MenuItem>
                    <MenuItem value={20}>140x140</MenuItem>
                    <MenuItem value={20}>150x150</MenuItem>
                    <MenuItem value={20}>160x160</MenuItem>
                    <MenuItem value={30}>200x200</MenuItem>
                    <MenuItem value={30}>200x250</MenuItem>
                    <MenuItem value={30}>250x250</MenuItem>
                    <MenuItem value={30}>300x200</MenuItem>
                    <MenuItem value={30}>400x200</MenuItem>
                    <MenuItem value={30}>400x400</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Casting Speed</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={casting_speed}
                    label="Casting Speed"
                    onChange={(e) => setCasting_speed(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0.5}>0.5</MenuItem>
                    <MenuItem value={0.6}>0.6</MenuItem>
                    <MenuItem value={0.7}>0.7</MenuItem>
                    <MenuItem value={0.8}>0.8</MenuItem>
                    <MenuItem value={0.9}>0.9</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={1.1}>1.1</MenuItem>
                    <MenuItem value={1.2}>1.2</MenuItem>
                    <MenuItem value={1.3}>1.3</MenuItem>
                    <MenuItem value={1.4}>1.4</MenuItem>
                    <MenuItem value={1.5}>1.5</MenuItem>
                    <MenuItem value={1.6}>1.6</MenuItem>
                    <MenuItem value={1.7}>1.7</MenuItem>
                    <MenuItem value={1.8}>1.8</MenuItem>
                    <MenuItem value={1.9}>1.9</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={2.1}>2.1</MenuItem>
                    <MenuItem value={2.2}>2.2</MenuItem>
                    <MenuItem value={2.3}>2.3</MenuItem>
                    <MenuItem value={2.4}>2.4</MenuItem>
                    <MenuItem value={2.5}>2.5</MenuItem>
                    <MenuItem value={2.6}>2.6</MenuItem>
                    <MenuItem value={2.7}>2.7</MenuItem>
                    <MenuItem value={2.8}>2.8</MenuItem>
                    <MenuItem value={2.8}>2.8</MenuItem>
                    <MenuItem value={2.9}>2.9</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3.2}>3.2</MenuItem>
                    <MenuItem value={3.6}>3.6</MenuItem>
                    <MenuItem value={3.8}>3.8</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="row">
                <TextField
                  required
                  sx={{ m: 1, minWidth: 120 }}
                  className="textfield"
                  id="outlined-number"
                  label="Heat Size"
                  size="small"
                  variant="outlined"
                  type="number"
                  onChange={(e) => setHeat_size(e.target.value)}
                />
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Oscl. Stroke</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={oscl_stroke}
                    label="Oscl. Stroke"
                    onChange={(e) => setOscl_stroke(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Negative Strip</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={negative_strip}
                    label="Negative Strip"
                    onChange={(e) => setNegative_strip(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0.26}>0.26</MenuItem>
                    <MenuItem value={0.27}>0.27</MenuItem>
                    <MenuItem value={0.28}>0.28</MenuItem>
                    <MenuItem value={0.29}>0.29</MenuItem>
                    <MenuItem value={0.3}>0.3</MenuItem>
                    <MenuItem value={0.31}>0.31</MenuItem>
                    <MenuItem value={0.32}>0.32</MenuItem>
                    <MenuItem value={0.33}>0.33</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Nozzle Degree</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={oscl_stroke}
                    label="Oscl. Stroke"
                    onChange={(e) => setOscl_stroke(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Nozzle Degree</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={nozzle_degree}
                    label="Nozzle Degree"
                    onChange={(e) => setNozzle_degree(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={65}>65</MenuItem>
                    <MenuItem value={80}>80</MenuItem>
                    <MenuItem value={110}>110</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Oscl. Stroke</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={oscl_stroke}
                    label="Oscl. Stroke"
                    onChange={(e) => setOscl_stroke(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Constant</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={constant}
                    label="Constant"
                    onChange={(e) => setConstant(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Nos. of Strands</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={no_of_strands}
                    label="Nos. of Strands"
                    onChange={(e) => setNo_of_strands(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Viscosity Powder</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={viscosity_powder}
                    label="Viscosity Powder"
                    onChange={(e) => setViscosity_powder(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0.94}>0.94</MenuItem>
                    <MenuItem value={0.27}>0.27</MenuItem>
                    <MenuItem value={0.1}>0.1</MenuItem>
                    <MenuItem value={0.15}>0.15</MenuItem>
                    <MenuItem value={0.24}>0.24</MenuItem>
                    <MenuItem value={1.3}>1.3</MenuItem>
                    <MenuItem value={0.99}>0.99</MenuItem>
                  </Select>
                </FormControl>
              </div>

              

              {/* <div className="row">
                <TextField
                  required
                  className="textfield"
                  id="outlined-number"
                  label="Viscosity Powder"
                  variant="outlined"
                  type="number"
                  onChange={(e) => setDensity(e.target.value)}
                />
              </div> */}
            </div>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Ladlecalculator;
