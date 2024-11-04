const About = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
      <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
        We love
      </h1>
      <div className="stats bg-primary shadow">
        <div className="stat">
          <div className="stat-title text-primary-content text-4xl font-bold tracking-widest uppercase">
            Horizon
          </div>
        </div>
      </div>{" "}
      <div className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-justify">
        Welcome to Horizon Online Shop, where the possibilities are endless and
        the shopping experience is unparalleled. At Horizon, we redefine online
        shopping by offering a curated selection of high-quality products that
        cater to your diverse needs and desires. Our virtual shelves are stocked
        with a wide array of goods, from trendy fashion and cutting-edge
        electronics to home essentials and beyond.
        <br />
        <p>
          What sets Horizon apart is not just our product range, but the
          seamless and user-friendly shopping journey we provide. Navigating
          through our website is a breeze, ensuring you find what you're looking
          for effortlessly. Explore the horizon of possibilities as you discover
          the latest fashion trends, innovative gadgets, and must-have items for
          your home.
        </p>
        <br />
        <p>
          We pride ourselves on delivering not just products but an experience.
          With secure and convenient payment options, swift shipping, and a
          responsive customer support team, we prioritize your satisfaction
          every step of the way. Horizon is not just an online shop; it's a
          destination where your shopping aspirations meet reality.
        </p>
        <br />
        <p>
          Whether you're an avid fashionista, tech enthusiast, or someone
          seeking stylish home decor, Horizon Online Shop has something for
          everyone. Join us on this journey, and let Horizon be your go-to
          destination for all things stylish, functional, and on-trend. Your
          shopping adventure begins here!"
        </p>
      </div>
    </div>
  );
};
export default About;
