import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    constructor(){
        super()
        this.state = {
            home:"",
            bs:"",
            en:"",
            ht:"",
            sc:"",
            sp:"",
            tc:""
        }
    }
    componentDidMount(){
        let {page} = this.props
        switch (page) {
            case 'home':
                this.setState({home:"active",bs:"",en:"",ht:"",sc:"",sp:"",tc:""})
                break;
            case 'bs':
                this.setState({home:"",bs:"active",en:"",ht:"",sc:"",sp:"",tc:""})
                break;
            case 'en':
                this.setState({home:"",bs:"",en:"active",ht:"",sc:"",sp:"",tc:""})
                break;
            case 'ht':
                this.setState({home:"",bs:"",en:"",ht:"active",sc:"",sp:"",tc:""})
                break;
            case 'sc':
                this.setState({home:"",bs:"",en:"",ht:"",sc:"active",sp:"",tc:""})
                break;
            case 'sp':
                this.setState({home:"",bs:"",en:"",ht:"",sc:"",sp:"active",tc:""})
                break;
            case 'tc':
                this.setState({home:"",bs:"",en:"",ht:"",sc:"",sp:"",tc:"active"})
                break;
            default:
                break;
        }
    }
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsHP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.home}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.bs}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.en}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.ht}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.sc}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.sp}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.state.tc}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}
