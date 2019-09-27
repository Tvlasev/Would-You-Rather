import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({votesOptionOne, votesOptionTwo, votes}) => {

  const handleVotesProcent = () => {
    if(votesOptionOne !== undefined){
      const votesOptionOneProcent = ((votesOptionOne/votes)*100)
      return votesOptionOneProcent
    }else{
      const votesOptionTwoProcent = ((votesOptionTwo/votes)*100)
      return votesOptionTwoProcent
    }
  }

  return(
    <div className="progress-bar">
      <div className="filler" style={{ width: `${handleVotesProcent()}%` }}>
      {`${handleVotesProcent()}%`}
      </div>
    </div>
  )
}

export default ProgressBar