export default function Result({resultValues, numTotalVotes, index}) {

  const [resultTitle, resultVotes] = resultValues;
  const style = {
    width: `${Math.max(resultVotes / numTotalVotes * 100, 0)}%`,
    // backgroundColor: 'red',
  }
  // if (Math.max(resultVotes / numTotalVotes) >= 0.5) {
  //   style.backgroundColor = 'goldenrod';
  // }

  return (
    <li className="result">
      <p className="result__title">{resultTitle}</p>
      <div style={style} className="result__bar" aria-hidden="true">
        <p className="result__title result__title-light">{resultTitle}</p>
      </div>
      
      {/* <p className="result__title">{resultTitle} <span className="result__title__num-votes">({resultVotes} votes)</span></p>
      <div style={style} className="results__list__bar"></div> */}
    </li>
  );
}