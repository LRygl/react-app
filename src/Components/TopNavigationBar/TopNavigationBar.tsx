import "./TopNavigationBar.css";

interface TopNavigationBarProps {}

function TopNavigationBar() {
  return (
    <nav>
      <div>
        <img src="./../../../public/vite.svg" alt="" />
      </div>
      <div className="navigation">
        <div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div className="navLoginButton">
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default TopNavigationBar;
