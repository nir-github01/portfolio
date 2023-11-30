import { PortfolioList } from "../components/PortfolioList";

const Portfolio = () => {
  let Portfolios = PortfolioList.map((portfolio) => {
    return (
      <div key={portfolio.id} className="cardImg">
        <img
          className="portfolioImg"
          src={portfolio.titleImg}
          alt="screenshot"
        />
        <div className="cardBtn">
          <button className="dcbtn">Demo</button>
          <button className="dcbtn">Code</button>
        </div>
      </div>
    );
  });
  return (
      <div id="Portfolio" name="portfolio" className="portfolioContatiner">
        <div className="portfolioheading">
          <h1 >Portfolio</h1>
        </div>
        <div className='portfoliotitle'>
            <p>Check out some of my work right here</p>
          </div>
        <div className="card">{Portfolios}</div>
      </div>
  );
};

export default Portfolio;
