import React, { Component } from 'react';
import 'components/footer/footer.scss'

class footer extends Component {
    addbug(e:any){
        e.target.className.baseVal = 'icon bug';
    }

    render() {
        return (
            <div className="footer">
                <div className="box">
                    <div className="top">
                        <dl>
                            <dt>条款</dt>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                        </dl>
                        <dl>
                            <dt>条款</dt>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                        </dl>
                        <dl>
                            <dt>条款</dt>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                        </dl>
                        <dl>
                            <dt>条款</dt>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                        </dl>
                        <dl>
                            <dt>条款</dt>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                        </dl>
                        <dl>
                            <dt>条款</dt>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                            <dd>条款</dd>
                        </dl>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="left">
                            <p>Copyright © 2021 ggk react forum. 当前呈现版本 1.1.0</p>
                            <p>浙ICP备15****96号-2浙公网安备330********000号ICP 经营许可 浙B2-20****54</p>
                            <p>杭******限公司版权所有</p>
                        </div>
                        <div className="right">
                            <svg className="icon " aria-hidden="true" onClick={this.addbug}>
                                <use xlinkHref="#icon-bug-fill"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-twitter-circle-fill"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-QQ-circle-fill"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-weibo-circle-fill"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-zhihu-circle-fill"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-github-fill"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;