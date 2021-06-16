import * as React from 'react'
import HeadNav from 'components/headNav';
class layout extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                <div>
                    <HeadNav></HeadNav> 
                    <div>layout</div>
                    <div>{this.props.children}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default layout;