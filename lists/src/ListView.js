import React from 'react';
import ListItem from './ListItem.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class ClaimItem{
    constructor(name,cost,quantity,comments){
        this.name = name;
        this.cost = cost;
        this.quantity = quantity;
        this.comments = comments;
        this.claimed = false;
    }
}
class ListView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let claimItems = [
            new ClaimItem("Test",10,100,"Test"),
            new ClaimItem("Cats",1,1,"Fluffy"),
            new ClaimItem("WAMPAS",100,1,"")
        ]
        const list = claimItems.map((Claim)=> <ListItem name={Claim.name} cost={Claim.cost} quantity={Claim.quantity} comments={Claim.comments} claimed={Claim.claimed}/>);
        return(
            <>
            <Row className="titleRow">
                <Col>
                    Item
                </Col>
                <Col>
                    Cost
                </Col>
                <Col>
                    Quantity
                </Col>
                <Col>
                    Comments
                </Col>
                <Col>
                    
                </Col>
            </Row>
            {list}
            </>
        );
    }
}
export default ListView;