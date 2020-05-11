import React,{Component} from 'react';
import {CardList} from './card_list/card-list.components';
import {Search} from './search/search.component'

import './App.css';
class App extends Component
{
  constructor()
  {
    super()
    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount()
  {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(user=>this.setState({monsters:user}))
  }
  render()
  {
    const {monsters,searchField}=this.state;
    const monsterSearch=monsters.filter(
      mon=>mon.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return(
      <div className='App'>
        <h1 className='head-h1'>Monster Rolodex </h1>
        <Search placeholder='enter monster name' handleChange={e=>this.setState({searchField:e.target.value})}></Search>
        <CardList monsters={monsterSearch}></CardList>
      </div>
    )
  }
}


export default App;
