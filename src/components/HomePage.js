import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import site_in_progress from '../images/klg6ayh7q1xvbgn.jpg'

export default function HomePage() {



  return (
    <Grid container>

      <div className="Home_page">
      <img src={site_in_progress} alt='site_in_progress'/>
        {/* <div className='link'>
          <Grid item md={12}>
            <div>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/RomC4st'>
                <FontAwesomeIcon value='github' icon={faGithub} />
              </a>
              <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/romain-castillon/'>
                <FontAwesomeIcon value='linkedin' icon={faLinkedin} />
              </a>
            </div>
          </Grid>
          <Grid item sm={12}  >
            <iframe
              title="BlogPhoto"
              width="30%"
              height="600px"
              src="https://gregoiremorane.github.io/WCS-BlogPhotoWC/"
            >
            </iframe>
          </Grid>
          <Grid item sm={12}  >
            <iframe
              title="wine_roulette"
              width="30%"
              height="600px"
              src="http://wineroulette.herokuapp.com/">
            </iframe>
          </Grid>
          <Grid  item sm={12}  >
            <iframe
              title="libizi"
              width="30%"
              height="600px"
              src="https://test19.libizi.fr">
            </iframe>
          </Grid>
        </div> */}
      </div>
    </Grid>
  )




}