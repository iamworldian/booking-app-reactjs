import Style from './Navbar.module.css';

export const Navbar = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.logo}>
          <p>
            <span>Air</span> Booking
          </p>
        </div>
        <div className={Style.btnContainer}>
          <button className={`${Style.btn} ${Style.btnAccent}`}>Register</button>
          <button className={`${Style.btn} ${Style.btnAccent}`}>Login</button>
        </div>
      </div>
    </>
  );
};
