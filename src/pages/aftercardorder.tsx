import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Fragment } from "react";

import HorizonLine from "components/HorizonLine";

import ModalBar from '../assets/ModalBar.png';

//mui card
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

//icons
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

import PaySuccess from '../assets/PaySuccess.png';
import PhantomIcon from '../assets/PhantomIcon.png';

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
  

const AfterCardOrder: NextPage = (props) => {

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div style={{ minHeight:"100%", background: "#E9E9E9"}}>
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{display:'flex',marginTop:3,flexDirection:'column',alignItems:'center'}}>
                <Image src={PaySuccess} alt="err"></Image>
                <Typography sx={{color:'black', fontSize:20, fontWeight:600, marginTop:2}}>You’ve done your payment!</Typography>
                <Typography sx={{color:'black', fontSize:12, fontWeight:400, marginBottom:3}}>Get your Stamp & Receipt NFT</Typography>

                <HorizonLine></HorizonLine>             
            </Box>
        </Box>

        <Box>
        <Typography sx={{color:'black', fontSize:20, fontWeight:600, marginTop:1, marginLeft:2, marginBottom:2,}}>Payment Info</Typography>
        </Box>
        
        {/* mui card */}
        <Box sx={{display: 'flex', justifyContent:'center', 
            marginLeft:2, marginRight:2, flexDirection:'column'}}>
        <Card sx={{ minWidth: '360px',  borderColor:'black' }}>
        
        <CardContent>

            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginBottom:2
                }}>

                <Typography sx={{display:'flex', color:'black', fontSize:20, fontWeight:600, }}>
                    Sol Cafe
                </Typography>

            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "2px 5px 2px 5px"}}>
                <Typography sx={{color:'black', fontSize:16, fontWeight:400}}>
                    • Sun Latte
                </Typography>
                <Typography sx={{color:'#777777', fontSize:12, fontWeight:400}}>
                    ICED | HOT | TO GO
                </Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "2px 5px 2px 5px"}}>
                <Typography sx={{color:'black', fontSize:16, fontWeight:400}}>
                    • Moon Cookie
                </Typography>
                <Typography sx={{color:'#777777', fontSize:12, fontWeight:400}}>
                    - | - | TO GO
                </Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "2px 5px 2px 5px"}}>
                <Typography sx={{color:'black', fontSize:16, fontWeight:400}}>
                    • Star Brunch Set
                </Typography>
                <Typography sx={{color:'#777777', fontSize:12, fontWeight:400}}>
                    - | - | TO GO
                </Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:1
                , padding:3}}>

                <Typography sx={{display:'flex', color:'black', fontSize:16, fontWeight:600}}>
                    Payment Amount
                </Typography>

                <Typography sx={{display:'flex', color:'#9945FF', fontSize:20, fontWeight:600, }}>
                    0.89 SOL
                </Typography>

                <Typography sx={{display:'flex', color:'#777777', fontSize:12, fontWeight:400, }}>
                    $ 15.37
                </Typography>

            </Box>

            <HorizonLine/>
            
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginBottom:2}}>

                <Typography sx={{display:'flex', color:'black', fontSize:20, fontWeight:600, }}>
                    About Transaction
                </Typography>

            </Box>

            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginBottom:3}}>
                {/* from */}
                <Box sx={{display:'flex', flexDirection:'column'}}>

                    <Typography sx={{fontSize:12, fontWeight:600}}>From</Typography>
                    
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Image src={PhantomIcon} alt="err" width={"20"} height={"20"}></Image>
                        <Box sx={{display:'flex', flexDirection:'column', marginLeft:1}}>
                            <Typography sx={{fontSize: 12, fontWeight:400, color:'black'}}>User Nickname</Typography>
                            <Typography sx={{fontSize: 10, fontWeight:400, color:'#777777'}}>4cSkY5NxhTF...8DCW3e9</Typography>
                        </Box>

                    </Box>

                </Box>
                
                {/* to */}
                <Box sx={{display:'flex', flexDirection:'column'}}>

                    <Typography sx={{fontSize:12, fontWeight:600}}>To</Typography>

                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Image src={PhantomIcon} alt="err" width={"20"} height={"20"}></Image>
                        <Box sx={{display:'flex', flexDirection:'column', marginLeft:1}}>
                            <Typography sx={{fontSize: 12, fontWeight:400, color:'black'}}>Sol Cafe Owner</Typography>
                            <Typography sx={{fontSize: 10, fontWeight:400, color:'#777777'}}>so1cafeth3b3st...ikykright</Typography>
                        </Box>

                    </Box>

                </Box>
            </Box>

            <HorizonLine></HorizonLine>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "4px 10px 4px 10px"}}>
                <Typography sx={{color:'black', fontSize:12, fontWeight:600}}>
                    Timestamp
                </Typography>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                    <Typography sx={{color:'black', fontSize:10, fontWeight:400}}>
                        Mar 15, 2023 at 20:08:13
                    </Typography>
                    <Typography sx={{color:'black', fontSize:10, fontWeight:400,}}>
                        Korean Standard Time
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "4px 10px 4px 10px"}}>
                <Typography sx={{color:'black', fontSize:12, fontWeight:600}}>
                    Transaction Fee
                </Typography>
                <Typography sx={{color:'black', fontSize:10, fontWeight:400}}>
                    0.00001 SOL
                </Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "4px 10px 4px 10px"}}>
                <Typography sx={{color:'black', fontSize:12, fontWeight:600}}>
                    Transaction Version
                </Typography>
                <Typography sx={{color:'black', fontSize:10, fontWeight:400}}>
                    0
                </Typography>
            </Box>
            
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "4px 10px 4px 10px"}}>
                <Typography sx={{color:'black', fontSize:12, fontWeight:600}}>
                    Allocated Data Size
                </Typography>
                <Typography sx={{color:'black', fontSize:10, fontWeight:400}}>
                    28 byte(s)
                </Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                padding: "4px 10px 4px 10px"}}>
                <Typography sx={{color:'black', fontSize:12, fontWeight:600}}>
                    Results
                </Typography>
                <Typography sx={{color:'#9945FF', fontSize:10, fontWeight:600}}>
                    SUCCESS
                </Typography>
            </Box>
            
        </CardContent> 
        </Card>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', marginTop:3, flexDirection:'column'
                ,alignItems:'center'}}>
            <Button variant="contained" sx={{ display: "flex", width: "140px", height: "40px",
                                    marginBottom:2,
                                    borderRadius: "20px", background: "linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)" }}
                            >
                                    
                    <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                        GET A STAMP
                    </Typography>
                                
            </Button>

            <Button variant="contained" sx={{ display: "flex", width: "140px", height: "40px",
                                    marginBottom:3,
                                    borderRadius: "20px", background: 'linear-gradient(90deg, #14F195 0%, #0EA767 51.04%, #005230 100%)'  }}
                    onClick={handleOpen}        >
                                    
                    <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                        GET A RECEIPT
                    </Typography>
                                
            </Button>
        </Box>

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
                            Receipt NFT is issued successfully!
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent:'center',
                        flexDirection:'row',
                        alignItems:'center',
                        mt:2
                        }}>
                        <Button 
                            variant="contained"
                            sx={{
                                borderRadius:15,
                            }}
                            style={{
                                background: 'linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)'
                            }}>
                                <Typography
                                    sx={{fontSize:14, fontWeight:400}}>Go to wallet
                                </Typography>
                            </Button>
                    </Box>
            </Box>
        </Modal>


        </div>
  );
};

export default AfterCardOrder;