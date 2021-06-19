//论坛主体套件
import * as React from 'react'
import 'views/layout/layout.scss'
import HeadNav from 'components/headNav/headNav';
import RightRecommendation from 'views/layout/indexComponents/rightRecommendation/rightRecommendation'
class layout extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                <HeadNav></HeadNav> 
                <div className="main-content">
                    <div className="left">111</div>
                    <div className="main">{this.props.children}</div>
                    <RightRecommendation></RightRecommendation>
                </div>
            </React.Fragment>
        );
    }
}

export default layout;