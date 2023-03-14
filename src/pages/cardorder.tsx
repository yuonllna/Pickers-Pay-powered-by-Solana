import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

//modal
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";


//mui card
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

//icons
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import CafeImage from '../assets/CafeImage.jpg';
import { Directions } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const style = {
    marginTop: "524px",
    width: "390px",
    height: "320px",
    bgcolor: '#E9E9E9',
    boxShadow: 24,
    borderRadius: "10px 10px 0 0"
};
  
const CardOrder: NextPage = (props) => {

    const [latte, setLatte] = useState(0);
    const [cookie, setCookie] = useState(0);

    const [lattePrice, setLattePrice] = useState(0);
    const [cookiePrice, setCookiePrice] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);


    const latteInc = () => {
        setLatte(latte + 1);
        setLattePrice(lattePrice + 0.34);
    }
    const latteDec = () => {
        setLatte(latte - 1);
        setLattePrice(lattePrice - 0.34);
    }

    const cookieInc = () => {
        setCookie(cookie + 1);
        setCookiePrice(cookiePrice + 0.21);
    }
    const cookieDec = () => {
        setCookie(cookie - 1);
        setCookiePrice(cookiePrice - 0.21);
    }

    //modal
    const [cardOpen, setCardOpen] = useState(false);
    const handleCardOpen = () => setCardOpen(true);
    const handleCardClose = () => setCardOpen(false);

  return (
    <div style={{ height: "764px", background: "#E9E9E9"}}>
        
        <Box
            sx={{
                backgroundColor:'#E9E9E9',
                display:'flex',
                justifyContent:'flex-start',
                minHeight:70,
                borderColor:'black',
                flexDirection:'column',
                }}>
            <Box
                sx={{
                    backgroundColor:'#E9E9E9',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    minHeight:70,
                    borderColor:'black',
                    
                    }}>
                <Typography
                    sx={{
                        color:'black',
                        fontSize:20,
                        fontWeight: 600,
                        marginLeft:4,
                        float:'left'
                    }}>
                    Order List
                </Typography>

                
            </Box>
        
        </Box>
        
    
    {/* mui card */}
    <Box sx={{display: 'flex', justifyContent:'center'}}>
    <Card sx={{ maxWidth: 345,  borderColor:'black' }}>
      <Image src={CafeImage} alt="err"></Image>
      
      <CardContent>

        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:2}}>

        <Typography sx={{display:'flex', color:'black', fontSize:20, fontWeight:600, marginRight:2,}}>
          Sol Cafe
        </Typography>
        
        <Typography sx={{display:'flex', color:'#777777', fontSize:12, fontWeight:400, marginTop:0.5}}>
            Solana World Sola Road 8-13
        </Typography>

        </Box>
        
        {/* menu 1 */}
        <Box sx={{display:'flex', flexDirection:'row', border:1, borderColor:'black', borderRadius:2, width:300, height:95,
               marginBottom:1}}>
            <Box sx={{display:'flex', flexDirection:'column', marginLeft:2, marginTop:1.5}}>
                <Typography sx={{display:'flex', color:'black', fontSize:16, fontWeight:600, marginRight:2}}>
                    Sun Latte
                </Typography>
                
                <Typography sx={{display:'flex', color:'#777777', fontSize:12, fontWeight:400, marginTop:0.5}}>
                    ICED | Tall | To Go
                </Typography>
                
                <Typography sx={{display:'flex', color:'black', fontSize:12, fontWeight:400, marginTop:0.5, textDecoration:'underline'}}>
                    Change Option
                </Typography>      
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-end', marginTop:1.5, marginLeft:10,}}>
                {/* count */}
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                    marginBottom:0.8}}>
                    
                    <IconButton
                        onClick={latteDec}>
                        <RemoveCircleOutlineOutlinedIcon>

                        </RemoveCircleOutlineOutlinedIcon>
                    </IconButton>

                    <Typography>{latte}</Typography>

                    <IconButton
                        onClick={latteInc}>
                        <AddCircleOutlineOutlinedIcon>
                            
                        </AddCircleOutlineOutlinedIcon>
                    </IconButton>
                </Box>
                {/* price */}
                <Typography sx={{display:'flex', color:'#9945FF',fontSize:16, fontWeight:600, marginRight:1}}>{lattePrice} SOL</Typography>
            </Box>
        </Box>

        {/* menu 2 */}
        <Box sx={{display:'flex', flexDirection:'row', border:1, borderColor:'black', borderRadius:2, width:300, height:95,
               marginBottom:1,}}>
            <Box sx={{display:'flex', flexDirection:'column', marginLeft:2, marginTop:1.5}}>
                <Typography sx={{display:'flex', color:'black', fontSize:16, fontWeight:600, marginRight:2}}>
                    Moon Cookie
                </Typography>
                
                <Typography sx={{display:'flex', color:'#777777', fontSize:12, fontWeight:400, marginTop:0.5}}>
                    - | - | To Go
                </Typography>
                
                <Typography sx={{display:'flex', color:'black', fontSize:12, fontWeight:400, marginTop:0.5, textDecoration:'underline'}}>
                    Change Option
                </Typography>      
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-end', marginTop:1.5, marginLeft:7.8,}}>
                {/* count */}
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                    marginBottom:0.8}}>
                    
                    <IconButton
                        onClick={cookieDec}>
                        <RemoveCircleOutlineOutlinedIcon>

                        </RemoveCircleOutlineOutlinedIcon>
                    </IconButton>

                    <Typography>{cookie}</Typography>

                    <IconButton
                        onClick={cookieInc}>
                        <AddCircleOutlineOutlinedIcon>
                            
                        </AddCircleOutlineOutlinedIcon>
                    </IconButton>
                </Box>
                {/* price */}
                <Typography sx={{display:'flex', color:'#9945FF',fontSize:16, fontWeight:600, marginRight:1}}>{cookiePrice} SOL</Typography>
            </Box>
        </Box>

        {/* menu 3 */}
        <Box sx={{display:'flex', flexDirection:'row', border:1, borderColor:'black', borderRadius:2, width:300, height:95,
               marginBottom:1}}>
            <Box sx={{display:'flex', flexDirection:'column', marginLeft:2, marginTop:1.5}}>
                <Typography sx={{display:'flex', color:'black', fontSize:16, fontWeight:600, marginRight:2}}>
                    Star Brunch Set
                </Typography>
                
                <Typography sx={{display:'flex', color:'#777777', fontSize:12, fontWeight:400, marginTop:0.5}}>
                    - | - | To Go
                </Typography>
                
                <Typography sx={{display:'flex', color:'black', fontSize:12, fontWeight:400, marginTop:0.5, textDecoration:'underline'}}>
                    Change Option
                </Typography>      
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-end', marginTop:1.5, marginLeft:5.1,}}>
                {/* count */}
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
                    marginBottom:0.8}}>
                    
                    <IconButton
                        >
                        <RemoveCircleOutlineOutlinedIcon>

                        </RemoveCircleOutlineOutlinedIcon>
                    </IconButton>

                    <Typography>0</Typography>

                    <IconButton
                        >
                        <AddCircleOutlineOutlinedIcon>
                            
                        </AddCircleOutlineOutlinedIcon>
                    </IconButton>
                </Box>
                {/* price */}
                <Typography sx={{display:'flex', color:'#9945FF',fontSize:16, fontWeight:600, marginRight:1}}>0 SOL</Typography>
            </Box>
        </Box>

        {/* total */}
        <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Typography sx={{fontSize:20, fontWeight:600,padding:1}}>Total {lattePrice + cookiePrice} SOL</Typography>

            <Button variant="contained" sx={{ display: "flex", width: "90px", height: "40px",
                            borderRadius: "20px", background: "linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)" }}
                     onClick={handleCardOpen}>
                            
                            <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                                    APPLY
                            </Typography>
                        
            </Button>
        </Box>
      </CardContent> 
    </Card>
    </Box>

    {/* modal */}
    <Modal open={cardOpen} onClose={handleCardClose} >
            <Box sx={style}>
                <Stack direction="row">
                    <Box sx={{ float: "left", padding: "18px", marginLeft: "8px", fontWeight: "600", fontSize: "20px", color: "#000000"}}>
                        Statement Balance
                    </Box>
                    
                    <IconButton onClick={ () => setCardOpen(false) } sx={{ padding: "20px", marginLeft:13, color: "#000000", fontSize: "15px"}}>
                        <ClearIcon />
                    </IconButton>
                </Stack>
            
                <Typography sx={{ marginTop: "14px", textAlign:"center", color:'black', fontSize:16, fontWeight:400 }}>
                    The price is as belows.
                </Typography>

                <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center', maxWidth:365, minHeight:105, 
                    border:1, borderColor:'black', borderRadius:3, marginLeft: "12px", marginTop:"30px", marginBottom: "20px", textTransform:'unset',
                    justifyContent:'center' }}>
                
                
                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', }}>
                        
                        <Typography sx={{ color:'black', fontSize:16, fontWeight:600 }}>
                            Sol Cafe
                        </Typography>
                        
                        <Typography sx={{ color:'black', fontSize:20, fontWeight:600 }}>
                            {lattePrice + cookiePrice} SOL
                        </Typography>

                        <Typography sx={{ color:'#777777', fontSize:12, fontWeight:400 }}>
                            $ 15.37
                        </Typography>

                    </Box> 
                </Box>
                
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Link href={"/aftercardorder"}>
                        <Button variant="contained" sx={{ display: "flex", flexDirection:'column', width: "120px", height: "40px", 
                            borderRadius: "20px", background: "linear-gradient(90deg, #C99CFF 0%, #9945FF 51.04%, #440197 100%)" }}>
                            
                            <Typography sx={{ color:'#FFFFFF', fontSize:14, fontWeight:400 }}>
                                    Check out
                            </Typography>
                        </Button>
                    </Link>
                </Box>
            </Box>
            
        </Modal>
        
    </div>
  );
};

export default CardOrder;