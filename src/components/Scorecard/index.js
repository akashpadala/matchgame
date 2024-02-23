import './index.css'

const Scorecard = props => {
  const {score, clickPlayAgain} = props

  const onClickPlayAgain = () => {
    clickPlayAgain()
  }

  return (
    <div className="score-card-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-title"> YOUR SCORE </p>
      <h1 className="scorecard-num"> {score} </h1>
      <button
        className="play-again-btn"
        type="button"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default Scorecard
