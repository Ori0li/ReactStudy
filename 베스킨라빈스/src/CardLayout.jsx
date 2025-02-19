import "./card.css";

const CardLayout = () => {
  return (
    <>
      <article>
        <div className="card">
          <img src="../public/appleMint.png" alt="" />
          <p>애플민트</p>
        </div>
        <div className="card">
          <img src="../public/rainbow.png" alt="" />
          <p>레인보우 샤베트</p>
        </div>
        <div className="card">
          <img src="../public/berryBerry.png" alt="" />
          <p>베리베리 스토베리</p>
        </div>
      </article>
    </>
  );
};

export default CardLayout;
