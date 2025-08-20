function Header({currentScore, bestScore}) {
    return (
      <div className="header">
        <img src="../assets/marvelrivals-logo.png" alt="" />
        <div className="header-right">
          <h2>Current Score: {currentScore}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
      </div>
    );
  }
  
  export default Header;