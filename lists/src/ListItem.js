import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {claimItem} from './API';
class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.claim = this.claim.bind(this)
    }
    claim(event){
        console.log(event);
        claimItem(this.props.id,1,true).then((data)=>{
            console.log(data);
            if(data.status == true){
                event.target.className += " test";
            }
            //TODO parse status and swap button back if false
        });
    }
    render() {
        let button;
        if(this.props.edit){
            button = <Button variant="outline-primary" className="claimBtn" onClick={this.props.editCallback}> Edit </Button>
        }else{
            button = <Button variant="outline-primary" className="claimBtn" onClick={this.claim}> Claim </Button>
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