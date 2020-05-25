import React from 'react';
import ListItem from './ListItem.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {createList,getEvent} from './API.js';
import CreateListItem from './CreateListItem.js';
class CreateListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {eventName:"",eventID:"",listID:'',listItems:[]};
        this.handleAdd = this.handleAdd.bind(this);
    }
    componentDidMount(){
        getEvent(this.props.match.params.id).then(data=>{
            console.log(data.id);
            this.setState({eventName:data.name,eventID:data.id})

        });
        createList(this.props.match.params.id,this.state.eventName,1).then(data=>{
            console.log(data.id);
            this.setState({listID:data.id})
        });
    }
    handleAdd(event){
        console.log("test");
        let list = this.state.listItems;
        list.push(<CreateListItem edit={true} listID={this.state.listID}/>);
        this.setState({listItems:list});
    }
    render(){
        
        return (
            <Container className="innerContent">
                
                <Row><h1>Create Your Wishlist</h1></Row>
                <Row><h2>{this.state.eventName}</h2></Row>
                <Button onClick={this.handleAdd}>Add Item</Button>
                <Row lg={1} md={1} sm={1} xl={1} xs={1}>
                    {this.state.listItems}
                </Row>
                
            </Container>

        );
    }
}
export default CreateListView;