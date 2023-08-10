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

const CC_machine = () => {
  const [section, setSection] = useState("");
  const [casting_speed, setCasting_speed] = useState(0);
  const [heat_size, setHeat_size] = useState(0);
  const [negative_strip, setNegative_strip] = useState(0);
  const [oscl_stroke, setOscl_stroke] = useState(0);
  const [oscl_freq, setOscl_freq] = useState(0);
  const [nozzle_degree, setNozzle_degree] = useState(0);
  const [constant, setConstant] = useState(0);
  const [no_of_strands, setNo_of_strands] = useState(0);
  const [viscosity_powder, setViscosity_powder] = useState(0);
  const [casting_powder, setCasting_powder] = useState(0);
  const [machine_speed, setMachine_speed] = useState(0);
  const [matalurgical_length, setMatalurgical_length] = useState(0);
  const [secondary_water, setSecondary_water] = useState(0);
  const [secwater, setSecwater] = useState(0);
  const [nozzle_distant, setNozzle_distant] = useState(0);
  const [specific_value, setSpecific_value] = useState(0);
  const [specific_value2, setSpecific_value2] = useState(0);
  const [nst, setNst] = useState(0);
  const [col1, setcol1] = useState(0);
  const [col2, setcol2] = useState(0);

  

  const result = () => {
    let col1=0;
    let col2=0;

    if(section=="100x100"){
      col1=(78.5)
      col2=50
  }
  else if(section=="110x110"){
    col1=(94.99)
    col2=(55)
  }
  else if(section=="80x80"){
    col1=(50.24)
    col2=(40)
  }
  else if(section=="120x120"){
    col1=(113.04)
    col2=(60)
  }
  else if(section=="125x125"){
    col1=(122.66)
    col2=(62.5)
  }
  else if(section=="130x130"){
    col1=(132.67)
    col2=(65)
  }
  else if(section=="140x140"){
    col1=(153.86)
    col2=(70)
  }
  else if(section=="150x150"){
    col1=(176.63)
    col2=(75)
  }
  else if(section=="160x160"){
    col1=(200.96)
    col2=(80)
  }
  else if(section=="200x200"){
    col1=(314)
    col2=(100)
  }
  else if(section=="200x250"){
    col1=(392.5)
    col2=(100)
  }
  else if(section=="250x250"){
    col1=(490.63)
    col2=(125)
  }
  else if(section=="300x200"){
    col1=(471)
    col2=(150)
  }
  else if(section=="400x200"){
    col1=(628)
    col2=(200)
  }
  else if(section=="400x400"){
    col1=(1256)
    col2=(200)
  }


  setcol1(col1)
  setcol2(col2)

    const oscl_freq =
      0.5 * ((casting_speed * 1000 + casting_speed * 1000 * negative_strip) /
      oscl_stroke);
    const nst = ((60/(3.1416*oscl_freq))*Math.acos((100*casting_speed)/(3.1416*oscl_freq*oscl_stroke))).toFixed(3)
    
    const casting_powder = Math.round(1000*((1.7*nst)/(Math.sqrt((casting_speed*viscosity_powder)))))
    const machine_speed = 2*oscl_freq*oscl_stroke/1000;
    const matalurgical_length = (casting_speed * (col2/constant) * (col2/constant)).toFixed(2)
    const secondary_water = ((specific_value2*specific_value*col2*col2*casting_speed*4)/1000).toFixed(2)
    setOscl_freq(Math.round(oscl_freq))
    setCasting_powder(casting_powder)
    setMachine_speed(machine_speed)
    setMatalurgical_length(matalurgical_length)
    setSecondary_water(secondary_water)
  };

  return (
    <div className="body">
      <Header />
        <h2 className="head">CCM Complete Solution</h2>
      <div className="main-box">
        <Box component="form">
          <div className="box">
            <div className="content">
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
                    <MenuItem value={"100x100"}>100x100</MenuItem>
                    <MenuItem value={"110x110"}>110x110</MenuItem>
                    <MenuItem value={"80x80"}>80x80</MenuItem>
                    <MenuItem value={"120x120"}>120x120</MenuItem>
                    <MenuItem value={"125x125"}>125x125</MenuItem>
                    <MenuItem value={"130x130"}>130x130</MenuItem>
                    <MenuItem value={"140x140"}>140x140</MenuItem>
                    <MenuItem value={"150x150"}>150x150</MenuItem>
                    <MenuItem value={"160x160"}>160x160</MenuItem>
                    <MenuItem value={"200x200"}>200x200</MenuItem>
                    <MenuItem value={"200x250"}>200x250</MenuItem>
                    <MenuItem value={"250x250"}>250x250</MenuItem>
                    <MenuItem value={"300x200"}>300x200</MenuItem>
                    <MenuItem value={"400x200"}>400x200</MenuItem>
                    <MenuItem value={"400x400"}>400x400</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="row">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">
                    Casting Speed
                  </InputLabel>
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
                  <InputLabel id="demo-select-small-label">
                    Negative Strip
                  </InputLabel>
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
                  <InputLabel id="demo-select-small-label">
                    Oscl. Stroke
                  </InputLabel>
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
                  <InputLabel id="demo-select-small-label">
                    Nozzle Degree
                  </InputLabel>
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
                  <InputLabel id="demo-select-small-label">
                    Nos. of Strands
                  </InputLabel>
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
                  <InputLabel id="demo-select-small-label">
                    Viscosity Powder
                  </InputLabel>
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

              <div className="row">
                <TextField
                  required
                  className="textfield"
                  size="small"
                  id="outlined-number"
                  label="Specific Value"
                  variant="outlined"
                  type="number"
                  onChange={(e) => setSpecific_value(e.target.value)}
                />
              </div>
              <div className="row">
                <TextField
                  required
                  className="textfield"
                  size="small"
                  id="outlined-number"
                  label="Specific Value 2"
                  variant="outlined"
                  type="number"
                  onChange={(e) => setSpecific_value2(e.target.value)}
                />
              </div>

            </div>
            <div className="content">
              <div className="row">
                <p>Oscl. Freq. : {oscl_freq}</p>
              </div>
              <div className="row">
                <p>Casting Powder : {casting_powder}</p>
              </div>
              <div className="row">
                <p>Machine Speed : {machine_speed}</p>
              </div>
              <div className="row">
                <p>Matalurgical Length : {matalurgical_length}</p>
              </div>
              <div className="row">
                <p>Secondary Water : {secondary_water}</p>
              </div>
              <div className="row">
                <p>Sec. Water Pr. : {secwater}</p>
              </div>
              <div className="row">
                <p>Nozzle Distant : {nozzle_distant}</p>
              </div>
            </div>
          </div>
        </Box>
          </div>
        <Stack spacing={2} direction="row">
          <button
            onClick={() => {
              result();
            }}
            className="button"
          >
            Calculate
          </button>
        </Stack>
      <Footer />
    </div>
  );
};

export default CC_machine;
