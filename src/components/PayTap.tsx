import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';

import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { display } from '@mui/system';

import StampInfo from '../assets/StampInfo.png';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const style = {
    marginTop: "524px",
    width: "390px",
    height: "320px",
    bgcolor: '#E9E9E9',
    boxShadow: 24,
    borderRadius: "10px 10px 0 0"
};



function TabPanel(props: TabPanelProps) {
    //tab
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //modal-card
  const [cardOpen, setCardOpen] = useState(false);
  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);
 
  //modal-stamp
  const [stampOpen, setStampOpen] = useState(false);
  const handleStampOpen = () => setStampOpen(true);
  const handleStampClose = () => setStampOpen(false);

  //modal-stampUse
  const [stampUseOpen, setStampUseOpen] = useState(false);
  const handleStampUseOpen = () => setStampUseOpen(true);
  const handleStampUseClose = () => setStampUseOpen(false);


  return (
    <Box 
      sx={{ width: '100%', backgroundColor:'#E9E9E9', justifySelf:'center'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'black'}}>
        <Tabs value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          variant="fullWidth"
          textColor='inherit'
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#000",
            }
          }}
          >

          <Tab label="Coupon" {...a11yProps(0)}
            sx={{textTransform:'unset', fontSize: 20, fontWeight:600, p:2}}/>

          <Tab label="Stamp Card" {...a11yProps(1)}
            sx={{textTransform:'unset', fontSize: 20, fontWeight:600, p:2}} />

        </Tabs>
      </Box>
      
      {/* coupon */}
      <TabPanel value={value} index={0}>
      <Box sx={{ backgroundColor:'#E9E9E9', display:'flex', justifyContent:'flex-start', flexDirection:'column',
            alignItems:'center', minHeight:'84vh' }}>
        
        <Button onClick={handleCardOpen} sx={{ backgroundColor:'white', display:'flex', alignItems:'center', minWidth:365, minHeight:105, 
                border:1, borderColor:'black', borderRadius:3, textTransform:'unset', marginBottom:1 }}>
                
            <LocalCafeOutlinedIcon sx={{ color:'black', fontSize: 42, marginLeft: -8}}></LocalCafeOutlinedIcon>
                
            <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft: 2 }}>
                
                <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                    Sol Cafe
                </Typography>
                
                <p style={{ fontSize:"3px" }}></p>

                <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                    10% discount for first purchase
                </Typography>

            </Box> 

        </Button>
        
        {/* card modal */}
        <Modal open={cardOpen} onClose={handleCardClose} >
            <Box sx={style}>
                <Stack direction="row">
                    <Box sx={{ float: "left", padding: "18px", marginLeft: "8px", fontWeight: "600", fontSize: "20px", color: "#000000"}}>
                        Coupon
                    </Box>
                    
                    <IconButton onClick={ () => setCardOpen(false) } sx={{ padding: "20px", marginLeft: "210px", color: "#000000", fontSize: "15px"}}>
                        <ClearIcon />
                    </IconButton>
                </Stack>
            
                <Typography sx={{ marginTop: "14.6px", textAlign:"center", color:'black', fontSize:16, fontWeight:400 }}>
                    Really want to use this coupon?
                </Typography>

                <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center', maxWidth:365, minHeight:105, 
                    border:1, borderColor:'black', borderRadius:3, marginLeft: "12px", marginTop:"30px", marginBottom: "20px", textTransform:'unset' }}>
                
                    <LocalCafeOutlinedIcon sx={{ color:'black', fontSize: 42, marginLeft: 3, marginRight: 2}}></LocalCafeOutlinedIcon>
                
                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                        
                        <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                            Sol Cafe
                        </Typography>
                        
                        <p style={{ fontSize:"3px" }}></p>

                        <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                            10% discount for first purchase
                        </Typography>

                    </Box> 
                </Box>

                <Button variant="contained" sx={{ display: "flex", flexDirection:'column', width: "90px", height: "40px", 
                    borderRadius: "20px", marginLeft: "150px", background: "linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)" }}>
                    
                    <Link href={"/couponorder"}>
                    <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                            YES
                    </Typography>
                    </Link>
                
                </Button>

            </Box>
            
        </Modal>

        <Button sx={{ backgroundColor:'white', display:'flex', alignItems:'center', minWidth:365, minHeight:105, 
                border:1, borderColor:'black', borderRadius:3, marginBottom:1, textTransform:'unset' }}>
                
            <LocalCafeOutlinedIcon sx={{ color:'black', fontSize: 42, marginLeft: -1.5}}></LocalCafeOutlinedIcon>
                
            <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft: 2 }}>
                
                <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                    Sol Cafe
                </Typography>
                
                <p style={{ fontSize:"3px" }}></p>

                <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                    15% discount for a signature beverage
                </Typography>

            </Box> 

        </Button>

        <Button sx={{ backgroundColor:'white', display:'flex', alignItems:'center', minWidth:365, minHeight:105, 
                border:1, borderColor:'black', borderRadius:3, marginBottom:1, textTransform:'unset' }}>
                
            <ShoppingCartOutlinedIcon sx={{ color:'black', fontSize: 42, marginLeft: -4}}></ShoppingCartOutlinedIcon>
                
            <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft: 2 }}>
                
                <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                    Sol Store
                </Typography>
                
                <p style={{ fontSize:"3px" }}></p>

                <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                    10% discount for the first purchase
                </Typography>

            </Box> 

        </Button>


    </Box>
      </TabPanel>


    {/* stamp card */}
      <TabPanel value={value} index={1}>
        <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <Button onClick={handleStampOpen} sx={{ backgroundColor:'white', display:'flex', alignItems:'center', minWidth:365, minHeight:105, 
                    border:1, borderColor:'black', borderRadius:3, textTransform:'unset', marginBottom:1 }}>
                
                <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>

                    <LocalCafeOutlinedIcon sx={{ color:'black', fontSize: 42}}></LocalCafeOutlinedIcon>

                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft: 2 }}>
                        
                        <Box sx={{ display:'flex', flexDirection:'row'}}>
                            <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                                Sol Cafe
                            </Typography>
                            <Typography sx={{ color:'#9945FF', fontSize:14, fontWeight:600, marginLeft:2 }}>
                                [ 10 / 10 ]
                            </Typography>
                        </Box>

                        <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                            10% discount for first purchase
                        </Typography>

                    </Box> 

                    <ArrowForwardIosOutlinedIcon
                                sx={{ color:'black', marginLeft:5}}
                                ></ArrowForwardIosOutlinedIcon>

                </Box>
            </Button>

            {/* stampcard modal */}
            <Modal open={stampOpen} onClose={handleStampClose} >
                <Box sx={style}>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Box sx={{ float: "left", marginLeft:3,fontWeight: 600, fontSize: 20, color: "#000000"}}>
                            Stamp Card
                        </Box>
                        
                        <IconButton onClick={ () => setStampOpen(false) } sx={{ padding: "20px", marginLeft: 24, color: "#000000", fontSize: "15px"}}>
                            <ClearIcon />
                        </IconButton>
                    </Box>
                
                    <Typography sx={{ marginTop: "14.6px", textAlign:"center", color:'black', fontSize:16, fontWeight:400 }}>
                        Stamp this card OR Use this card?
                    </Typography>

                    <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center', maxWidth:365, minHeight:105, 
                        border:1, borderColor:'black', borderRadius:3, marginLeft: "12px", marginTop:"30px", marginBottom: "20px", textTransform:'unset' }}>

                        <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', marginLeft:3}}>

                        <LocalCafeOutlinedIcon sx={{ color:'black', fontSize: 42}}></LocalCafeOutlinedIcon>

                        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft: 2 }}>
                            
                            <Box sx={{ display:'flex', flexDirection:'row'}}>
                                <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                                    Sol Cafe
                                </Typography>
                                <Typography sx={{ color:'#9945FF', fontSize:14, fontWeight:600, marginLeft:2 }}>
                                    [ 10 / 10 ]
                                </Typography>
                            </Box>

                            <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                                10% discount for first purchase
                            </Typography>

                        </Box> 

                        <ArrowForwardIosOutlinedIcon
                                    sx={{ color:'black', marginLeft:5}}
                                    ></ArrowForwardIosOutlinedIcon>

                        </Box>

                    </Box>

                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

                    <Button variant="contained" sx={{ display: "flex", width: "90px", height: "40px", marginRight:2.5,
                        borderRadius: "20px", background: "linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)" }}>
                        
                        <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                                STAMP
                        </Typography>
                    
                    </Button>

                    <Button variant="contained" sx={{ display: "flex", flexDirection:'column', width: "90px", height: "40px", 
                        borderRadius: "20px", background: "linear-gradient(90deg, #14F195 0%, #0EA767 51.04%, #005230 100%)" }}
                        onClick={handleStampUseOpen}>
                        
                        <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                                USE
                        </Typography>
                    
                    </Button>

                    </Box>


                
                </Box>
                
            </Modal>

            
            <Button sx={{ backgroundColor:'white', display:'flex', alignItems:'center', minWidth:365, minHeight:105, 
                border:1, borderColor:'black', borderRadius:3, marginBottom:1, textTransform:'unset' }}>
                
                <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>

                    <ShoppingCartOutlinedIcon sx={{ color:'black', fontSize: 42}}></ShoppingCartOutlinedIcon>

                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft: 2 }}>
                        
                        <Box sx={{ display:'flex', flexDirection:'row'}}>
                            <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                                Sol Store
                            </Typography>
                            <Typography sx={{ color:'#9945FF', fontSize:14, fontWeight:600, marginLeft:2 }}>
                                [ 2 / 8 ]
                            </Typography>
                        </Box>

                        <Typography sx={{ color:'black', fontSize:14, fontWeight:400 }}>
                            8 stamps for 15% discount
                        </Typography>

                    </Box> 

                    <ArrowForwardIosOutlinedIcon
                                sx={{ color:'black', marginLeft:8}}
                                ></ArrowForwardIosOutlinedIcon>

                </Box>
        </Button>
        </Box>
      </TabPanel>

      {/* use stamp */}

      <Modal open={stampUseOpen} onClose={handleStampUseClose} >
                <Box sx={style}>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Box sx={{ float: "left", marginLeft:3,fontWeight: 600, fontSize: 20, color: "#000000"}}>
                            Stamp
                        </Box>
                        
                        <IconButton onClick={ () => setStampUseOpen(false) } sx={{ padding: "20px", marginLeft: 30.1, color: "#000000", fontSize: "15px"}}>
                            <ClearIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center', marginBottom:2,}}>
                        <Image src={StampInfo} alt="err"></Image>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', }}>

                    <Link href={"/cardorder"}>
                    <Button variant="contained" sx={{ display: "flex", width: "90px", height: "40px",
                        borderRadius: "20px", background: "linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)" }}
                        >
                        
                        <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                                APPLY
                        </Typography>
                    
                    </Button>
                    </Link>
                    </Box>


                
                </Box>
                
            </Modal>


    </Box>

  );
}