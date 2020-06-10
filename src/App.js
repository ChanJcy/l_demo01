import React,{Component} from 'react'

class App extends Component{
  render(){
    return(
      <div>
        <ul className="my-list">
    <li>{false?'你好':"你不好"}</li>
          <li>bbqs</li>
        </ul>
      </div>
    )
  }
}

export default App