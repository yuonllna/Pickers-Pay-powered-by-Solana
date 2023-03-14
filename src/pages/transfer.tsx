import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

import { SendTransaction } from '../components/SendTransaction';


//icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import Circle from '../assets/Circle.png';

const Transfer: NextPage = (props) => {
    
  return (
    <div>
        <Link href="/transfer" legacyBehavior>  
                <a></a>
        </Link>
        {/* profile */}
        <Typography
            sx={{
                marginTop:10,
                display:'flex',
                justifyContent:'center',
                fontSize: 16,
                fontWeight:'600'
            }}>
            User Nickname
        </Typography>
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100vw'
            }}>
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:15,
                    minWidth:170,
                    minHeight:20,
                    backgroundColor:'#4A4A4A',
                    marginTop:1
                }}>
                <Typography
                    sx={{
                        fontSize:11,
                        fontWeight:400,
                        marginLeft:1,
                        marginRight:1

                    }}>
                    4cSkY5NxhTFPn...Bw8DCW3e9
                    <ContentCopyIcon sx={{marginLeft:0.5,fontSize:'small'}}></ContentCopyIcon>
                </Typography>
            </Box>
        </Box>
        {/* circle */}
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                marginTop:4,
            }}>
            
            <Image src={Circle} alt="err"></Image>
                <Box
                    sx={{
                        position:'absolute',
                        marginTop:6,
                        textTransform:'unset',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'
                    }}
                    >
                        <Typography
                            sx={{
                                color:'white',
                                fontSize:16,
                                fontWeight:400,
                            }}>Total Balance
                        </Typography>
                        <Typography
                            sx={{
                                color:'white',
                                fontSize:20,
                                fontWeight:600,
                                marginBottom:2
                            }}>2023 Sol
                        </Typography>
                        <SendTransaction/>
                </Box>
        </Box>
        {/* buttons */}
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                marginTop:5
            }}>
            <Button variant="contained"
                sx={{
                    fontSize:14,
                    fontWeight:400,
                    minWidth:'100vw'
                }}
                style={{
                    background: 'linear-gradient(90deg, #14F195 0%, #0EA767 51.04%, #005230 100%)'
                }}>Transfer</Button>
           
        </Box>
        {/* my history */}
        <Box
            sx={{
                display:'flex',
                marginTop:10,
                justifyContent:'center',
                minHeight:55,
                minWidth:360,
            }}>
            <Button
                variant="contained"
                style={{
                    display: 'flex',
                    width:'90vw',
                    backgroundColor:'#2B2B2B',
                    textTransform:'unset',
                    justifyContent: 'space-between',
                }}>
                <Box>
                <HomeIcon sx={{fontSize:'md', marginRight:3}}>
                </HomeIcon>
                Map
                </Box>
                <ArrowForwardIosIcon sx={{fontSize:'md'}}>
                </ArrowForwardIosIcon>
            </Button>
        </Box>
        <Box
            sx={{
                display:'flex',
                marginTop:1,
                justifyContent:'center',
                minHeight:55,
                minWidth:360,
            }}>
            {/* <Button
                variant="contained"
                style={{
                    display: 'flex',
                    width:'90vw',
                    backgroundColor:'#2B2B2B',
                    textTransform:'unset',
                    justifyContent: 'space-between',
                }}>
                <Box>
                <TouchAppIcon sx={{fontSize:'md', marginRight:3}}>
                </TouchAppIcon>
                One Touch Pay
                </Box>
                <ArrowForwardIosIcon sx={{fontSize:'md'}}>
                </ArrowForwardIosIcon>
            </Button> */}
        </Box>

        
    </div>
  );
};

export default Transfer;