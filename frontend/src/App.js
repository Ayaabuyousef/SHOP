import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer.js';
//import { useRef, useState } from "react";
//import { useForm } from "react-hook-form";
//import ReCAPTCHA from "react-google-recaptcha";
//import SignIn from './Component/SignIn';
import HomePage from './pages/homepage/homepage.js';
import ShopPage from './pages/shop/shop.js';
import Header from './Component/header/header';
import SignInandUp from './pages/signIn-signUP/signIn-signUP.js';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



//
// const HatsPage=()=>(
//   <div> 
//     <h1>MY HATS PAGE </h1>
//   </div>
// );



class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser:null
    };
  }
unsubscribeFromAuth=null


componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
    createUserProfileDocument(user);
    // this.setState({currentUser:user});
    console.log(user);
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
        <switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/SignIn' component={SignInandUp} />
        </switch>
        <Footer />
  
  
      </div>
    );
    }

  }
  



// interface FormData {
//   name: String;
//   email: String;
//   password: String;
//   terms: boolean;
// }

// export default function Home() {
//   const { register, handleSubmit, errors } = useForm<FormData>();//{
  
//   console.log(errors, "Errors");
//   return (
//     <div>
//       <div>
//         <SignIn />
//       </div>
//       <div>
//         <HomePage />
//       </div>
//       <form
//         onSubmit={handleSubmit((formData) => {
//           console.log(formData, "formData");
          
        
//         })}
//       >

//         <div>
//           <label htmlFor="name">Name</label>
//           <input type="text" name="name" id="name" ref={register({ required: "required" })} />
//           {errors.name ? <div>{errors.name.message}</div> : null}
//         </div>

//         <div>
//           <label htmlFor="Email">Email</label>
//           <input type="email" name="Email" id="Email" ref={register({ required: "required" })} />
//           {errors.email ? <div>{errors.email.message}</div> : null}
//         </div>

//         <div>
//           <label htmlFor="password">password</label>
//           <input type="password" password="password" id="password" ref={register({
//             required: "required",
//             minLength: {
//               value: 8,
//               message: "must be 8 chars",
//             },
//             validate: (value) => {
//               return [
//                 /[a-z]/,
//                 /[A-Z]/,
//                 /[0-9]/,
//                 /[^a-zA-Z0-9]/,
//               ].every((pattern) => pattern.test(value)
//               ) || "must include lower,upper,number,and special chars"
//             }
//           })}
//           />
//           {errors.password ? <div>{errors.password.message}</div> : null}

//         </div>

//         <div>
//           <label htmlFor="terms">You must agree to our terms</label>
//           <input type="checkbox" name="terms" id="terms" ref={register({ required: "Agree to term" })} />
//           {errors.terms ? <div>{errors.terms.message}</div> : null}
//         </div>

//         <div>
//           <button type="submit" >Register</button>
//         </div>

//       </form>
//     </div>
//   );
// }

export default App;
