import React,{Component} from 'react';

import Machines from './components/machines';
import ModalMachine from './components/modals/modalMachine';

class App extends Component {
  state = {
    machines:[]
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/machine',{
      method: 'GET',
      headers: {'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then((jsonData) => {
      this.setState({ machines: jsonData })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
        <div><center><h1>Machine List</h1></center>
          <ModalMachine/>
          <Machines machines={this.state.machines}/>
        </div>
    );
  }
}

export default App;

