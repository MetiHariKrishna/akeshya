import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Button from "@mui/material/Button";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Grid container className={styles.aboutText}>
        <Grid item className={styles.about}>
          <HorizontalRuleIcon className={styles.aboutLine} />
          <Typography className={styles.aboutTypo}>CONTACT US</Typography>
          <HorizontalRuleIcon className={styles.aboutLine} />
        </Grid>
      </Grid>
      <Grid container className={styles.contactContainer}>
        <Grid item md={3} p={3}>
          <Typography className={styles.contactText}>Akeshya</Typography>
          <Typography className={styles.contactDescription}>
            Designers, developers & marketeers capable of delivering solutions
            according to your needs,
          </Typography>
        </Grid>
        <Grid item p={3} md={4}>
          <Grid className={styles.content}>
            <FmdGoodOutlinedIcon className={styles.FmdGoodOutlinedIcon} />
            <Typography className={styles.address}>
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </Typography>
          </Grid>
          <Grid className={styles.content}>
            <LocalPostOfficeOutlinedIcon
              className={styles.FmdGoodOutlinedIcon}
            />
            <Typography className={styles.address}>info@akeshya.com</Typography>
          </Grid>
          <Grid className={styles.content}>
            <PhoneOutlinedIcon className={styles.FmdGoodOutlinedIcon} />
            <Typography className={styles.address}>+91 94942 40922</Typography>
          </Grid>
        </Grid>
        <Grid item p={3} md={5}>
          <form>
            <TextField
              label="Your Name"
              name="Your Name"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Your Email"
              name="Your Email"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Subject"
              name="Subject"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="Enter your text here"
              sx={{ mb: 2 }}
            />
            <Grid className={styles.formContainer}>
              <Button variant="contained" className={styles.sendBtn}>
                Send Message
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
