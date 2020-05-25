import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {getEvent} from './API.js';
class EventView extends React.Component {
    constructor(props){
        super(props);
        this.state = {id:this.props.match.params.id,name:'',giving:[],recieving:[], isRecieving:true};
    }
    componentDidMount(){
        getEvent(this.props.match.params.id).then(data=>{
            let givers = data.givers.map((obj)=>obj.id);
        
            let recievers = data.recievers.map((obj)=>obj.id);
            let userID = 1;
            let rec = recievers.indexOf(userID) >= 0;
            
            this.setState({name:data.name,giving:givers,recieving:recievers, isRecieving:rec});
            
            console.log(this.state);
        })
    }
    render(){
        let val = this.state.name;
        
        let url = "/createList/"+this.state.id;
        let subTitle = <Row><Col><a href={url} className="btn btn-primary">Create Your List</a></Col></Row>;
        return(
            <>
            <h1> {val}</h1>
            {this.state.isRecieving &&
                subTitle
            }
            
            </>
        )
    }
}
export default EventView;