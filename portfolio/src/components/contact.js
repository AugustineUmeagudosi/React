import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className = 'contact-body'>
                <Grid className = "contact-grid">
                    <Cell col= {5}>
                        <h2>NightGeeks</h2>
                        <img
                            src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                            alt = 'avatar'
                            style={{height:'250px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em', color: "black"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                    </Cell>

                    {/* 2nd half */}
                    <Cell col= {7}>
                        <h2>Contact Us</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-phone-square" aria-hidden = "true"/>(234) 703-980-9517
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-fax" aria-hidden = "true"/>(234) 703-980-9517
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-envelope" aria-hidden = "true"/>augustineumeagudosi@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-skype" aria-hidden = "true"/>MySkypeId
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;