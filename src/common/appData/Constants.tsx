export enum PageLinks {
    LOGIN = "/login",
    HOME="/home",
    REGISTER = "/register"
}

export const APIResult = {
    SUCCESS: true,
    FAILURE: false
}

export enum Endpoints {
   
}



export const API = {
    //Development
    // BaseUrl: "https://jot-api1.extcons.xyz/customer_app/v1/",
    // BaseUrl: "https://jot-aws-api1-uat.mechmiles.com/customer_app/v1/", //UAT
    //BaseUrl: "http://127.0.0.1:8000/api/",
    //Live
    BaseUrl: "https://api1.mechmiles.com/customer_app/v1/", 
    EndPoint: Endpoints,
    Result: APIResult
}
