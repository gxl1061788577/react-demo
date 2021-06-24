import React, { Component } from 'react';
import 'components/pagination/pagination.scss'
type PropsType = {
    page:number,
    pageSize?:number,
    total:number
}
type StateType = {
    page:number,
    pageSize:number,
}
interface pagination {
    state: StateType,
    props: PropsType,
}
class pagination extends Component {
    constructor(props:PropsType){
        super(props)
        this.state = {
            page: this.props.page||1,
            pageSize: this.props.pageSize||10,
        }
    }
    returnLi(){
        let lis = [],len=this.props.total>=7?7:this.props.total-1;
        lis.push(<li key="1" className={this.state.page === 1?"active":""} onClick={()=>{this.clickPage(1)}}>1</li>);
        //前半部
        if(this.state.page>=6){
            lis.push(
                    <li key="left" className="left" onClick={()=>{this.clickReadPage(-5)}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-more"></use>
                        </svg>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-doubleleft"></use>
                        </svg>
                    </li>
                );
            //后半部
            if((this.props.total - this.state.page)>= 5){
                for(let i=this.state.page-2,lens = this.state.page+3;i<lens;i++){
                    lis.push(<li key={i} className={this.state.page === i?"active":""}  onClick={()=>{this.clickPage(i)}}>{i}</li>)
                }
                if(this.props.total>=9){
                    lis.push(
                        <li key="right" className="right" onClick={()=>{this.clickReadPage(5)}}>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-more"></use>
                            </svg>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-doubleright"></use>
                            </svg>
                        </li>
                    );
                }
            }else{
                for(let i=this.props.total-5;i<this.props.total;i++){
                    lis.push(<li key={i} className={this.state.page === i?"active":""} onClick={()=>{this.clickPage(i)}}>{i}</li>)
                }
            }
        }else{
            for(let i=2;i<len;i++){
                lis.push(<li key={i} className={this.state.page === i?"active":""} onClick={()=>{this.clickPage(i)}}>{i}</li>)
            }
            //后半部
            if(this.props.total>=9){
                lis.push(
                    <li key="right" className="right" onClick={()=>{this.clickReadPage(5)}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-more"></use>
                        </svg>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-doubleright"></use>
                        </svg>
                    </li>
                );
            }
        }
        lis.push(<li key={this.props.total} className={this.state.page === this.props.total?"active":""} onClick={()=>{this.clickPage(this.props.total)}}>{this.props.total}</li>);
        return lis;
    }
    //点击具体页数&&上下页
    clickPage = (page:number,go?:number) => {
        if(page){
            this.setState({page : page});
        }else{
            if(go){
                let newPage = this.state.page+go;
                if(!(newPage<=0||newPage>this.props.total)){
                    this.setState({page : newPage});
                }
            }
        }
    }
    //前后5页
    clickReadPage = (go:number) => {
        if(this.state.page+go>0&&this.state.page+go<=this.props.total){
            this.setState({page : this.state.page+go});
        }else{
            return false;
        }
    }
    //enter输入跳转
    Enter = (e:any) => {
        if (e.keyCode === 13 || e.keyCode === 32 ){
            let npage = Number(e.target.value);
            if(npage&&npage<=this.props.total){
                this.setState({page : Number(e.target.value)})
                e.target.value = '';
            }
        }else{
            return false;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="pagination">
                    <div>
                        <ul>
                            <li key="pre" onClick={()=>{this.clickPage(0,-1)}}>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-return"></use>
                                </svg>
                            </li>
                            {this.returnLi()}
                            <li key="next" onClick={()=>{this.clickPage(0,1)}}>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-enter"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    {
                        this.props.total/6>1&&
                        <div>
                            <span>跳至</span>
                            <input type="text" onKeyDown={this.Enter}/>
                            <span>页</span>
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default pagination;