import {user} from './userStore';

let $user = null;
user.subscribe(v => {
    $user = v;
});

const APIURL = 'https://hackzurich2020-be.azurewebsites.net/api/v1';

export const api = {
    request: apiRequest,
    get: async (endpoint)=>apiRequest(endpoint,'GET'),
    post: async (endpoint,data={})=>apiRequest(endpoint,'POST',data),
    put: async (endpoint,data={})=>apiRequest(endpoint,'PUT',data),
    delete: async (endpoint)=>apiRequest(endpoint,'DELETE')
}

async function apiRequest(endpoint,method="GET",data={}){
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
    if($user) headers['Authorization'] = `Bearer ${$user}`;

    const res = await fetch(`${APIURL}${endpoint}`,{
        method,
        headers,
        body: (method !== 'GET' && method !== 'DELETE') ? JSON.stringify(data) : undefined
    });

    if(!res.ok) return {error:404,message: 'not found'};
    
    return await res.json();
}