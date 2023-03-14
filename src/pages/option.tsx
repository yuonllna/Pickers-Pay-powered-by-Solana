import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

//icons
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Circle from '../assets/Circle.png';


const Option: NextPage = (props) => {
  return (
    <div style={{ height: "764px", background: "#E9E9E9"}}>
        {/* Menu */}
        <Box
            sx={{
                backgroundColor:'#E9E9E9',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                minHeight:55,
                borderBottom:1,
                borderColor:'black'
                }}>
            <Typography
                sx={{
                    color:'black',
                    fontSize:20,
                    fontWeight: 600
                }}>
                Option
            </Typography>
        </Box>
        
    </div>
  );
};

export default Option;