import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <Row className="listRow">
                    <Col>
                        {this.props.name}
                    </Col>
                    <Col>
                        {this.props.cost}
                    </Col>
                    <Col>
                        {this.props.quantity}
                    </Col>
                    <Col>
                        {this.props.comments}
                    </Col>
                    <Col>
                        <Button variant="outline-primary" className="claimBtn"> Claim </Button>
                    </Col>
                </Row>
            </>
        );
    }
}
export default ListItem;