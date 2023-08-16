"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "./globals.css";
import Header from "../Header";
import Footer from "../f1";
import Navbar from "../navbar/page"

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
  const [casting_time, setCasting_time] = useState(0);
  const [throughput, setThroughput] = useState(0);
  const [primary_water, setPrimary_water] = useState(0);
  const [metal_density, setMetal_density] = useState(0);
  const [zone31, setzone31] = useState(0);
  const [zone32, setzone32] = useState(0);
  const [zone33, setzone33] = useState(0);
  const [zone34, setzone34] = useState(0);
  const [zone35, setzone35] = useState(0);
  const [zone36, setzone36] = useState(0);
  const [nozzle_model, setNozzle_model] = useState(0);
  const [nozzle_flow_zone1, setNozzle_flow_zone1] = useState(0);
  const [no_of_nozzle_req, setNo_of_nozzle_req] = useState(0);
  const [avail_nozzles, setAvail_nozzles] = useState(0);
  const [nozzle_max_pr, setNozzle_max_pr] = useState(0);
  const [nozzle_max_flow, setNozzle_max_flow] = useState(0);
  const [nozzle_set_pr, setNozzle_set_pr] = useState(0);
  const [flow, setFlow] = useState(0);
  const [flowcol22, setFlowcol22] = useState(0);
  const [flowcol23, setFlowcol23] = useState(0);
  const [flowcol24, setFlowcol24] = useState(0);
  const [flowcol26, setFlowcol26] = useState(0);
  const [flowcol27, setFlowcol27] = useState(0);
  const [prcol31, setprcol31] = useState(0);
  const [prcol32, setprcol32] = useState(0);
  const [prcol33, setprcol33] = useState(0);
  const [prcol34, setprcol34] = useState(0);
  const [prcol35, setprcol35] = useState(0);
  const [prcol36, setprcol36] = useState(0);
  const [prcol37, setprcol37] = useState(0);
  const [nozzle_dia, setNozzle_dia] = useState(0);
  const [nozzle_area, setNozzle_area] = useState(0);
  const [ferostatic_height, setferostatic_height] = useState(0);
  const [constant2, setConstant2] = useState(0);
  const [out_kgpermin, setout_kgpermin] = useState(0);

  const result = () => {
    let col1 = 0;
    let col2 = 0;

    let flow = 0;

    if (section == "100x100") {
      col1 = 78.5;
      col2 = 50;
    } else if (section == "110x110") {
      col1 = 94.99;
      col2 = 55;
    } else if (section == "80x80") {
      col1 = 50.24;
      col2 = 40;
    } else if (section == "120x120") {
      col1 = 113.04;
      col2 = 60;
    } else if (section == "125x125") {
      col1 = 122.66;
      col2 = 62.5;
    } else if (section == "130x130") {
      col1 = 132.67;
      col2 = 65;
    } else if (section == "140x140") {
      col1 = 153.86;
      col2 = 70;
    } else if (section == "150x150") {
      col1 = 176.63;
      col2 = 75;
    } else if (section == "160x160") {
      col1 = 200.96;
      col2 = 80;
    } else if (section == "200x200") {
      col1 = 314;
      col2 = 100;
    } else if (section == "200x250") {
      col1 = 392.5;
      col2 = 100;
    } else if (section == "250x250") {
      col1 = 490.63;
      col2 = 125;
    } else if (section == "300x200") {
      col1 = 471;
      col2 = 150;
    } else if (section == "400x200") {
      col1 = 628;
      col2 = 200;
    } else if (section == "400x400") {
      col1 = 1256;
      col2 = 200;
    }

    setcol1(col1);
    setcol2(col2);

    if (nozzle_model == "DB1565") {
      flow = 1.5;
    } else if (nozzle_model == "DB2065") {
      flow = 2;
    } else if (nozzle_model == "DB2465") {
      flow = 2.4;
    } else if (nozzle_model == "DB2565") {
      flow = 2.5;
    } else if (nozzle_model == "DB3065") {
      flow = 3;
    } else if (nozzle_model == "DB3565") {
      flow = 3.5;
    } else if (nozzle_model == "DB4065") {
      flow = 4;
    } else if (nozzle_model == "DB4565") {
      flow = 4.5;
    } else if (nozzle_model == "DB5065") {
      flow = 5;
    } else if (nozzle_model == "DB5565") {
      flow = 5.5;
    } else if (nozzle_model == "DB6065") {
      flow = 6;
    } else if (nozzle_model == "DB6565") {
      flow = 6.5;
    } else if (nozzle_model == "DB7065") {
      flow = 7;
    } else if (nozzle_model == "DB7565") {
      flow = 7.5;
    } else if (nozzle_model == "DB8065") {
      flow = 8;
    } else if (nozzle_model == "DB8565") {
      flow = 8.5;
    } else if (nozzle_model == "DB9065") {
      flow = 9;
    } else if (nozzle_model == "DB9565") {
      flow = 9.5;
    }

    setFlow(flow);

    const oscl_freq =
      0.5 *
      ((casting_speed * 1000 + casting_speed * 1000 * negative_strip) /
        oscl_stroke);
    const nst = (
      (60 / (3.1416 * oscl_freq)) *
      Math.acos((100 * casting_speed) / (3.1416 * oscl_freq * oscl_stroke))
    ).toFixed(3);

    const casting_powder = Math.round(
      1000 * ((1.7 * nst) / Math.sqrt(casting_speed * viscosity_powder))
    );
    const machine_speed = (2 * oscl_freq * oscl_stroke) / 1000;
    const matalurgical_length = (
      casting_speed *
      (col2 / constant) *
      (col2 / constant)
    ).toFixed(2);
    const secondary_water = (
      (specific_value2 * specific_value * col2 * col2 * casting_speed * 4) /
      1000
    ).toFixed(2);
    const age = 40;
    const Pr_set = 2.7;
    const maxflow = 120;
    const sec_water = (
      (((secondary_water * age) / 100) * Math.sqrt(Pr_set)) /
      maxflow
    ).toFixed(2);
    const nozzle_distant = Math.round(col2 / 0.63707);
    const throughput = col1 * casting_speed;
    const casting_time = (
      heat_size /
      ((throughput / 1000) * 60 * no_of_strands)
    ).toFixed(3);
    const primary_water = 10 * (col2 + col2) + 150;
    const maxflow2 = 160;
    const age2 = 55;
    const metal_density = (
      (((secondary_water * age2) / 100) * Math.sqrt(Pr_set)) /
      maxflow2
    ).toFixed(2);
    const age3 = 5;
    const maxflow3 = 16;
    const zone31 = -1 * (negative_strip * 100) * 1.0;
    const zone32 = (casting_time * 60).toFixed(2);
    const zone33 = ((throughput / 1000) * 60).toFixed(2);
    const zone34 = Math.round(10 * (2 * col2) - 150);
    const zone35 = (
      (((secondary_water * age3) / 100) * Math.sqrt(Pr_set)) /
      maxflow3
    ).toFixed(2);
    const zone36 = (
      (60 / (3.1416 * oscl_freq)) *
      Math.acos((100 * casting_speed) / (3.1416 * oscl_freq * oscl_stroke))
    ).toFixed(3);

    const avail = 24;
    const pr_max = 3.2;

    const nozzle_flow_zone1 = (secondary_water * age) / 100;
    const flow_lpm1 = 5;
    const no_of_nozzle_req = Math.round(
      (secondary_water * age) / 100 / flow_lpm1
    );

    const flowcol22 = (secondary_water * age2) / 100;
    const flow_lpm2 = 5;
    const flowcol23 = Math.ceil(flowcol22 / flow_lpm2);
    const nozzle_area = ((3.1416 / 4) * nozzle_dia * nozzle_dia).toFixed(2);

    const H27 = Math.sqrt((2 * constant2 * ferostatic_height) / 1000);
    const H28 = 0.97 * 0.06 * nozzle_area * nozzle_dia;
    setOscl_freq(Math.round(oscl_freq));
    setCasting_powder(casting_powder);
    setMachine_speed(machine_speed);
    setMatalurgical_length(matalurgical_length);
    setSecondary_water(secondary_water);
    setSecwater(sec_water);
    setNozzle_distant(nozzle_distant);
    setThroughput(throughput);
    setCasting_time(casting_time);
    setPrimary_water(primary_water);
    setMetal_density(metal_density);
    setzone31(zone31);
    setzone32(zone32);
    setzone33(zone33);
    setzone34(zone34);
    setzone35(zone35);
    setzone36(zone36);
    setNozzle_flow_zone1(nozzle_flow_zone1);
    setNo_of_nozzle_req(no_of_nozzle_req);
    setAvail_nozzles(avail);
    setNozzle_max_pr(pr_max);
    setNozzle_max_flow(maxflow);
    setNozzle_set_pr(Pr_set);
    setFlowcol22(flowcol22);
    setFlowcol23(flowcol23);
    setFlowcol24(32);
    setFlowcol26(nozzle_max_pr);
    setFlowcol27(maxflow2);
    const flow_lpm3 = 4;
    const avail3 = 4;
    setprcol31(2);
    setprcol32((secondary_water * age3) / 100);
    setprcol33(Math.ceil((secondary_water * age3) / 100 / flow_lpm3));
    setprcol34(avail3);
    setprcol36(maxflow3);
    setNozzle_area(nozzle_area);
    setout_kgpermin(Math.round(H27 * H28));
  };

  return (
    <div className="body">
      <Navbar moveIndex={0} />
      <h2 className="head">CCM Complete Solution</h2>
      <div className="main-box">
        <div className="border">
          <Box component="form">
            <div className="box">
              <div className="content">
                <div className="row">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Section
                    </InputLabel>
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
                    <InputLabel id="demo-select-small-label">
                      Constant
                    </InputLabel>
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
                <div className="row">
                  <p>Casting Time : {casting_time}</p>
                </div>
                <div className="row">
                  <p>Throughput : {throughput}</p>
                </div>
                <div className="row">
                  <p>Primary Water : {primary_water}</p>
                </div>
                <div className="row">
                  <p>Metal Density : {metal_density}</p>
                </div>
              </div>
              <div className="content">
                <div className="row">
                  <p>{zone31}%</p>
                </div>
                <div className="row">
                  <p>{zone32}</p>
                </div>
                <div className="row">
                  <p>{zone33}</p>
                </div>
                <div className="row">
                  <p>{zone34}</p>
                </div>
                <div className="row">
                  <p>{zone35}</p>
                </div>
                <div className="row">
                  <p>{zone36}</p>
                </div>
              </div>
            </div>
          </Box>
          <br />
          <Box component="form">
            <div className="box">
              <div className="content">
                <div className="row">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Nozzle Model
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={nozzle_model}
                      label="Nozzle Model"
                      onChange={(e) => setNozzle_model(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"DB1565"}>DB1565</MenuItem>
                      <MenuItem value={"DB2065"}>DB2065</MenuItem>
                      <MenuItem value={"DB2465"}>DB2465</MenuItem>
                      <MenuItem value={"DB2565"}>DB2565</MenuItem>
                      <MenuItem value={"DB3065"}>DB3065</MenuItem>
                      <MenuItem value={"DB3565"}>DB3565</MenuItem>
                      <MenuItem value={"DB4065"}>DB4065</MenuItem>
                      <MenuItem value={"DB4565"}>DB4565</MenuItem>
                      <MenuItem value={"DB5065"}>DB5065</MenuItem>
                      <MenuItem value={"DB5565"}>DB5565</MenuItem>
                      <MenuItem value={"DB6065"}>DB6065</MenuItem>
                      <MenuItem value={"DB6565"}>DB6565</MenuItem>
                      <MenuItem value={"DB7065"}>DB7065</MenuItem>
                      <MenuItem value={"DB7565"}>DB7565</MenuItem>
                      <MenuItem value={"DB8065"}>DB8065</MenuItem>
                      <MenuItem value={"DB8565"}>DB8565</MenuItem>
                      <MenuItem value={"DB9065"}>DB9065</MenuItem>
                      <MenuItem value={"DB9565"}>DB9565</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="row">
                  <p>Nozzle Flow Zone1: {nozzle_flow_zone1}</p>
                </div>
                <div className="row">
                  <p>Nos. of Nozzles Req.: {no_of_nozzle_req}</p>
                </div>
                <div className="row">
                  <p>Avail Nozzles Nos.: {avail_nozzles}</p>
                </div>
                <div className="row">
                  <p>Nozzle Max. Pr.: {nozzle_max_pr}</p>
                </div>
                <div className="row">
                  <p>Nozzle Max. Flow: {nozzle_max_flow}</p>
                </div>
                <div className="row">
                  <p>Nozzle Set Pr.: {nozzle_set_pr}</p>
                </div>
              </div>

              <div className="content">
                <div className="row">
                  <p>Flow(LpM) : {flow}</p>
                </div>
                <div className="row">
                  <p>{flowcol22}</p>
                </div>
                <div className="row">
                  <p>{flowcol23}</p>
                </div>
                <div className="row">
                  <p>{flowcol24}</p>
                </div>
                <div className="row">
                  <p>{nozzle_max_pr}</p>
                </div>
                <div className="row">
                  <p>{flowcol27}</p>
                </div>
                <div className="row">
                  <p>{nozzle_set_pr}</p>
                </div>
              </div>
              <div className="content">
                <div className="row">
                  <p>Pr. {prcol31}</p>
                </div>
                <div className="row">
                  <p>{prcol32}</p>
                </div>
                <div className="row">
                  <p>{prcol33}</p>
                </div>
                <div className="row">
                  <p>{prcol34}</p>
                </div>
                <div className="row">
                  <p>{nozzle_max_pr}</p>
                </div>
                <div className="row">
                  <p>{prcol36}</p>
                </div>
                <div className="row">
                  <p>{nozzle_set_pr}</p>
                </div>
              </div>
            </div>
          </Box>
          <br />
          <Box component="form">
            <div className="box">
              <div className="content2">
                <div className="row">
                  <p>{out_kgpermin}Kg/Min</p>
                </div>

                <div className="row">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Nozzle Dia(mm)
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={nozzle_dia}
                      label="Nozzle Model"
                      onChange={(e) => setNozzle_dia(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={12.5}>12.5</MenuItem>
                      <MenuItem value={13}>13</MenuItem>
                      <MenuItem value={13.5}>13.5</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={14.5}>14.5</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={15.5}>15.5</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="row">
                  <p>Nozzle Area: {nozzle_area}Sq.mm</p>
                </div>
                <div className="row">
                  <TextField
                    required
                    sx={{ m: 1, minWidth: 120 }}
                    className="textfield"
                    id="outlined-number"
                    label="Ferostatic Height"
                    size="small"
                    variant="outlined"
                    type="number"
                    onChange={(e) => setferostatic_height(e.target.value)}
                  />
                </div>
                <div className="row">
                  <TextField
                    required
                    sx={{ m: 1, minWidth: 120 }}
                    className="textfield"
                    id="outlined-number"
                    label="Constant"
                    size="small"
                    variant="outlined"
                    type="number"
                    onChange={(e) => setConstant2(e.target.value)}
                  />
                </div>
                <div className="row">
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
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CC_machine;
