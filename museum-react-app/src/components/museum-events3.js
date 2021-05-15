import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class Module3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events3: [] };

  }

  fetchData = date => {api.events3({ page: date }).then(response => this.setState({events3: response}))}
  componentDidMount(){
    this.fetchData(this.props.date)
  
  }
  componentDidUpdate(prevProps){
    if(this.props.date!==prevProps.date) {
      this.fetchData(this.props.date)
    }

  }

  render() {
    
    return  <div>
      
    
    {this.state.events3.map((event3) => <div>{event3.nameOfMuseum}</div>)}
    {this.state.events3.map((event3) => <div>{event3.location}</div>)}
    {this.state.events3.map((event3) => <div>{event3.time}</div>)}
    
    
</div>
    
  }
}

export default Module3;
