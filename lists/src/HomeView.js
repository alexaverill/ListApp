import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import EventCard from './EventCard.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {getAllEvents} from './API.js';
class HomeCard{
    constructor(id,date,title){
        this.id = id;
        this.date = date;
        this.title = title;
    }
}
class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state={events:[]};
    }
    componentDidMount(){
        getAllEvents().then(data=>{
            this.setState({events:data});
        });
    }

    render(){
        const cards = this.state.events.map((e)=> <EventCard date={new Date(e.eventDate)} title={e.eventName} id={e.id}/>);


        return(
            <Container className="innerContent">
            <div className="homeHeader">
                <div className="headerText">
                    <h2>Events</h2>
                </div>
                <div className="">
                    <Button variant="primary" className="addEventBtn">Add Event</Button>
                </div>
            </div>
            <Row>
                {cards}
            </Row>
            </Container>
        );
    }
}
export default HomeView;