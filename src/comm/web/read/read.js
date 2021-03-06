import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
  Link,

} from 'react-router-dom';
import './read.css';
class Read extends Component{
  render(){
//  console.log(this.props.stateBool);
    let data = this.props.data;
    // console.log(data);
    let data1 = Object.assign(data);
    let list = null;
    list = data1.map((e,i)=>{
      return <Link to={'/web/read/'+e.id}><div className="webpage_read">
        <p className="web_read_img_span"><img src={e.avatar} alt="" /><span className="authorname">{e.author}</span></p>
        <span id="read_title" >{e.title}</span>
        <p className="read_title_p">{e.content}</p>
      </div></Link>
    })
    return(
      <div id="webpage_read">
        <h1 className="today">今日精选</h1>
        {list}
        <div id="footer">
          <div className="footLeft">
            <p><span>© 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司</span></p>
            <p><span>京ICP证090015号 京ICP备11027288号 网络视听许可证0110418号 </span></p>
            <p><span>京网文[2015]2026-368号  京公网安备11010502000728  新出网证(京)字129号 </span></p>
            <p><span>违法和不良信息举报电话：4008353331  </span></p>
            <p><span>中国互联网举报中心 电话：12377 《食品流通许可证》许可证：SP1101051510347287</span></p>
            <p><span>新出发京批字第直160029号</span></p>
          </div>
          <div className="footRight"></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
    return {
        title:state.consultationReducer.title,
        data:state.consultationReducer.data.data
    }
}
const mapDispatchToProps = {

};

Read = connect(
    mapStateToProps,
    mapDispatchToProps
)(Read);

export default Read;
