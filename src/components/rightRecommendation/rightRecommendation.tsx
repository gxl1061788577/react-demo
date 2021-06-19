//右侧推荐模块
import React, { Component } from 'react';
import 'components/rightRecommendation/rightRecommendation.scss'
import avater from 'assets/imgs/svg-loaders/audio.svg'

class rightRecommendation extends Component {
    render() {
        return (
            <div className="rightRecommendation">
                <div className="hot">
                    <h3>热门文章</h3>
                    <div className="hot-item">
                        <img src={avater} alt=""  />
                        <div>
                            <p className="text-overflow-line2">拉断阀就离开的飞机拉得开房间啊来看的风景拉的积分</p>
                            <div>
                                
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default rightRecommendation;