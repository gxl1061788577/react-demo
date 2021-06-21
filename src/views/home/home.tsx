import { Component } from 'react';
import 'views/home/home.scss'
import LeftClassification from 'components/leftClassification/leftClassification';
import RightRecommendation from 'components/rightRecommendation/rightRecommendation'
class Home extends Component {
    componentDidMount(){
        console.log('加载')
    }
    public render() {
        return (
            <div className="home">
                <LeftClassification></LeftClassification>
                <div className="main">
                    <div className="article-item">
                        <h3 className="text-overflow">《 java并发编程JUC第十一篇：如何在线程之间进行对等数据交换 》</h3>
                        <p className="text-overflow-line3">java.util.concurrent.Exchanger可以用来进行数据交换，或者被称为“数据交换器”。两个线程可以使用Exchanger交换数据，下图用来说明Exchanger的作用 在下面的代码中 首先我们定义了一个Exchanger，用于数据交换 然后定义了两个线程对象bookExchan </p>
                        <div className="article-footer">
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-user"></use>
                                </svg>
                                <span>作者</span>
                            </div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-calendar"></use>
                                </svg>
                                <span>时间</span>
                            </div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-like"></use>
                                </svg>
                                <span>点赞</span>
                            </div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>评论</span>
                            </div>
                        </div>
                    </div>
                    <div className="article-item">
                        <h3 className="text-overflow">《 java并发编程JUC第十一篇：如何在线程之间进行对等数据交换 》</h3>
                        <p className="text-overflow-line3">java.util.concurrent.Exchanger可以用来进行数据交换，或者被称为“数据交换器”。两个线程可以使用Exchanger交换数据，下图用来说明Exchanger的作用 在下面的代码中 首先我们定义了一个Exchanger，用于数据交换 然后定义了两个线程对象bookExchan </p>
                        <div className="article-footer">
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-user"></use>
                                </svg>
                                <span>作者</span>
                            </div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-calendar"></use>
                                </svg>
                                <span>时间</span>
                            </div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-like"></use>
                                </svg>
                                <span>点赞</span>
                            </div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>评论</span>
                            </div>
                        </div>
                    </div>
                </div>
                <RightRecommendation></RightRecommendation>
            </div>
        );
    }
}

export default Home;