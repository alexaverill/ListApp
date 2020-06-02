import React from 'react';
import ListItem from './ListItem.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {getList,claimItem} from './API.js';
class ListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {list:[]};
    }
    componentDidMount(){
        getList(this.props.match.params.id).then(data=>{
            console.log(data);
            if(data.length > 0){
                this.setState({list:data[0].list_items});
            }
        })
    }
    render(){
        
        const list = this.state.list.map((Claim)=> <ListItem id={Claim.id} name={Claim.name} cost={Claim.cost} quantity={Claim.quantity} comments={Claim.comments} claimed={Claim.claimed}/>);
        return(
            <Container className="innerContent">
            <div class="listHeader">
                <div class="backLink">
                    <a href="#">Return to [EVENT]</a>
                </div>
                <div class="headerText">
                    <h2>EVENT TITLE</h2>
                    <h3>Event Sub</h3>
                </div>
            </div>
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
            </Container>
        );
    }
}
export default ListView;