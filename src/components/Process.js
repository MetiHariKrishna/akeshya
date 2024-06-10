import { Grid, Typography } from "@mui/material";
import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ReusableCard from "./ReusableCard ";
import styles from "@/styles/Process.module.css";

const Process = () => {
  const cards = [
    {
      title: "1. Planning",
      description:
        "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    },
    {
      title: "2. Design",
      description:
        "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation..",
    },
    {
      title: "3. Development",
      description:
        "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
      title: "4. Marketing",
      description:
        "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    },
  ];
  return (
    <>
      <Grid container className={styles.services}>
        <Grid container className={styles.aboutText}>
          <Grid item className={styles.about}>
            <HorizontalRuleIcon className={styles.aboutLine} />
            <Typography className={styles.aboutTypo}>OUR PROCESS</Typography>
            <HorizontalRuleIcon className={styles.aboutLine} />
          </Grid>
        </Grid>
      </Grid>
      <Typography className={styles.servicesText}>
        Over the years we’ve evolved a tested method for attaining achievement
        for each one of our clients.
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={styles.cards}
      >
        {cards?.map((card, index) => (
          <Grid item xs={2} sm={4} md={6} key={index}>
            <ReusableCard
              key={index}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Process;
