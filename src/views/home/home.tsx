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
                <div className="main"></div>
                <RightRecommendation></RightRecommendation>
            </div>
        );
    }
}

export default Home;