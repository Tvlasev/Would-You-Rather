import React, { Component } from 'react'
import './NewQuestion.css'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { saveNewQuestion } from '../../actions/Questions'
import { Link } from 'react-router-dom'

class NewQuestion extends Component{

  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleInputChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  render(){
    const { optionOne, optionTwo} = this.state
    const {users, authUser} = this.props
    const allUsers = Object.values(users)
    const user = allUsers.find(user => user.id === authUser)
    return(
      <div className="new-question-container">
        <div>
          <img alt='user-avatar' src={user.avatarURL} />
          <h2>{user.id} asks</h2>
          <h3>Would You Rather</h3>
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            placeholder="Enter Option One"
            margin="normal"
            variant="outlined"
            name='optionOne'
            onChange={(e) => this.handleInputChange(e)}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            placeholder="Enter Option Two"
            margin="normal"
            variant="outlined"
            name='optionTwo'
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div>
          <Link to='/'>
            <Button 
              style={{marginTop: '20px'}} 
              fullWidth variant="contained" 
              color='primary'
              disabled={optionOne === '' || optionTwo === ''}
              onClick={this.props.saveNewQuestion({ optionOneText: this.state.optionOne, optionTwoText: this.state.optionTwo, authUser: user.id })}
            >
              Create Question
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    saveNewQuestion: (obj) => saveNewQuestion(obj)
  }
}

export default connect(null, mapDispatchToProps)(NewQuestion)