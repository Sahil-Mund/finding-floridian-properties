// const BASE_URI = "http://localhost:5050";
// const BASE_URI = "https://finding-floridian-server.onrender.com";
// const BASE_URI = "https://floridian-server.onrender.com";
// const BASE_URI = "https://finding-floridian-server.vercel.app";
const BASE_URI = "https://findingfloridians.tryantler.com";
// const BASE_URI = "http://finding-floridian-v1.eba-xvek8nst.ap-south-1.elasticbeanstalk.com";

export const CHAT_AI_RESPONSE = `${BASE_URI}/api/bot/v1/get-bot-response`;
export const CONTACT_US_FORM = `${BASE_URI}/api/contact/v1/contact-us`;


export const USER_SIGNUP = `${BASE_URI}/api/user/v1/register`;
export const USER_LOGIN = `${BASE_URI}/api/user/v1/login`; 
export const GET_LOGGED_IN_USER_DETAILS = `${BASE_URI}/api/user/v1/getUserDetails`; 

export const CREATE_PROPERTY = `${BASE_URI}/api/property/v1/add-property`;

// http://localhost:3000/api/bot/v1/get-bot-response

// Hasura APIs
// export const HASURA_BASE_URI = 'https://polished-killdeer-52.hasura.app/v1/graphql';
export const GHC_AWS_URI = "https://stagingappapi.ghc.health/api/progress/upload";


export const HASURA_BASE_URI = "https://modern-fowl-69.hasura.app/api/rest";
export const X_HASURA_ADMIN_SECRET = "2AMBWY0MySblBsRfVaOMCJ52N0VNnZDzgkNZAuW9q7cqOVXloDJ4tl40rFMKi8yt";

// HASURA GRPHQL APIs

export const GET_ALL_PROPERTIES = `${HASURA_BASE_URI}/v1/get-all-properties-details`;
export const GET_ALL_PROPERTIES_FOR_POST = `${HASURA_BASE_URI}/v1/get-properties-for-posts`;
export const GET_PROPERTY_BY_TITLE = `${HASURA_BASE_URI}/v1/get-properties-details`;
