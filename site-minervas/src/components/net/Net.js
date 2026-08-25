import React, { useRef } from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import photo08032024 from "../../assets/insta-photo08-03-2024.jpg"
import minervajam from "../../assets/minervajam.jpg"
import eventominerva from "../../assets/eventominerva.jpg"
import Text from "./Text"

import "./Net.scss"

const Item = styled(Paper)(({ theme }) => ({
  height: "260px",
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  boxShadow: "none",
}));

function Net() {
  const ref = useRef(null);

  const redirectToLink = (link) => {
    window.open(link, '_blank')
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="net-content-background">
      <div className="net-content">
        <Text click={() => handleClick()}  />
        <div className="imagens-grid-net">
          <Grid  container spacing={5}>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={photo08032024} className="line1" alt="post-minervas1" onClick={() => redirectToLink('https://www.instagram.com/p/C4RBOEFpmXS/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={minervajam} className="line1" alt="post-minervas2" onClick={() => redirectToLink('https://www.instagram.com/p/DXNeko-ET4Y/') }/>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Item>
                <img src={eventominerva} className="line1" alt="post-minervas3" onClick={() => redirectToLink('https://www.instagram.com/p/Dbb7eJzkew-/') }/>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Net
