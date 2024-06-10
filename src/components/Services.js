import React from "react";
import { Grid, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ReusableCard from "../components/ReusableCard ";
import PublicIcon from "@mui/icons-material/Public";
import SpeedTwoToneIcon from "@mui/icons-material/SpeedTwoTone";
import DescriptionIcon from "@mui/icons-material/Description";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "@/styles/Services.module.css";
const Services = () => {
  const cards = [
    {
      icon: <LanguageIcon className={styles.servicesIcons} />,
      title: "Design",
      description:
        "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    },
    {
      icon: <DescriptionIcon className={styles.servicesIcons} />,
      title: "Development",
      description:
        "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    },
    {
      icon: <PublicIcon className={styles.servicesIcons} />,
      title: "Marketing",
      description:
        "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    },
    {
      icon: <SpeedTwoToneIcon className={styles.servicesIcons} />,
      title: "Support",
      description:
        "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
    },
  ];

  return (
    <Grid className={styles.mainContainer}>
      <Grid container className={styles.services}>
        <Grid container className={styles.aboutText}>
          <Grid item className={styles.about}>
            <HorizontalRuleIcon className={styles.aboutLine} />
            <Typography className={styles.aboutTypo}>SERVICES</Typography>
            <HorizontalRuleIcon className={styles.aboutLine} />
          </Grid>
        </Grid>
      </Grid>
      <Typography className={styles.servicesText}>
        Akeshya will serve as your consultant and development partner to help
        you turn your idea into a reality.
      </Typography>
      <Grid item md={3} sm={6} xs={12} spacing={2} className={styles.cards}>
        {cards?.map((card, index) => (
          <ReusableCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services;
