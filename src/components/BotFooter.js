const year = new Date().getFullYear();
const BotFooter = () => {
  return (
    <div className="SWpurple border-top border-5 border-dark">
      <div className="my-2" href="/">
        <img
          className="rounded img-fluid my-2"
          alt="Logo with S and W for SpiderWeb on a multicolored web"
        />
      </div>
      <br />
      <p className="text-white">
        &copy; {year} SpiderWeb LLC. All Rights Reserved.{" "}
      </p>
    </div>
  );
};

export default BotFooter;
