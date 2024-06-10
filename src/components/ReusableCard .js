import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import styles from "@/styles/ReusableCard.module.css";

const ReusableCard = ({ title, icon, description }) => {
  return (
    <Grid item className={styles.card}>
      <Card variant="outlined" sx={{ mb: 2 }} className={styles.cardBg}>
        <CardContent>
          <Typography className={styles.icons}>{icon}</Typography>
          <Typography className={styles.title}>{title}</Typography>
          <Typography className={styles.description}>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ReusableCard;
