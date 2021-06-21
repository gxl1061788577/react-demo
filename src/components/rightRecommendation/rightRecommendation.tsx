//右侧推荐模块
import React, { Component } from 'react';
import 'components/rightRecommendation/rightRecommendation.scss'
import avater from 'assets/imgs/test.jpg'

class rightRecommendation extends Component {
    render() {
        return (
            <div className="rightRecommendation">
                <div>
                    <h3>热门文章</h3>
                    <div className="hot-item">
                        <img src={avater} alt=""  />
                        <div>
                            <p className="text-overflow-line2">拉断阀就离开的飞机拉得开房间啊来看的风景拉的积分</p>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fire"></use>
                                </svg>
                                <span>200</span>
                            </div>
                        </div>
                    </div>
                    <div className="hot-item">
                        <img src={avater} alt=""  />
                        <div>
                            <p className="text-overflow-line2">拉断阀就离开的飞机拉得开房间啊来看的风景拉的积分</p>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fire"></use>
                                </svg>
                                <span>200</span>
                            </div>
                        </div>
                    </div>
                    <div className="hot-item">
                        <img src={avater} alt=""  />
                        <div>
                            <p className="text-overflow-line2">拉断阀就离开的飞机拉得开房间啊来看的风景拉的积分</p>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fire"></use>
                                </svg>
                                <span>200</span>
                            </div>
                        </div>
                    </div>
                    <div className="hot-item">
                        <img src={avater} alt=""  />
                        <div>
                            <p className="text-overflow-line2">拉断阀就离开的飞机拉得开房间啊来看的风景拉的积分</p>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fire"></use>
                                </svg>
                                <span>200</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>标签云</h3>
                    <div className="tags">
                        <span>阿斯顿阿德福发</span><span>阿斯顿的发</span><span>阿斯顿发</span><span>斯顿发</span>
                        <span>阿顿发</span><span>阿斯顿发</span><span>阿电饭锅斯顿发</span><span>阿斯顿发</span>
                        <span>阿斯顿发</span><span>阿</span><span>阿斯顿发</span><span>阿斯防顿发</span>
                        <span>阿斯</span><span>阿顿发</span><span>阿复发1斯顿发</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default rightRecommendation;