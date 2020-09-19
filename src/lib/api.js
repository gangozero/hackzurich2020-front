const APIURL = 'https://hackzurich2020-be.azurewebsites.net/api/v1';

export const api = {
    request: apiRequest,
    get: async (endpoint)=>apiRequest(endpoint,'GET'),
    post: async (endpoint,data={})=>apiRequest(endpoint,'POST',data),
    put: async (endpoint,data={})=>apiRequest(endpoint,'PUT',data),
    delete: async (endpoint)=>apiRequest(endpoint,'DELETE')
}

async function apiRequest(endpoint,method="GET",data={}){
    const res = await fetch(`${APIURL}${endpoint}`,{
        method,
        headers: {'Content-Type': 'application/json'},
        body: (method !== 'GET') ? JSON.stringify(data) : undefined
    });

    if(!res.ok) return {error:404,message: 'not found'};
    
    return await res.json();
}