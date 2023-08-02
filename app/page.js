"use client";
import * as React from "react";
import Ladlecalculator from "./components/Ladlecalculator";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Calculate from "./components/Calculate";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function BasicTextFields() {

  return (
    <div >
      <Ladlecalculator/>
      <Calculate/>
    </div>
  );
}
