// import React, { useState } from "react";
// import { MdCancel } from "react-icons/md";
// import images from '../Constants/images';


// export const Signin = ()=> {

//     const navigate = useNavigate();
//     const [loginModals, setLoginModals] = useState(false);
//     const LOGIN_API_KEY = 'https://campusbuy.onrender.com/login'
    
//     const openLoginModal = () => {
//         setLoginModals(true);
//     };
//     const closeLoginModal = () => {
//         setLoginModals(false);
//     };
    
    
    
    
//     const Login = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData(e.target);
//             const userData = {};
//             formData.forEach((value, key) => {
//                 userData[key] = value;
//             });
    
            
//             const response = await axios.post(LOGIN_API_KEY, userData);
//             localStorage.setItem('userData', JSON.stringify(response.data));
//             const parsedUserData = JSON.parse(localStorage.getItem('userData'));
    
//         // Log the parsed user data
//         console.log(parsedUserData);
    
//             await openLoginModal();
    
    
//             // Clear the form
//           e.target.reset();
    
//           // Close the modal after 3 seconds
//           setTimeout(() => {
//             closeLoginModal();
//             // Navigate to '/home' after the modal is closed
//             navigate('/home');
//           }, 3000);
    
//         } catch (error) {
//             console.error('Error Logging in Account:', error);
//             // Handle error as needed
//         }
//     };
    
    
    
    
//        return(
//         <div className='w-[100%]'>
//             <div className='max-lg:hidden'>
            
        
//             <div className='flex flex-col gap-4 justify-center items-center'>
//             <div className='text-center'>
//             <h1 className='text-4xl text-bold my-3'>Welcome</h1>
//             <p>Fill the form to update your password <strong>or</strong><NavLink  to= '/signup' className='underline text-blue-500'>Create an Account</NavLink></p>
//             </div>
//            <div className='w-[50%] max-lg:w-[100%]'>
//            <form onSubmit={Login} className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
//                 <div className='flex justify-between'>
//                     <label htmlFor='Email Address'> Email Address</label>
//                     <input type='text' name='email'  className='p-2 border w-[60%] border-gray-400' placeholder='Email Address'/>
//                 </div>
//                 <div className='flex justify-between'>
//                     <label htmlFor='Password'> Password</label>
//                     <input type='password' name='password'  className='p-2 w-[60%] border border-gray-400' placeholder='Password'/>
//                 </div>
                
//                 <button type='submit' className='p-2 inline-block w-full text-white bg-[#141052]'>Submit</button>
//             </form>
//             <NavLink to='/forgotpassword' className='underline text-blue-500'>Forgot Password ?</NavLink>
//            </div>
//             </div>
//             <div className='ml-auto login-modal border p-4'>{loginModals && <Loginmodal/>}</div>
    
//             </div>
    
             
//             <div className='hidden max-lg:block'>
//             <div className='text-black mt-3 '><Firstheader/></div>
//             <div className='flex justify-between p-2'>
//             <div className='flex  items-center max-lg:flex-col'>
//               <NavLink to='/'><img src='https://res.cloudinary.com/dneejvhch/image/upload/v1697441550/Design_Portfolio/logo_uzgltv.png' width={70} alt='logo'/></NavLink>
//            <h2><strong className='text-[#363D94] text-xl'>Campusbuy</strong></h2>
//             </div>
//             <div className='underline text-blue-500'><Link  to='/contact'>Send us a Message</Link></div>
        
//             </div>
        
//             <div className='flex flex-col gap-4 justify-center items-center'>
//             <div className='text-center'>
//             <h1 className='text-4xl text-bold my-3'>Welcome</h1>
//             <p>Sign in to your Campusbuy Account <strong>or</strong> <NavLink  to= '/signup' className='underline text-blue-500'>Create an Account</NavLink></p>
//             </div>
//            <div className='w-[50%] max-lg:w-[100%]'>
//            <form className='p-2 border border-gray-400  w-full flex flex-col gap-5'>
//                 <div className='flex justify-between'>
//                     <label htmlFor='Email Address'> Email Address</label>
//                     <input type='text' className='p-2 border w-[60%] border-gray-400' placeholder='Email Address'/>
//                 </div>
//                 <div className='flex justify-between'>
//                     <label htmlFor='Password'> Password</label>
//                     <input type='password' className='p-2 w-[60%] border border-gray-400' placeholder='Password'/>
//                 </div>
                
//                 <button className='p-2 inline-block w-full text-white bg-[#141052]'>Submit</button>
//             </form>
//             <NavLink to='/forgotpassword' className='underline text-blue-500'>Forgot Password ?</NavLink>
//            </div>
//             </div>
//             <div><Minifooter/></div>
//             </div>
//         </div>
//        )
    
//     }