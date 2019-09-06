import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col = {4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src = 'https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                                alt ='avatar'
                                style={{height: '200px'}}
                                />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>NightGeeks Inc.</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p style={{color:'#000'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p style={{color:'#000'}}>My address is on the internet</p>
                        <p style={{color:'#000'}}>(234) 703-980-9517</p>
                        <h5>Email</h5>
                        <p style={{color:'#000'}}>Email: augustineumeagudosi@gmail.com</p>
                        <h5>Web</h5>
                        <p style={{color:'#000'}}>www.www.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    {/* Right navigation */}
                    <Cell col = {8} className = 'resume-right-col'>
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear ='Date'
                            schoolName = 'Life'
                            schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                        />

                        <Education
                            startYear={2012}
                            endYear ='Date'
                            schoolName = 'Life'
                            schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Job Experience</h2>
                        <Experience
                            startYear={2008}
                            endYear ={2009}
                            jobName = 'First job'
                            jobDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                        />

                        <Experience
                            startYear={2012}
                            endYear ={2016}
                            jobName = 'Second job'
                            jobDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill = 'JavaScript'
                            progress ={95}
                        />
                        <Skills
                            skill = 'React'
                            progress ={70}
                        />
                        <Skills
                            skill = 'Node'
                            progress ={30}
                        />
                        <Skills
                            skill = 'PHP'
                            progress ={100}
                        />
                        <Skills
                            skill = 'Laravel'
                            progress ={95}
                        />
                        <Skills
                            skill = 'Python'
                            progress ={40}
                        />
                        <Skills
                            skill = 'BootStrap'
                            progress ={100}
                        />
                        <Skills
                            skill = 'MySQL'
                            progress ={75}
                        />
                        <Skills
                            skill = 'Postgre'
                            progress ={20}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;