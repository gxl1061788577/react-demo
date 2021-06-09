import { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Home extends Component {
    public constructor(){
        super();

    }
    public render() {
        return (
            <div>
                <div>home</div>
                <Prompt
                    when={true}
                    message="你确定要离开当前页面吗？"
                />
            </div>
        );
    }
}

export default Home;