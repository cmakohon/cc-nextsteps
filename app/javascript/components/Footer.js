import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid container item xs={12} justifyContent={"center"}>
          <Divider sx={{ width: '260px', mb: 1, mr: 0, backgroundColor: "secondary.main" }} />
        </Grid>
        <Grid container item xs={12} justifyContent={"center"} sx={{ mb: 2 }}>
          <IconButton
            href="http://instagram.com/center_city"
            target="_blank"
            sx={{ mr: 1 }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="http://facebook.com/centercitychurch"
            target="_blank"
            sx={{ mr: 1 }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.youtube.com/channel/UCUFzIHPwgkgXU8r4XdfVE1g"
            target="_blank"
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent={"space-around"}
          sx={{ mb: 4 }}
        >
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="body1"
                align="center"
                sx={{ mb: 2 }}
                gutterBottom
              >
                <strong>Location</strong>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                2225 Freedom Drive
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Charlotte, NC
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Suite 4
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: { xs: 2, sm: 0 } }}>
            <Box>
              <Typography
                variant="body1"
                align="center"
                sx={{ mb: 2 }}
                gutterBottom
              >
                <strong>Contact</strong>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                <a
                  style={{ color: "white" }}
                  href="mailto:hello@centercity.church"
                >
                  hello@centercity.church
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
