import { Divider, ListItemText, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const homeStyles = {
  listContainer: {
    width: { xs: "100%", sm: "100%", md: "50%" },
    Box: {
      height: "60px",
      overflow: "hidden",
      transition: "height 0.5s ease-out",
      borderBottom: "1px solid grey",
      header: {
        boxSizing: "border-box",
        width: "100%",
        minHeight: "62px",
        paddingX: "2.5%",
        bgcolor: "white",
        "&:hover": {
          bgcolor: "#c2c2c2",
        },
      },
      list: {
        paddingLeft: "5%",
        height: "60px",
        transition: "1.5s ease",
      },
    },
  },
  arrow: {
    transition: "0.6s ease",
    transform: "rotate(180deg)",
  },
  arrow2: {
    transition: "0.5s ease",
    transform: "rotate(360deg)",
  },
};
const DropDown = () => {
    const [item,setItem]=useState({
      name: "Conclusion 1",
      description: [
        { name: "Helloo", time: "video - 17:30" },
        { name: "Hi", time: "video - 17:30" },
      ],
      state: false,
    })
  

    const handleAccordian = () => {
     setItem({...item,state:!item.state})
      
    };
  return (
    <div>
      <Stack
        direction={"column"}
        sx={
          item.state
            ? {
                transition: "height 0.5s ease-in",
                height: `${62 * (item.description.length )}px`,
              }
            : homeStyles.listContainer.Box
        }
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            ...homeStyles.listContainer.Box.header,

            bgcolor: `${item.state && "#c2c2c2"}`,
          }}
          justifyContent={"space-between"}
          onClick={() => handleAccordian()}
        >
          <Stack direction={"row"} gap={2}>
            <Typography>0</Typography>
            <Typography>{item.name}</Typography>
          </Stack>
          <KeyboardArrowDownIcon
            sx={item.state ? homeStyles.arrow : homeStyles.arrow2}
          />
        </Stack>

        {item.description.map((video, index) => (
          <Stack
            key={video.name + index}
            direction={"row"}
            sx={{
              ...homeStyles.listContainer.Box.list,
              opacity: `${item.state ? "1" : "0"}`,
            }}
            alignItems={"center"}
          >
            <ListItemText primary={`1 ${video.name}`} secondary={video.time} />
          </Stack>
        ))}

        <Divider />
      </Stack>

      

      
    </div>
  );
}

export default DropDown
