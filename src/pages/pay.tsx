import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";

//icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//image
import Circle from '../assets/Circle.png';
import QRImage from '../assets/QRImage.png';
import ModalBar from '../assets/ModalBar.png';

import Status from '../assets/Status.png';


//modal
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height:'140px',
    bgcolor: 'white',
    borderRadius:2,
  };

const Pay: NextPage = (props) => {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link href="/pay" legacyBehavior>  
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
                        sx={{
                            position:'absolute',
                            marginTop:3.5,
                            textTransform:'unset',
                            display:'flex',
                            flexDirection:'column',
                        }}
                        onClick={handleOpen}
                        >
                            <Image src={QRImage} alt="err"
                                style={{
                                    maxWidth:120,

                                }}/>
                    </Button>
            </Box>

            {/* button */}
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
                        minWidth:'100vw',
                    }}
                    
                    style={{
                        background: 'linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)'
                    }}>Pay</Button>

<Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Image src={ModalBar} alt="err"></Image>
                    <Box sx={{
                        display: 'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        alignItems:'center',
                        mt:3
                    }}>
                        <Typography
                            color={"black"}
                            sx={{
                                display:'flex',
                                fontSize:14,
                                fontWeight:400
                                }}>
                            You have a discount chance.
                        </Typography>
                        <Typography
                            color={"black"}
                            sx={{
                                display:'flex',
                                fontSize:14,
                                fontWeight:400
                                }}>
                            Wanna get discount?
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent:'center',
                        flexDirection:'row',
                        alignItems:'center',
                        mt:2
                        }}>
                        
                        <Link href={"/afterpay"}>
                            <Button 
                                variant="contained"
                                sx={{
                                    borderRadius:15,
                                }}
                                style={{
                                    background: 'linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)'
                                }}>
                                    <Typography
                                        sx={{fontSize:14, fontWeight:400}}>sure</Typography>
                            </Button>
                        </Link>
                        <Button
                            sx={{
                                borderRadius:15,
                                textDecoration:'underline',
                            }}
                            style={{
                                color:'black'
                            }}> <Typography
                                sx={{fontSize:14, fontWeight:400, color:'black'}}>
                                Maybe Next Time</Typography></Button>
                    </Box>
            </Box>
        </Modal>
            
            </Box>

            {/* map */}
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
                    <ArrowForwardIosIcon sx={{fontSize:'md', marginLeft:22}}>
                    </ArrowForwardIosIcon>
                </Button>
            </Box>
            
        </div>
  );
};

export default Pay;