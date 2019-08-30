import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width:"100%", margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="data:image/png;base64,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"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1><hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | NodeJS | Python | MySQL</p>

                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Github */}
                                <a href="/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* FreecodeCamp */}
                                <a href="/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                                {/* Youtube */}
                                <a href="/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;