import React from 'react';
import { Form,message} from "antd";
import FormItem from 'antd/es/form/FormItem';
import {Link, useNavigate} from "react-router-dom";
import Button from '../../Components/Button';
import { RegisterUser } from '../../APICalls/user';

const Register = () => {
    const navigate= useNavigate();
    const onFinish=async (values)=>{
        try{
          const response= await RegisterUser(values);
          if(response.success){
            message.success(response.message);
            // window.location.href='/login';
            navigate('/login');
          }
        }catch(error){
            message.error(error);
        }

    };
  return (
    <div className='flex justify-center h-screen items-center bg-main'>
        <div className="card p-3 w-400">
            <h1 className='text-xl mb-1'>Welcome to Book My Show! Please Register</h1>
            <Form layout='vertical' className='mt-1' onFinish={onFinish}>
                <Form.Item label="Name" name="name" rules={[{required:true,message:"Please Enter your Name"}]}>
                    <input type='text'/>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{required:true,message:"Please Enter your Email"}]}>
                    <input type='email'/>
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required:true,message:"Please Enter your Password"}]}>
                    <input type='password'/>
                </Form.Item>
                <div className='flex flex-col m-2 gap-1'>
                    <Button fullwidth title='Register' type="Submit"/>
                    <Link to='/login' className="text-primary">
                    Alredy have an account? Login
                    </Link>
                </div>

            </Form>
        </div>
    </div>
  );
};

export default Register



// email
// : 
// "kiran@scaler.com"
// name
// : 
// "kiran"
// password
// : 
// "scaler1234"