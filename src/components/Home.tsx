import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MapItems from "./MapItems";
import { homeSx } from "./shopStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./Footer";
interface IState {
  obj: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }[];
}
const Home = () => {
  const [sideBar,setSideBar] = useState([
    { name: "Category", expanded: false },
    { name: "Price", expanded: false },
    { name: "Crystal", expanded: false },
    { name: "Essential Oil", expanded: false },
    { name: "Packaging", expanded: false },
    { name: "Size", expanded: false },
  ])
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [age, setAge] = React.useState("");
  const [list, setList] = useState<IState["obj"]>([]);
  const [loader, setLoader] = useState(true);
   const handleExpansion = (index:number) => {
    let arr=[...sideBar];
    arr[index].expanded=!arr[index].expanded;

     setSideBar([...arr])
   };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);

    switch (event.target.value) {
      case "Newest": {
        getData();
        break;
      }
      case "priceLow": {
        setList(
          [...list].sort(function (one, two) {
            return one.price - two.price;
          })
        );
        break;
      }
      case "priceHigh": {
        setList(
          [...list].sort(function (one, two) {
            return two.price - one.price;
          }),
        );
        break;
      }
      case "a-z": {
        setList(
          [...list].sort(function (one, two) {
            return one.title.localeCompare(two.title);
          }),
        );
        break;
      }
      case "z-a": {
        setList(
          [...list].sort(function (one, two) {
            return two.title.localeCompare(one.title);
          }),
        );
        break;
      }
       default: {
        getData();
        break;
      }
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const getData = async () => {
    
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if(data){
        setList(data.products);
        setLoader(false);
      }
    else{
      setLoader(true);
    }
   
    
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return (
      <Box sx={homeSx.loader}>
        <Box
          component={"img"}
          src="https://i.gifer.com/ZKZg.gif"
          width={"10%"}
        />
      </Box>
    );
  }
  return (
    <Box sx={homeSx.main}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={homeSx.nav.main}
      >
        <Stack direction={"row"} gap={2} sx={homeSx.nav.con1}>
          <Typography sx={homeSx.nav.con1.text}>Home</Typography>
          <Typography sx={homeSx.nav.con1.default}>Shop</Typography>
          <Typography sx={homeSx.nav.con1.text}>Blog</Typography>
          <Typography sx={homeSx.nav.con1.text}>Contact Us</Typography>
        </Stack>
        <Box sx={homeSx.nav.menu}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {["Home", "Shop", "Blog", "Contact Us"].map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography sx={homeSx.nav.title}>Geologists</Typography>
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          gap={2}
          alignItems={"center"}
        >
          <Button sx={homeSx.nav.login}>Log in</Button>
          <Typography sx={homeSx.nav.title}>Cart</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={2} width={{ xs: "90%", sm: "80%" }}>
        <Stack width={{ xs: "35%", sm: "17%" }} direction={"column"} gap={2}>
          <Typography variant="h5">Filter by</Typography>
          <Divider />
          {sideBar.map((item,index) => (
            <Accordion
              onChange={() => handleExpansion(index)}
              slotProps={{ transition: { timeout: 400 } }}
              sx={homeSx.accodion}
              key={item.name}
              disableGutters
            >
              <AccordionSummary
                expandIcon={
                  (item.expanded) ? (
                    <RemoveIcon />
                    ) : (
                      <AddIcon />
                  )
                }
              >
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.name === "Price" ? (
                  <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  />
                ) : (
                  <Typography>Lorem ipsum dolor sit amet.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
          <Divider />
        </Stack>
        <Stack width={{ xs: "65%", sm: "83%" }} gap={2}>
          <Stack width={"100%"} direction={"row"} justifyContent={"flex-end"}>
            <FormControl sx={homeSx.select}>
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">Sort by</MenuItem>
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"priceLow"}>Price(Low-high)</MenuItem>
                <MenuItem value={"priceHigh"}>Price(high-Low)</MenuItem>
                <MenuItem value={"a-z"}>Name(A-Z)</MenuItem>
                <MenuItem value={"z-a"}>Name(Z-A)</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <MapItems list={list} />
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Home;
