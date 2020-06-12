import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class EventCard extends React.Component {
    constructor(props){
        super(props);
        //{this.props.date.toDateString()}
    }
    render() {
        let url = "events/"+this.props.id;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/1.jpg" />
                <Card.Body>
                    <Card.Subtitle>{this.props.date.toDateString()}</Card.Subtitle>
                    <Card.Title>{this.props.title}</Card.Title>
                    <a href={url}className="btn btn-primary">View Event</a>
                </Card.Body>
            </Card>
        );
    }
}
export default EventCard;