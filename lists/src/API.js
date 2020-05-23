require('dotenv').config();
const URL = process.env.ApiURL;
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
    let requestURL = "http://localhost:5000/createEvent";
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
    let request = "http://localhost:5000/getUsers"
    return GetRequest(request).then(data=>{
        return data;
    }
    );
}
