import DirectoryMenu from "../components/directory-menu/directory-menu.component";
import './homepage.styles.scss'
import { Link } from "react-router-dom";
const Homepage = () => {
   return <div className="homepage">
        <DirectoryMenu/>
      </div>

}

export default Homepage;