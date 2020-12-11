import React from 'react';
import Form from '../form/form.js';
import Button from '../buttom/buttom.js';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
//   postdata = (event)=>{
//             event.preventDefault()
//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(this.state)
//             };
//             fetch('', requestOptions)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('allpostdata',data)
                   
//                     this.setState({ password:"",Email:"" })
//                     localStorage.setItem('auth',data.token)
//                 });
//     }



  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    //console.log("a",value )

    this.setState({ [name]: value });

  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Form
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <Form
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <Button type='submit'> Sign in </Button>
          <Button onClick={signInWithGoogle}>
              {''}
               Sign in with Google{''}
               </Button>
          
        </form>
      </div>
    );
  }
}

export default SignIn;



// import React from 'react';
// import Form from '../form/form.js';

// import './sign-in.styles.scss';

// class SignIn extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             email:"",
//             password:""
//         }
//     }
// handleSubmit=event=>{
//     event.preventDefault();
//     this.setState({email:'',password:''})

// }
// handleChange=event=>{
//     const{value,name}=event.target;
//     this.setState({[name]:value})
// }


//     render(){
//         return(
//             <div className='sign-in'>
//                 <h2>I already have an account</h2>
//                 <span>Sign in with your email and password</span>
//                 <form onSubmit={this.handleSubmit}>
//                  <Form name="email" type="email"  value={this.state.email} handelChange={this.handelChange} label="email" required />
//                  <Form type="password" name="password"  value={this.state.email} handelChange={this.handelChange} label="password" required />
                 
//                  {/* <button onClick={this.postdata}>SignIn</button> */}
//                  <input type="submit" value="Submit"/>
//             </form>

//             </div>
//         )
//     }
// }
// export default SignIn
