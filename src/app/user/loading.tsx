const loading = () => {
    return (
      <main className="h-screen">
        <div className="spinnerContainer">
          <div className="loader">
            <p>Loading</p>
            <div className="words">
              <span className="word">Portfolio</span>
              <span className="word">Coins</span>
              <span className="word">Rates</span>
              <span className="word">Deposits</span>
              <span className="word">Balance</span>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default loading;
  