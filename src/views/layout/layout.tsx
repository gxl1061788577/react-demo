//论坛主体套件
import * as React from 'react'
import HeadNav from 'components/headNav/headNav';
import Footer from 'components/footer/footer';
class layout extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                <HeadNav></HeadNav> 
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default layout;