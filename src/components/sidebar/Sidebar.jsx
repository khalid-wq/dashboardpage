import "./sidebar.scss"
import RadicalLogo from "../../images/RadicallX-Black-Logo 1.png"
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img src={RadicalLogo} alt="" />
       
        
            <ul>
                <li>
                    <DashboardTwoToneIcon/><span>Dashboard</span></li>
                <li>
                   <WorkspacePremiumTwoToneIcon/> <span>Apprenterships</span></li>
                <li className="active">
                <MenuBookTwoToneIcon/><span >Internships</span></li>
                <li>
                <WorkTwoToneIcon/><span>Jobs</span></li>
                <li>
                <SettingsTwoToneIcon/><span>Settings</span></li>
            </ul>
         </div>
        <div className="bottom">
            <div className="photo"></div>
            <span>Adam Scott</span>
        </div>
    </div>
  )
}

export default Sidebar