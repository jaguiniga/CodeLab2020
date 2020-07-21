class PlayersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {player1: "", player2: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    
        this.setState({player1: event.target.value});  
      }
      handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.player1);
        event.preventDefault();
      }
    
      render() {
        return (
          <div>
          <h1>Players Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type = 'text'
              name = 'player1'
              value = {this.state.player1}
              onChange = {this.handleChange}
            />

            <input
              type = 'text'
              name = 'player3'
              value = {this.state.player2}
              onChange = {this.handleChange}
            />
            
            <button>Submit!</button>
            </form>
            </div>
      
        );
      }
  }