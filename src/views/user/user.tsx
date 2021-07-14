import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '../../redux/actionCreator'

class user extends Component<any> {
    componentDidMount(){
        console.log('加载user');

    }
    render() {
        let { name ,CHANGE_NAME } = this.props
        return (
            <div>
                <h2 onClick={CHANGE_NAME}>user{name}</h2>
                <Link to="/forum">home</Link>
                <Link to="/extra/login">login</Link>
                {/* <Prompt when={true} message="你确定要离开当前页面吗？"/> */}
            </div>
        );
    }
}

export default connect(state=>state,dispatch=>
  bindActionCreators(actionCreator,dispatch)
  )(user);