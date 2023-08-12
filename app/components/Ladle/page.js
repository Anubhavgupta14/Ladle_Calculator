"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "./globals.css";
import Header from "../Header";
import Footer from "../Footer";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

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
  const [thickness1, setThickness1] = useState(0);
  const [thickness2, setThickness2] = useState(0);
  const [thickness3, setThickness3] = useState(0);
  const [thickness4, setThickness4] = useState(0);
  const [thickness5, setThickness5] = useState(0);
  const [thickness6, setThickness6] = useState(0);
  const [thickness7, setThickness7] = useState(0);
  const [thickness8, setThickness8] = useState(0);
  const [thickness9, setThickness9] = useState(0);
  const [thickness10, setThickness10] = useState(0);
  const [thickness11, setThickness11] = useState(0);
  const [thickness12, setThickness12] = useState(0);
  const [thickness13, setThickness13] = useState(0);
  const [thickness14, setThickness14] = useState(0);
  const [thickness15, setThickness15] = useState(0);
  const [length1, setLength1] = useState(0);
  const [length2, setLength2] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [volumn1, setVolumn1] = useState(0);
  const [volumn2, setVolumn2] = useState(0);
  const [weight1, setweight1] = useState(0);
  const [weight2, setweight2] = useState(0);


  const top_dia_mean = parseInt(topdiameter)+parseInt(thickness1)
  const degree_tan = (parseInt(topdiameter)-parseInt(bottomdiameter))/(2*parseInt(height))
  const cos_A = Math.cos(Math.PI/180*(Math.atan(degree_tan)*(Math.PI/180)))
  const R2 = ((top_dia_mean/2)/degree_tan)/cos_A
  const develop_angle = (top_dia_mean*3.1416)*360/(3.1416*R2*4)
  const dev_sin = Math.sin(Math.PI/180*develop_angle)

  const slant_height = height/cos_A
  const r2 = R2-slant_height
  const dev_bottom = r2*dev_sin*2
  const F959 = Math.sqrt((r2*r2)-((dev_bottom/2)*(dev_bottom/2)))

  const j31 = 7.864
  
  
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
      
      
      
      
      const length1 = Math.round(R2*dev_sin*2)
      const width1 = parseInt(slant_height)+((parseInt(r2)-parseInt(F959)))
      const volumn1 = (thickness1*length1*width1/1000000).toFixed(2)
      setLength1(length1);
      setWidth1(width1);
      setVolumn1(volumn1);
      setweight1(j31*volumn1);
    };
    
    return (
    <div className="body">
      <Header />
      <div className="main-box">
        <Box component="form">
          <div className="box">
            <div className="content">
              <h2 className="head">Fabricated Dimensions</h2>
              <div className="row">
                <TextField
                  required
                  className="textfield"
                  id="outlined-number"
                  label="Top ID"
                  variant="outlined"
                  type="number"
                  onChange={(e) => setTopdiameter(e.target.value)}
                />
              </div>
              <div className="row">
                <TextField
                  required
                  className="textfield"
                  id="outlined-number"
                  label="Bottom ID"
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
              </div>
              <div className="row">
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
              </div>
              <div className="row">
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

            <div className="content">
              <h2 className="head">After Lining</h2>
              <p>Free Board Level Diameter : {freeboardleveldiameter}</p>
              <p>Bottom Lining Level Diameter : {bottomliningleveldiameter}</p>
              <p>In Between Heigh : {inbetweenheight}</p>

              <div className="outcome">
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

                <p>Volumn of Ladle : {pieHby3 * temp} cu.M</p>
                <p>Capacity of Ladle : {pieHby3 * temp * density} MT</p>
              </div>
            </div>
          </div>
        </Box>
        <br />
        <br />
        <br />

        <Box component="form">
          <div className="box2">
            <div className="content2">
              <h2 className="head">After Lining</h2>
              <div className="row">
                <TextField
                  required
                  className="textfield"
                  id="outlined-number"
                  label="Top ID"
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
                  label="Bottom ID"
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
                  label="Height"
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
                  label="Bottom Lining"
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
                  label="Side Lining"
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
                  label="Free Board"
                  variant="outlined"
                  type="number"
                  onChange={(e) => setInput6(e.target.value)}
                />
              </div>
            </div>
            <div className="content2">
              <h2 className="head">Fab. Size</h2>
              <p className="textcentre">Top ID: {output1}</p>
              <p className="textcentre">Bottom ID: {output2}</p>
              <p className="textcentre">Height: {output3}</p>
              <div className="outcome">
                <Stack spacing={2} direction="row">
                  <button
                    onClick={() => {
                      result2();
                    }}
                    className="button"
                  >
                    Calculate
                  </button>
                </Stack>
                <p>
                  Capacity:{" "}
                  {(
                    outputlining1 *
                    ((outputlining2 * outputlining2 +
                      outputlining2 * outputlining3 +
                      outputlining3 * outputlining3) /
                      1000000) *
                    density
                  ).toFixed(2)}{" "}
                  MT
                </p>
                <p>
                  Volumn:{" "}
                  {(
                    outputlining1 *
                    ((outputlining2 * outputlining2 +
                      outputlining2 * outputlining3 +
                      outputlining3 * outputlining3) /
                      1000000)
                  ).toFixed(2)}{" "}
                  cu.M
                </p>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <h2 className="head">Fabrication</h2>
      <div className="main-table">
        <div className="content3">
          <div className="row3">
              <p>Particulars</p>
          </div>
          <div className="row3">
              <p>Shell Plate</p>
          </div>
          <div className="row3">
              <p>Bottom plate</p>
          </div>
          <div className="row3">
              <p>Top Rim Plate</p>
          </div>
          <div className="row3">
              <p>Trunion Box Vert.</p>
          </div>
          <div className="row3">
              <p>Trunion Box Hori.</p>
          </div>
          <div className="row3">
              <p>Rest Box Vert.</p>
          </div>
          <div className="row3">
              <p>Rest Box Hori.</p>
          </div>
          <div className="row3">
              <p>Trunion Pin</p>
          </div>
          <div className="row3">
              <p>Retaining RCS</p>
          </div>
          <div className="row3">
              <p>Legs</p>
          </div>
          <div className="row3">
              <p>Stiffners</p>
          </div>
          <div className="row3">
              <p>Tilting Hook</p>
          </div>
          <div className="row3">
              <p>Bottom Disc End</p>
          </div>
          <div className="row3">
              <p>Legs Bottom</p>
          </div>
          <div className="row3">
              <p>Trunion Side</p>
          </div>
        </div>
        <div className="content3">
          <div className="row3">
              <p>Thick/Size</p>
          </div>

          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                      Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness1}
                      label="Nozzle Model"
                      onChange={(e) => setThickness1(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness2}
                      label="Nozzle Model"
                      onChange={(e) => setThickness2(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness3}
                      label="Nozzle Model"
                      onChange={(e) => setThickness3(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness4}
                      label="Nozzle Model"
                      onChange={(e) => setThickness4(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness5}
                      label="Nozzle Model"
                      onChange={(e) => setThickness5(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness6}
                      label="Nozzle Model"
                      onChange={(e) => setThickness6(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness7}
                      label="Nozzle Model"
                      onChange={(e) => setThickness7(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness8}
                      label="Nozzle Model"
                      onChange={(e) => setThickness8(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness9}
                      label="Nozzle Model"
                      onChange={(e) => setThickness9(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness10}
                      label="Nozzle Model"
                      onChange={(e) => setThickness10(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness11}
                      label="Nozzle Model"
                      onChange={(e) => setThickness11(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness12}
                      label="Nozzle Model"
                      onChange={(e) => setThickness12(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness13}
                      label="Nozzle Model"
                      onChange={(e) => setThickness13(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness14}
                      label="Nozzle Model"
                      onChange={(e) => setThickness14(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
          <div className="row3">
          <FormControl sx={{ m: -1, minWidth: 100 }} size="small" className="FormControl">
                    <InputLabel id="demo-select-small-label">
                    Thick/size
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={thickness15}
                      label="Nozzle Model"
                      onChange={(e) => setThickness15(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={32}>32</MenuItem>
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={60}>60</MenuItem>
                    </Select>
                  </FormControl>
          </div>
        </div>
        <div className="content3">
          <div className="row3">
              <p>Weight in Kgs</p>
          </div>
          <div className="row3">
              <p>{weight1}</p>
          </div>
          <div className="row3">
              <p>Particulars</p>
          </div>
        </div>
        <div className="content3">
          <div className="row3">
              <p>Length</p>
          </div>
          <div className="row3">
              <p>{length1}</p>
          </div>
          <div className="row3">
              <p>Particulars</p>
          </div>
        </div>
        <div className="content3">
          <div className="row3">
              <p>Width</p>
          </div>
          <div className="row3">
              <p>{width1}</p>
          </div>
          <div className="row3">
              <p>Particulars</p>
          </div>
        </div>
        <div className="content3">
          <div className="row3">
              <p>Volumn</p>
          </div>
          <div className="row3">
              <p>{volumn1}</p>
          </div>
          <div className="row3">
              <p>Particulars</p>
          </div>
        </div>
        <div className="content3">
          <div className="row3">
              <p>Remarks</p>
          </div>
          <div className="row3">
              <p>1</p>
          </div>
          <div className="row3">
              <p>Particulars</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ladlecalculator;
