import React, { Component } from 'react';
import 'components/headNav/headNav.scss'
import logo from '../../assets/imgs/logo.png'
import avater from '../../assets/imgs/logo.png'
class headNav extends Component{
    render() {
        return (
            <div className="headNav">
                <div className="box">
                   <div className="left">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-list">
                            <div>首页</div>
                            <div>首页</div>
                            <div>首页</div>
                            <div>首页</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="avater">
                            <img src={avater} alt="" />
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default headNav;