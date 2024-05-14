import { Button, Stack, Typography } from "@mui/material";
import { FooterStyles, homeSx } from "./shopStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
    const handleToTop=()=>{
        window.scroll(0,0)
    }
  return (
    <Stack
      direction={"row"}
      sx={FooterStyles.main}
      justifyContent={"space-between"}
      gap={1}
    >
      <Stack direction={"column"} gap={2} sx={FooterStyles.margins}>
        <Typography sx={homeSx.nav.title}>Geologists</Typography>
        <Stack direction={"row"} gap={1}>
          <InstagramIcon />
          <FacebookIcon />
          <Typography>pinkoy</Typography>
        </Stack>
        <Button
          variant="outlined"
          sx={FooterStyles.btn}
          onClick={handleToTop}
        >
          Back to top
        </Button>
      </Stack>

      <Stack direction={"column"} gap={1} sx={FooterStyles.margins}>
        <Typography color="grey">Solution</Typography>
        <Typography color="grey">Trail Product</Typography>
        <Typography color="grey">For teams</Typography>
        <Typography color="grey">Request Features</Typography>
      </Stack>

      <Stack direction={"column"} gap={1} sx={FooterStyles.margins}>
        <Typography color="grey">Contact us</Typography>
        <Typography color="grey">Blog</Typography>
        <Typography color="grey">Culture</Typography>
        <Typography color="grey">Job</Typography>
      </Stack>

      <Stack direction={"column"} gap={1} sx={FooterStyles.margins}>
        <Typography color="grey">Help Center</Typography>
        <Typography color="grey">Service Status</Typography>
        <Typography color="grey">Request a bug</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
