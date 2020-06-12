import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {claimItem, unclaimItem} from './API';
import {getID} from './Session';
class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state={claimed:this.props.claimed,claimedBy:this.props.claimedBy}
        this.claim = this.claim.bind(this)
        this.unclaim = this.unclaim.bind(this);
    }
    claim(event){
        console.log(event);
        claimItem(this.props.id,getID()).then((data)=>{
            console.log(data);
            this.setState({claimed:true,claimedBy:getID()});
        });
    }
    unclaim(event){
        unclaimItem(this.props.id,getID()).then(data=>{
            this.setState({claimed:false,claimedBy:null});
        });
    }
    render() {
        let button;
        if(this.props.edit){
            button = <Button variant="outline-primary" className="claimBtn" onClick={this.props.editCallback}> Edit </Button>
        }else{
            if( this.state.claimedBy == getID()){
                button=<Button variant="outline-primary" className="claimBtn" onClick={this.unclaim}> UnClaim </Button>;
            }else if(this.state.claimed ){
                button=''//<Button variant="outline-primary" className="claimBtn" disabled="true"> Claim </Button>;
            }else{
                button = <Button variant="outline-primary" className="claimBtn" onClick={this.claim}> Claim </Button>
            }
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