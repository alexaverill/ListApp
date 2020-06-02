import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {getEvent,getEventLists} from './API.js';
class EventView extends React.Component {
    constructor(props){
        super(props);
        this.state = {id:this.props.match.params.id,name:'',giving:[],recieving:[], isRecieving:true,lists:[]};
    }
    componentDidMount(){
        getEvent(this.props.match.params.id).then(data=>{
            console.log(data);
            let givers = data.event.Givers.map((obj)=>obj.id);
        
            let recievers = data.event.Receivers.map((obj)=>obj.id);
            let userID = 1;
            let rec = recievers.indexOf(userID) >= 0;
            this.setState({name:data.event.eventName,giving:givers,recieving:recievers, isRecieving:rec, lists:data.event.lists});
            
            
        })
    }
    render(){
        let val = this.state.name;
        
        let url = "/createList/"+this.state.id;
        let subTitle = <Row><Col><a href={url} className="btn btn-primary">Create Your List</a></Col></Row>;
        
    const lists = this.state.lists.map((list)=> {let claimURL = "/viewList/"+list.id; return <Row><Col>{list.userId}</Col><Col>Amount</Col><Col><a href={claimURL} className="btn btn-primary">View List</a></Col><Col></Col></Row>});
        return(
            <>
            <h1> {val}</h1>
            {this.state.isRecieving &&
                subTitle
            }
            <Row><Col>Name</Col><Col>Amount</Col><Col>Your Claimed Item</Col><Col></Col></Row>
            {lists}
            </>
        )
    }
}
export default EventView;