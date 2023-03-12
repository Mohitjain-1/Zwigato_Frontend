import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function Signup() {
    const [credentials, setcredentials] = useState({
        name: "",
        email: "",
        password: "",
        Geolocation: "",
    });
let navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/create/Createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:credentials.name, password:credentials.password,email:credentials.email,location:credentials.Geolocation}),
        
        });
        const json=await response.json();
        console.log(json);

        if(!json.success)
        {
            alert("Enter Valid Credentials")
        }
        if(json.success)
        {
           alert("Registered Successfully!")
            navigate("/login");
        }
    };
    

    const handleChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
        <NavBar/>
            <div className="container mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={credentials.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="Geolocation"
                            value={credentials.Geolocation}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="m-3 btn btn-primary">
                        Submit
                       
                    </button>
                    <Link to="/login" className="m-3 btn btn-primary">
                        Already a user
                    </Link>
                </form>
            </div>
        </>
    );
}
