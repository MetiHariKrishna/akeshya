import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <Grid container item md={12} spacing={2} className={styles.FooterContainer}>
      <Grid item md={6}>
        <Typography className={styles.FooterText}>
          © Copyright <strong>Akeshya</strong> . All Rights Reserved
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        sx={{ display: "flex", justifyContent: "center", color: "#14279b" }}
      >
        <Typography pr={5}>Terms and conditions</Typography>
        <Typography pr={5}>Refund policy</Typography>
        <Typography>Privacy policy</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
