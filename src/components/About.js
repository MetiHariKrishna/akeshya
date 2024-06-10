import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import counts from "../Assets/counts-img.png";
import Image from "next/image";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import styles from "@/styles/About.module.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const About = () => {
  return (
    <Box className={styles.aboutContainer}>
      <Grid container className={styles.aboutText}>
        <Grid item className={styles.about}>
          <HorizontalRuleIcon className={styles.aboutLine} />
          <Typography className={styles.aboutTypo}>ABOUT US</Typography>
          <HorizontalRuleIcon className={styles.aboutLine} />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item sm={6} md={6} p={3}>
          <Typography className={styles.textColor}>
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </Typography>
          <Grid className={styles.aboutDiscription}>
            <DoneAllIcon className={styles.doneAllIcon} />
            <Typography className={styles.started}>
              We started with a simple idea: do what is best for the client.
            </Typography>
          </Grid>
          <Grid className={styles.aboutDiscription}>
            <DoneAllIcon className={styles.doneAllIcon} />
            <Typography className={styles.started}>
              Our methodical and individual approach to each project delivers
              the finest possible results for your media.
            </Typography>
          </Grid>
          <Grid className={styles.aboutDiscription}>
            <DoneAllIcon className={styles.doneAllIcon} />
            <Typography className={styles.started}>
              Our day-to-day work is to solve your problems utilising the most
              up-to-date, practical adaptive technology, and we have a lot of
              fun doing it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={6} md={6} p={3}>
          <Typography className={styles.textColor}>
            We&apos;re professional, but we&apos;re also friendly, and
            we&apos;ll always pay attention to your concerns. We expect to work
            with innovative people that have an open mind and are dedicated to
            making every idea a reality. We want to hear from you if you&apos;re
            interested in SEO, have Web Development ideas, or require a graphic
            designer who can match your goals.
          </Typography>
          <Button variant="outlined" className={styles.learnBtn}>
            Learn More
          </Button>
        </Grid>
      </Grid>

      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item sm={6} md={6} p={5}>
          <Image src={counts} alt="image" className={styles.image} />
        </Grid>
        <Grid item sm={6} md={6} className={styles.rating}>
          <Grid>
            <Grid className={styles.emoji}>
              <SentimentSatisfiedOutlinedIcon className={styles.emojiIcon} />
              <Grid className={styles.tesxtSpace}>
                <Typography className={styles.number}>3835039</Typography>
                <Typography className={styles.Organic}>
                  Organic Reach (Global)
                </Typography>
              </Grid>
            </Grid>
            <Grid className={styles.emoji}>
              <WatchLaterOutlinedIcon className={styles.emojiIcon} />
              <Grid className={styles.tesxtSpace}>
                <Typography className={styles.number}>14081</Typography>
                <Typography className={styles.Organic}>
                  Watch Hours (Asia)
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid>
            <Grid className={styles.emoji}>
              <DescriptionOutlinedIcon className={styles.emojiIcon} />
              <Grid className={styles.tesxtSpace}>
                <Typography className={styles.number}>85</Typography>
                <Typography className={styles.Organic}>Campaigns</Typography>
              </Grid>
            </Grid>
            <Grid className={styles.emoji}>
              <LanguageOutlinedIcon className={styles.emojiIcon} />
              <Grid className={styles.tesxtSpace}>
                <Typography className={styles.number}>17</Typography>
                <Typography className={styles.Organic}>
                  xcellent CTR % (Asia)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
