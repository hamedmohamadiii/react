import { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import User from "./components/user";
import NotFound from "./components/notFound";

class App extends Component {

    render() {
       
        return (
            <>

                <div className="container mt-3">
                    <Router>
                        <Navbar></Navbar>                        
                        <Routes>
                           
                            <Route path="/" element={<Home />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/users/:id" element={<User />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/not-found " element={<NotFound />} />
                 
                         
                        </Routes>
                    </Router>
                </div>
            </>
        );
    }
}

export default App;