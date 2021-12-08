
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box.component';

//The Class Method
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // using this lifecycle method to fetch array data from
  // jsonplaceholder API 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // taking response and converting it to json format so javascript can understand
    .then(users => this.setState({ monsters: users })) // set empty monster array to the user array
  }

  handleInputChange = (e) => {
    this.setState( { searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters" 
        handleChange={this.handleInputChange}
      />
      <CardList monsters={ filteredMonsters }/>
    </div>
    )
  }
}

export default App;
