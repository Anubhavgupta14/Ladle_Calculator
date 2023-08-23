"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./globals.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../navbar/page";


const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
    <Navbar/>
    <div className="contact_body">
      <h2 className="head">Contact Us</h2>
      <div className="details">
        <div className="contact_data">
          <span className="detail_head">Street:</span> 39/42, Modi Street, Fort
        </div>
        <div className="contact_data">
          <span className="detail_head">City:</span> Mumbai
        </div>
        <div className="contact_data">
          <span className="detail_head">State/province/area:</span> Maharastra
        </div>
        <div className="contact_data">
          <span className="detail_head">Country calling code:</span> +91
        </div>
        <div className="contact_data">
          <span className="detail_head">Country:</span> India
        </div>
      </div>

      <div className="form">
        <div className="row">
          <TextField
            sx={{ m: 1, minWidth: isMobile ? 700 : 135 }}
            className="textfield"
            id="outlined-number"
            label="Name"
            variant="outlined"
            type="string"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            sx={{ m: 1, minWidth: isMobile ? 700 : 135 }}
            className="textfield"
            id="outlined-number"
            label="Email"
            variant="outlined"
            type="string"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
            sx={{ m: 1, minWidth: isMobile ? 1420 : 390 }}
            className="textfield"
            id="outlined-number"
            label="Phone No."
            variant="outlined"
            type="string"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
            sx={{ m: 1, minWidth: isMobile ? 1420 : 390 }}
            id="outlined-multiline-static"
            label="Comment"
            className="textfield"
            multiline
            rows={4}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="row">
            <button className="btn">
                Send
            </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
