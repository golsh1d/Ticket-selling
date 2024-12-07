import './App.css';

function App() {
  return (
    <div className='Ticket-selling-wrapper'>
      <div className='Ticket_selling-title'>Online Ticket Selling</div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Name'/>
      </div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Family Name'/>
      </div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Email'/>
      </div>
      <div className='Ticket-selling-input-wrapper'>
        <input type="text" placeholder='Phone Number'/>
      </div>
      <div className='Ticket-selling-select-wrapper'>
        <select>
          <option value="">Please select the destination country</option>
          <option value="Iran">Iran</option>
          <option value="England">England</option>
          <option value="United State Of America">United State Of America</option>
        </select>
      </div>
      <div className='Ticket-selling-select-wrapper'>
        <select>
          <option value="">Please select the cities of the destination country</option>
        </select>
      </div>
      <div className='Ticket-selling-btn-wrapper'>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default App;