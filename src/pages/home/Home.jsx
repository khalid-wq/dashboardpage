
import Insights from "../../components/insights/Insights"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
            <Sidebar/>
            <Insights/>
    </div>
  )
}

export default Home