import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import EventCard from './EventCard.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class HomeCard{
    constructor(id,date,title){
        this.id = id;
        this.date = date;
        this.title = title;
    }
}
class HomeView extends React.Component{
    render(){
        let cardData = [
            new HomeCard(1,new Date(2020,11,25),"Christmas"),
            new HomeCard(1,new Date(2020,9,27),"Alex's Birthday"),
            new HomeCard(1,new Date(2020,8,27),"Colleens's Birthday"),
        ];
        let cards = cardData.map((card)=><EventCard date={card.date} title={card.title}/>);
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