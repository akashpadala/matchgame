import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <li className="header-card">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="web-logo"
        />
      </li>
      <li className="card-container">
        <p className="score">
          Score: <span className="score-num">{score}</span>
        </p>
        <li className="timer-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer"> {timer} sec </p>
        </li>
      </li>
    </li>
  )
}

export default Header
