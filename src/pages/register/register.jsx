import "./register.css";


export default function Register(){
    return(
        <>
        <div className="register">
         <span className="registerTitle">Register</span>
         <form className="registerForm">
         <label>Username</label>
           <input 
           type="text" 
           placeholder="Enter your name..."
            />
           <label>Email</label>
           <input 
           type="email" 
           placeholder="Enter your Email"
        
            />
           <label>password</label>
           <input 
           type="password" 
           placeholder="Enter your password" 
          
           />
           <button className="registerButton" type="submit">Register</button>
         </form>
        
         
        </div>
        </>
    )
}

