import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class user extends Component {
    componentDidMount(){
        console.log('加载user')
    }
    render() {
        return (
            <div>
                <h2>user</h2>
                <Link to="/forum">home</Link>
                <Link to="/extra/login">login</Link>
                {/* <Prompt when={true} message="你确定要离开当前页面吗？"/> */}
            </div>
        );
    }
}

export default user;