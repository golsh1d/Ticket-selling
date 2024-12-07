import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nameInput : '' ,
      familyNameInput : '' , 
      emailInput : '' , 
      phoneNumberInput : '' , 
      destinations : {
        "" : [] ,
        Iran : ["Tehran" , "Esfahan" , "Shiraz" , "Tabriz" , "Karaj"] ,
        England : ["London"] ,
        US : ["New York" , "Los Angeles" , "California" , "Washington" , "Texas"] ,
      } ,
      cities : []
    }

    this.nameHandler = this.nameHandler.bind(this)
    this.familyNameHandler = this.familyNameHandler.bind(this)
    this.emailHandler = this.emailHandler.bind(this)
    this.phoneNumberHandler = this.phoneNumberHandler.bind(this)
    this.selectCountryHandler = this.selectCountryHandler.bind(this)

  }

  nameHandler(event) {
    this.setState({
      nameInput : event.nativeEvent.target.value 
    })
  }

  familyNameHandler(event) {
    this.setState({
      familyNameInput : event.nativeEvent.target.value 
    })
  }

  emailHandler(event) {
    this.setState({
      emailInput : event.nativeEvent.target.value 
    })
  }

  phoneNumberHandler(event) {
    this.setState({
      phoneNumberInput : event.nativeEvent.target.value 
    })
  }

  selectCountryHandler(event) {
    this.setState({
      cities : this.state.destinations[event.nativeEvent.target.value]
    })
  }

  render() {
    return (
      <div className='Ticket-selling-wrapper'>
      <div className='Ticket_selling-title'>Online Ticket Selling</div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Name' value={this.state.nameInput} onChange={(event) => this.nameHandler(event)}/>
      </div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Family Name' value={this.state.familyNameInput} onChange={(event) => this.familyNameHandler(event)}/>
      </div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Email' value={this.state.emailInput} onChange={(event) => this.emailHandler(event)}/>
      </div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Phone Number' value={this.state.phoneNumberInput} onChange={(event) => this.phoneNumberHandler(event)}/>
      </div>
      <div className='Ticket-selling-select-wrapper'>
        <select onChange={(event) => this.selectCountryHandler(event)}>
          <option value="">Please select the destination country</option>
          <option value="Iran">Iran</option>
          <option value="England">England</option>
          <option value="US">United State Of America</option>
        </select>
      </div>
      <div className='Ticket-selling-select-wrapper'>
        <select>
          {
            this.state.cities.length > 0 ?
            this.state.cities.map(city => (
              <option value={city}>{city}</option>
            )) : 
            <option value="">Please select the cities of the destination country</option>
          }
        </select>
      </div>
      <div className='Ticket-selling-btn-wrapper'>
        <button>Confirm</button>
      </div>
    </div>
    )
  }
}