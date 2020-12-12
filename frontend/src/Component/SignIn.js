// import React from 'react'


// class SignIn extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             Email:"",
//             password:""
//         }
//     }  

//     postdata = (event)=>{
//         event.preventDefault()
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(this.state)
//         };
//         fetch('', requestOptions)
//             .then(response => response.json())
//             .then(data => {
//                 console.log('allpostdata',data)
//                
//                 this.setState({ password:"",Email:"" })
//                 localStorage.setItem('auth',data.token)
//             });
// }

// handelChange = (event)=>{
// const { name , value } = event.target;
// console.log(value);
// this.setState({[name]:value});
// }
//     render(){
//         return (
//             <div>
//             <form>
//                 <input type="text" name="Email"  placeholder="Email" value={this.state.Email} onChange={this.handelChange} />
//                 <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handelChange} />
//                 <button onClick={this.postdata}>SignIn</button>
//             </form>
//         </div>
//      )
//     }
// }
// export default SignIn;  