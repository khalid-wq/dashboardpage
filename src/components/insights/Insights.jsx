import "./insights.scss"
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import vector4 from "../../images/Vector-4.png"
import Table from "../table/Table"
const Insights = () => {
  return (
    <div className="insights">
            <div className="title">
                    <h1>Internships</h1>
                    <div className="newIntern" >
                    <AddBoxOutlinedIcon/>
                    <span>Create New Internship</span>
                    </div>
              </div>
              <div className="container">
                    <div className="chartText">
                        <div className="text">
                             <h3>Internship Insights</h3>
                        
                            <p>In the eighteenth centry the 
                            German philosopher Immanuel 
                            Kant devloped a theory of knowledge in ehich knowledge 
                            about space can be both a 
                            prior and synthetic.
                        </p>
                        </div>         
                        <div className="chart">
                            <div className="filterBar">
                                      <div className="wrapper">
                                <div className="weekMonth" >
                                    <div className="week">
                                        <span>This week</span>
                                    </div>
                                    <div className="month">

                                        <span>This month</span>
                                    </div>
                                </div>
                                <div className="calender">
                                <CalendarTodayTwoToneIcon/>
                                    <span>Select Date</span>
                                </div>
                            </div>
                            </div>
                            {/* funnelllllllllllll */}
                            <div className="funnel">
                            
                                     <img src={vector4} alt="" />
                            
                                   
                                        <div className="box">
                                            
                                            <div className="futter">
                                                <span>100,000</span>
                                                <p>Total Enrolement</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        
                                            <div className="futter">
                                                <span>65,000</span>
                                                <p>Completion</p>
                                            </div>
                                        </div>
                                        <div className="box active">
                                            
                                            <div className="futter">
                                                <span>850</span>
                                                <p>Qualified Candidates</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            
                                            <div className="futter">
                                                <span>375</span>
                                                <p>Reached Out</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        
                                            <div className="futter">
                                                <span>300</span>
                                                <p>Interview Set</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            
                                            <div className="futter">
                                                <span>150</span>
                                                <p>Candidates Hired</p>
                                            </div>
                                        </div>
                                         </div>
                                    
                        </div>
                    </div>
              </div>
              <Table/>
    </div>
  )
}

export default Insights