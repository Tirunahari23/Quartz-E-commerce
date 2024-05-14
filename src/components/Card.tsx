import { Box, ListItemText, Stack, Typography } from '@mui/material'
import  { useState } from 'react'
import { cardSx } from './shopStyles';
interface IProps{
    url:string;
    url2:string;
    price:number;
    title:string;
}
const Card = (props:IProps) => {
    const [quick,setQuick]=useState(false)
    
  return (
    <Stack direction={"column"} gap={1} sx={cardSx.main}>
      <Box
        sx={cardSx.imgCon}
        onMouseOver={() => setQuick(true)}
        onMouseLeave={() => setQuick(false)}
      >
        <Box
          component={"img"}
          sx={cardSx.img}
          src={`${quick ? props.url2 : props.url}`}
        />
        <Typography sx={quick ? cardSx.quick : cardSx.quickHide}>
          Quick View
        </Typography>
      </Box>
      <ListItemText
        primary={`${props.title} 水晶擴香精`}
        secondary={`HK$${props.price}`}
        sx={cardSx.text}
      />
    </Stack>
  );
}

export default Card
