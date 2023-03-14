import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import { useNavigate, useRouteError } from 'react-router-dom';
import NavElement from "components/nav-element";


//icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';

//component
import Option from './option';
import Coupon from './coupon';
import Stampcard from './stampcard';
import Receipt from './receipt';

import Circle from '../assets/Circle.png';
import { useRouter } from "next/router";



const Text = ['Total Balance','Total Coupon','Total Card','Total Receipt']
const Content = ['2023 Sol','3 Coupon','2 Stamp Card','2 Receipt']
const List = ['Option', 'Coupon List', 'Stamp Card List', 'Receipt List']
const AddressList = ['/option','/coupon','/stampcard','/receipt']


const Consumer: NextPage = (props) => {
    const [buttonText, setButtonText] = useState(Text[0]);
    const [buttonContent, setButtonContent] = useState(Content[0]);
    const [buttonList, setButtonList] = useState(List[0]); 
    const [navigateList, setNavigateList] = useState(AddressList[0]);
    
    const router = useRouter();
    
    const routeToPage = () => {
        router.push(navigateList);
    }
    
    const handleClick = () => {
        setButtonText((prevState) => {
            switch(prevState){
                case Text[0]:
                    return Text[1]
                case Text[1]:
                    return Text[2]
                case Text[2]:
                    return Text[3]
                case Text[3]:
                    return Text[0]
            }
        })
        setButtonContent((prevState) => {
            switch(prevState){
                case Content[0]:
                    return Content[1]
                case Content[1]:
                    return Content[2]
                case Content[2]:
                    return Content[3]
                case Content[3]:
                    return Content[0]
            }
        })
        setButtonList((prevState) => {
            switch(prevState){
                case List[0]:
                    return List[1]
                case List[1]:
                    return List[2]
                case List[2]:
                    return List[3]
                case List[3]:
                    return List[0]
            }
        })
        setNavigateList((prevState) => {
            switch(prevState){
                case AddressList[0]:
                    return AddressList[1]
                case AddressList[1]:
                    return AddressList[2]
                case AddressList[2]:
                    return AddressList[3]
                case AddressList[3]:
                    return AddressList[0]
            }
        })
    };
  return (
    <div>
        <Link href="/consumer" legacyBehavior>  
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
                <Button
                    onClick={handleClick}
                    sx={{
                        position:'absolute',
                        marginTop:8,
                        textTransform:'unset',
                        display:'flex',
                        flexDirection:'column',
                    }}
                    >
                        <Typography
                            sx={{
                                color:'white',
                                fontSize:16,
                                fontWeight:400,
                            }}>{buttonText}
                        </Typography>
                        <Typography
                            sx={{
                                color:'white',
                                fontSize:20,
                                fontWeight:600,
                            }}>{buttonContent}
                        </Typography>
                </Button>
        </Box>
        {/* buttons */}
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                marginTop:5
            }}>
            <Link href="/pay">
            <Button variant="contained"
                sx={{
                    borderRadius:20,
                    fontSize:14,
                    fontWeight:400,
                    minWidth:100,
                    marginRight:2,
                }}
                style={{
                    background: 'linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)'
                }}>Pay</Button>
            </Link>
            <Link href="/transfer">
            <Button variant="contained"
                sx={{
                    borderRadius:20,
                    fontSize:14,
                    fontWeight:400,
                    minWidth:100 
                }}
                style={{
                    background: 'linear-gradient(90deg, #14F195 0%, #0EA767 51.04%, #005230 100%)'                 
                }}>Transfer</Button>
            </Link>
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
                My History
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
            <Button
                variant="contained"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width:'90vw',
                    backgroundColor:'#2B2B2B',
                    textTransform:'unset',
                }}
                onClick={routeToPage}    
            >
                <Box>
                <MenuIcon sx={{fontSize:'md', marginRight:3}}>
                </MenuIcon>
                {buttonList}
                </Box>
                <ArrowForwardIosIcon sx={{fontSize:'md'}}>
                </ArrowForwardIosIcon>
            </Button>
        </Box>
        
    </div>
  );
};

export default Consumer;