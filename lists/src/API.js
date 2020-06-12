import {getKey} from './Session.js';
import { createHashHistory } from "history";
// require('dotenv').config();

const URL = 'http://localhost:5000';
async function PostRequest(url='', data={}){
    const response = await fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+getKey()
        }
    });
    return response.json();
}
async function GetRequest(url=''){
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Authorization':'Bearer '+getKey()
        }
    });
    return response.json();
}
export function createEvent(_name,_date,_comments,_giving,_recieving){
    let requestURL = URL+"/createEvent";
    console.log(requestURL);
    let data = {
        name:_name,
        date:_date,
        comments:_comments,
        giving:_giving,
        recieving:_recieving,
        image:Math.floor(Math.random() * 25)
    }
    console.log(JSON.stringify(data));
    return PostRequest(requestURL,data).then(data=>{
        return data;
    });
}
export function getUsers(){
    let request = URL+"/getUsers"
    return GetRequest(request).then(data=>{
        return data;
    }
    );
}
export function getAllEvents(){
    let request = URL+"/getEvents";
    return GetRequest(request).then(data=>{
        console.log(data['events']);
        return data['events'];
    });
}
export function getEvent(id){
    let request = URL+"/getEvent?id="+id;
    return GetRequest(request).then(data=>{
        
        return data;
    });
}
export function getEventLists(id){
    let request = URL+"/getEventLists?id="+id;
    return GetRequest(request).then(data=>{
        console.log(data.lists.items);
        return data;
    });
}
export function createList(eventID,listName,userID){
    let listData = {
        name:listName,
        event:eventID,
        userID:userID
    }
    let request = URL + '/createList'
    return PostRequest(request,listData).then(data=>{
        //console.log(data);
        return data;
    });
}
export function getList(listID){
    let request = URL+"/getList?id="+listID;
    return GetRequest(request).then(data=>{
        //console.log(data);
        return data;
    });
}
export function claimItem(itemID,userID){
    let claim = {
       itemID:itemID,
       userID:userID
    }
    let request = URL + '/claimItem'
    return PostRequest(request,claim).then(data=>{
        //console.log(data);
        return data;
    });
}
export function unclaimItem(itemID,userID){
    let claim = {
        itemID:itemID,
        userID:userID
     }
     let request = URL + '/unclaimItem'
     return PostRequest(request,claim).then(data=>{
         //console.log(data);
         return data;
     });
}
export function addListItem(_listID,listObj){
    let data = {
        listID:_listID,
        listItem:listObj
    }
    let request = URL+'/addListItem';
    return PostRequest(request,data).then(data=>{
        console.log(data);
        return data;
    });
}
export function login(_username,_password){
    let data = {
        username:_username,
        password:_password
    };
    let request = URL + "/authenticate";
    return PostRequest(request,data).then(data=>{
        return data;
    });
}
export function verifyToken(){
    let key = getKey();
    if(key === null || key === undefined || key.length <=0){
        return Promise.resolve(false);
    }
    let data = {
        token:getKey()
    };
    let request = URL + '/verify';
    return PostRequest(request,data).then(data=>{
        console.log(data.status);
        //return true;
        if(data.status === false){
            return false;
        }else{
            return true;
        }
        
    });
}