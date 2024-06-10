import React from "react";
import hero_img from "../Assets/hero_img.png";
import client1 from "../Assets/client-1.png";
import client2 from "../Assets/client-2.png";
import client3 from "../Assets/client-3.png";
import client4 from "../Assets/client-4.png";
import client5 from "../Assets/client-5.png";
import client6 from "../Assets/client-6.png";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { Button, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Grid container pt={15} pb={1} pl={13}>
        <Grid item md={6} pr={10}>
          <Typography className={styles.growText}>
            Grow your business with Akeshya
          </Typography>
          <Typography className={styles.team}>
            We are team of talented website designers, developers &amp; digital
            marketeers
          </Typography>
          <Typography>
            <Button variant="outlined" className={styles.getBtn}>
              Get Started
            </Button>
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Image
            src={hero_img}
            alt="image"
            sx={{
              with: "100%",
              height: "auto",
              animation:
                "up-down 2s ease-in-out infinite alternate-reverse both",
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={styles.images}>
        <Grid container className={styles.imagesGrid}>
          <Image src={client1} alt="image" width={100} height={100} />
          <Image src={client2} alt="image" width={100} height={100} />
          <Grid pt={2}>
            <Image src={client3} alt="image" width={120} height={70} />
          </Grid>
          <Image src={client4} alt="image" width={100} height={100} />
          <Grid pt={2}>
            <Image src={client5} alt="image" width={120} height={50} />
          </Grid>
          <Image src={client6} alt="image" width={100} height={100} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
