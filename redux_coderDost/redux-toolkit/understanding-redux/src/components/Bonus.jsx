const Bonus = ({ bonus, incrementBonus }) => {
  return (
    <div className='card'>
      <div className='container'>
        <h4>
          <b>Bonus Components</b>
        </h4>
        <h3>Total points: {bonus.points}</h3>
        <button onClick={incrementBonus}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;
