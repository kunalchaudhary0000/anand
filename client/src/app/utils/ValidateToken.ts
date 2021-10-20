
import jwt_decode from 'jwt-decode';

const validatetoken = () => {
    const token =localStorage.getItem('token');
    if(!token) return false;
    const exp = JSON.parse(JSON.stringify(jwt_decode(token))).exp;
    console.log( "exp :" + exp + " " +"Date now :" + (exp-Math.ceil(Date.now()/1000))) 

    if(exp>Date.now()/1000) return true;
    else return false;
}
export default validatetoken;
