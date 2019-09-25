import React, {Component} from "react";
import "./Profile.scss";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";




class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }

    render() {
        return (
            <Container fluid>
            <div className="profilePage">
                {this.state.loggedIn ? (
                    <div className="profileBox" align="center">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1> 
                        <br/>
                        <h2 align="center">ADD STONES TO GET STARTED</h2>
                        <Link to="/discover"><Button id="discover">Discover</Button></Link>
                    </div>
                    
                    
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>Please Log In</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn">Login</Button></Link>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
            </div>
            </Container>
        )
    }
}


export default Profile;