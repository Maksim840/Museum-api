import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class Module2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events2: [] };

  }

  fetchData = date => {api.events2({ page: date }).then(response => this.setState({events2: response}))}
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
      
      
    {this.state.events2.map((event2) => <div>{event2.nameOfMuseum}</div>)}
    {this.state.events2.map((event2) => <div>{event2.review}</div>)}
    {this.state.events2.map((event2) => <div>{event2.namesOfPeople}</div>)}
    
    
</div>
  }
}

export default Module2;
