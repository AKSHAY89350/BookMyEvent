import React, { Component } from 'react'
import Error1 from './Error';
import Dashboard from '../components/DashBoard';
import { store, login, logout } from "./Store";
import Start from './start';
class Login extends Component {
    uname = React.createRef();
    password = React.createRef();
    state = {
        msg: '',
        user: [
            { 'uname': 'gopi', 'password': 'gopi' },
            { 'uname': 'aman', 'password': 'aman' },
            { 'uname': 'ram', 'password': 'ram' },
            { 'uname': 'rohan', 'password': 'rohan' },
        ],
        status: "invalid"
    }
    validation() {
        var uname = this.uname.current.value;
        var password = this.password.current.value;
        if (this.state.user.find(x => x.uname == uname && x.password == password)) {
            store.dispatch(login(uname));
            this.setState({ status: 'valid', class1: 'successClass', msg: "Successfully Login" });
            this.props.getStatus('valid');
        }
        else {
            store.dispatch(logout());
            this.setState({
                class1: 'failureClass',
                msg: "Invalid User Name and Password"
            });
            this.props.getStatus('invaild');
        }



    }
    render() {
        return (
            <div className={this.state.class1}  >
                <div className='container'>
                    <h1 >Log in</h1>
                    <div className='row g-3'>

                        <div class="col-auto">
                            <input type="text" class="form-control" placeholder="User name" ref={this.uname} />
                        </div>
                        <div class="col-auto">
                            <input type="password"
                                class="form-control" placeholder="Password" ref={this.password} />
                        </div>
                        <div class="col-auto">
                            <button className="btn btn-primary mb-3" onClick={() => this.validation()}>
                                Confirm identity
                            </button>
                            {this.state.msg}
                        </div>
                    </div>
                </div>
                {/* {this.state.status == 'valid' ? <Dashboard /> : <Error1 />}
                */}
                <Start status={this.state.status} />
            </div>
        )
    }
}
export default Login;








