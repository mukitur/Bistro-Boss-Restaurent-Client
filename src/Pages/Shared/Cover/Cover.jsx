const Cover = ({ title, img, shortdescription }) => {
  return (
    <div
      className="hero h-[400px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl bg-slate-300 px-40 bg-opacity-10 py-10">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{shortdescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
