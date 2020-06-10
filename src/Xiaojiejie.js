import React,{Component,Fragment} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:['基础按摩','精油推背']
    }

  }
  componentDidMount(){
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then((res)=>{console.log('axios获取数据成功：'+JSON.stringify(res))})
    .catch((error)=>{console.log('axios获取数据失败：'+error)})
  }
  render(){
    return(
      <Fragment>
        <div>
          <label htmlFor="jspang">增加服务：</label>
          <input type="text"
              value={this.state.inputValue}
              onChange={this.inputChange.bind(this)}
              className="input"
              id="jspang"
              ref={input=>{this.input=input}}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
            return (
              <CSSTransition
                timeout={2000}
                classNames='boss-text'
                unmountOnExit
                appear={true}
                key={index+item}
              >
                <XiaojiejieItem
                content={item}
                key={index+item}
                index={index}
                list={this.state.list}
                deleteItem={this.deleteItem.bind(this)}
                />
                </CSSTransition>
            )
            })
          }
          </TransitionGroup>
        </ul>
        <Boss/>
      </Fragment>

    )
  }

  inputChange(){
    // console.log(this)
    this.setState({
      // inputValue:e.target.value
      inputValue:this.input.value
      
    })
    // console.log(123)
  }
  addList(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    },()=>{
      console.log(this.ul.querySelectorAll('li').length)
    })
    
  }
  deleteItem(index){
    let list=this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })

  }
}

export default Xiaojiejie 