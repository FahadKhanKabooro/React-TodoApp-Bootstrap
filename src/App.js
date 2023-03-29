import React, { Component } from 'react'
import { BiAddToQueue} from 'react-icons/bi';
import Plan from './Plan'
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';



 class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e =>{
    this.setState({text:e.target.value})
  }
  handleAdd = e =>{
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({
        items: items, text:""
      })
    }
  }
  handleDel = id =>{
    console.log("del",id);
    const Olditems = [...this.state.items]
    console.log('Oldites', Olditems);
    const items = Olditems.filter((element, i)=>{
      return i !== id
    })
    console.log("Newitems",items)
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
            <h2 className='text-center'> Today's Plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control'
                 placeholder=' write Plan Here' value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5
                 font-weight-bold" onClick={this.handleAdd}><BiAddToQueue/></button>
                </div>
                <div className="containet-fluid">
                  <ul className='list-unstyled row m-5'>
                   {
                    this.state.items.map((value,i)=>{
                      return(
                        <Plan key={i} id={i} value={value} sandData={this.handleDel}/>
                      )
                    })
                   }
                    
                  </ul>
                </div>
            </div>
              </div>

        </div>
        
      </div>
    )
  }
}

export default App;

