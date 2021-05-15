import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class Module extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

  }

  fetchData = date => {api.events({ page: date }).then(response => this.setState({events: response}))}
  componentDidMount(){
    this.fetchData(this.props.date)
  
  }
  componentDidUpdate(prevProps){
    if(this.props.date!==prevProps.date) {
      this.fetchData(this.props.date)
    }

  }

  render() {
  
    return <div>
      
      
    {this.state.events.map((event) => <div>{event.nameOfMuseum}</div>)}
    {this.state.events.map((event) => <div>{event.time}</div>)}
    {this.state.events.map((event) => <div>{event.location}</div>)}
    
    
</div>
    
  }
}

export default Module;
