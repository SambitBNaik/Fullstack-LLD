import React from 'react';
import UserProfile from './UserProfile';


const Footer = () => {
    const userInfo={
        name:"john",
        city:"London",
        email:"john@gmail.com",
        phoneNumber:"1234567891",
    }
  return <div>
     <h2>User Profile</h2>
     <UserProfile 
        //  Name={userInfo.name} 
        //  City={userInfo.city} 
        //  Email={userInfo.email} 
        //  PhoneNumber={userInfo.phoneNumber}
     />
     <UserProfile 
         Name={userInfo.name} 
         City={userInfo.city} 
         Email={userInfo.email} 
         PhoneNumber={userInfo.phoneNumber}
     />
      <UserProfile 
         Name={userInfo.name} 
         City={userInfo.city} 
         Email={userInfo.email} 
         PhoneNumber={userInfo.phoneNumber}
     />
      <UserProfile 
         Name={userInfo.name} 
         City={userInfo.city} 
         Email={userInfo.email} 
         PhoneNumber={userInfo.phoneNumber}
     />
  </div>
  
}

export default Footer