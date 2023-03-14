import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

import NavElement from "components/nav-element";

import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

//icons
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

//tap
import PayTap from '../components/PayTap';


const style = {
    marginTop: "524px",
    width: "390px",
    height: "320px",
    bgcolor: '#E9E9E9',
    boxShadow: 24,
    borderRadius: "10px 10px 0 0"
};

const AfterPay: NextPage = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

return (
    <div style={{ height: "844px", background: "#E9E9E9"}}>
    <PayTap></PayTap>
    </div>
  );
};

export default AfterPay;