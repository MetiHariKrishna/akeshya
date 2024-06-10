import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ReusableCard from "./ReusableCard ";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import BoyOutlinedIcon from "@mui/icons-material/BoyOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import LyricsOutlinedIcon from "@mui/icons-material/LyricsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";
import styles from "@/styles/Features.module.css";

const Features = () => {
  const cards = [
    {
      icon: <WebAssetOutlinedIcon className={styles.WebAssetOutlinedIcon} />,
      title: "Web design",
    },
    {
      icon: <TerminalOutlinedIcon className={styles.TerminalOutlinedIcon} />,
      title: "Development",
    },
    {
      icon: <BoyOutlinedIcon className={styles.BoyOutlinedIcon} />,
      title: "Branding",
    },
    {
      icon: (
        <PlayCircleOutlinedIcon className={styles.PlayCircleOutlinedIcon} />
      ),
      title: "Media buying",
    },
    {
      icon: <SearchOutlinedIcon className={styles.SearchOutlinedIcon} />,
      title: "Search engine",
    },
    {
      icon: <EventNoteOutlinedIcon className={styles.EventNoteOutlinedIcon} />,
      title: "Brand strategy",
    },
    {
      icon: <FmdGoodOutlinedIcon className={styles.FmdGoodOutlinedIcon} />,
      title: "Local search marketing",
    },
    {
      icon: (
        <LeaderboardOutlinedIcon className={styles.LeaderboardOutlinedIcon} />
      ),
      title: "Lead Tracking & Management",
    },
    {
      icon: (
        <ContactPageOutlinedIcon className={styles.ContactPageOutlinedIcon} />
      ),
      title: "Contact management",
    },
    {
      icon: <LyricsOutlinedIcon className={styles.LyricsOutlinedIcon} />,
      title: "Media management",
    },
    {
      icon: <FeedOutlinedIcon className={styles.FeedOutlinedIcon} />,
      title: "Social scheduling",
    },
    {
      icon: (
        <PlayLessonOutlinedIcon className={styles.PlayLessonOutlinedIcon} />
      ),
      title: "Ad retargeting",
    },
  ];
  return (
    <>
      <Grid container className={styles.services}>
        <Grid container className={styles.aboutText}>
          <Grid item className={styles.about}>
            <HorizontalRuleIcon className={styles.aboutLine} />
            <Typography className={styles.aboutTypo}>
              OUR CORE FEATURES
            </Typography>
            <HorizontalRuleIcon className={styles.aboutLine} />
          </Grid>
        </Grid>
      </Grid>
      <Typography className={styles.servicesText}>
        Akeshya is a forward-thinking and intelligent design firm that is
        technically and creatively capable of transforming your brand into its
        best digital self. Our approach to design and development results in
        compelling, engaging branding and immersive digital experiences that
        provide a value for money.
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={styles.cards}
      >
        {cards?.map((card, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card variant="outlined" className={styles.cardBg}>
              <CardContent>
                <Grid className={styles.featureCard}>
                  <Typography>{card.icon}</Typography>
                  <Typography className={styles.title}>{card.title}</Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
