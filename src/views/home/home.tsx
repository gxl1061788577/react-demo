import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount(){
        console.log('加载')
    }
    public render() {
        return (
            <div>
                <h2>home</h2>
                <Link to="/extra/login">user</Link>
                {/* <Prompt when={true} message="你确定要离开当前页面吗？"/> */}
            </div>
        );
    }
}

export default Home;