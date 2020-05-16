import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class EventCard extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Subtitle>{this.props.date.toDateString()}</Card.Subtitle>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}
export default EventCard;