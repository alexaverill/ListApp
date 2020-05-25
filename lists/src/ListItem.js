import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let button;
        if(this.props.edit){
            button = <Button variant="outline-primary" className="claimBtn" onClick={this.props.editCallback}> Edit </Button>
        }else{
            button = <Button variant="outline-primary" className="claimBtn"> Claim </Button>
        }
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
                    {this.props.edit}
                    <Col>
                        {button}
                    </Col>
                </Row>
            </>
        );
    }
}
export default ListItem;