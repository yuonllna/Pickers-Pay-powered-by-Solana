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

//tap
import PayTap from '../components/PayTap';

import cafeImage from '../assets/cafeImage.jpg';

const OrderList: NextPage = (props) => {
  return (
    <div>
        <Box
            sx={{
                background:'#E9E9E9',
                minHeight:'90.5vh',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
            }}>
            <Typography
                sx={{color:'black',
                    fontSize:20,
                    fontWeight:600,
                    marginBottom:2,
                    marginTop:2}}>
                    Order List
            </Typography>
            <Box
                sx={{
                    minHeight:220,
                    width:330,
                    bgcolor:'white',
                    display:'flex',
                    border:1,
                    borderColor:'black',
                    
                }}>
                <Image src={cafeImage} alt="err"></Image>
            </Box>
            <Box
                sx={{
                    minHeight:400,
                    width:330,
                    bgcolor:'white',
                    display:'flex',
                    borderLeft:1,
                    borderRight:1,
                    borderBottom:1,
                    borderColor:'black',
                    
                }}>

            </Box>
        </Box>

    </div>
  );
};

export default OrderList;