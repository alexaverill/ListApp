require('dotenv').config();
const URL = 'http://localhost:5000';
async function PostRequest(url='', data={}){
    const response = await fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
        }
    });
    return response.json();
}
async function GetRequest(url=''){
    const response = await fetch(url);
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
        recieving:_recieving
    }
    console.log(JSON.stringify(data));
    PostRequest(requestURL,data).then(data=>{
        console.log(data);
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
        console.log(data);
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
        console.log(data);
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
