//左侧分类模块
import React, { Component } from 'react';
import 'components/leftClassification/leftClassification.scss'
import title from 'assets/imgs/test.jpg';

class leftClassification extends Component {
    render() {
        return (
            <div className="leftClassification">
                <div className="type">
                    <div>
                        <img src={title} alt="" />
                        <span>文章</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>问答</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>活动</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>分类</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>专栏</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>发现</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>分类</span>
                    </div>
                    <div>
                        <img src={title} alt="" />
                        <span>分类</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default leftClassification;