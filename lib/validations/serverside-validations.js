import { allLetter, CheckPassword, isEmail } from "./input-validations";

export const signupDataValidation = (name, email, password) => {
    if (!name || !email || !password) return false;
  
    if (!allLetter(name)) return false;
  
    if (!isEmail(email)) return false;
  
    if (!CheckPassword(password)) return false;
  
    return true;
  };

  export const loginDataValidation = (email, password) => {
    if (!email || !password) return false;
  
    if (!isEmail(email)) return false;
  
    if (!CheckPassword(password)) return false;
  
    return true;
  };