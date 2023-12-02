import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><div>Home</div></Link>
        </li>
    
        <li>
          <Link to="/super-heroes">Traditional Super Heroes</Link>
        </li>

        <li>
          <Link to="/rq-super-heroes">RQ Super Heroes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
