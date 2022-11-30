import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import chart from "../../images/Qualified-Candidates.png"
// import logo from "../../images/Buttons-group.png"
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
const table = () => {
    const rows = [
        {
            title:"Product Design GVI",
            period:120 ,
            total:"20,000",
            qualification:120,
            logo:"",
        },
        {
            title:"Product Design GVI",
            period:120 ,
            total:"20,000",
            qualification:120,
            logo:"",
        },
        {
            title:"Product Design GVI",
            period:120 ,
            total:"20,000",
            qualification:120,
            logo:"",
        },
        {
            title:"Product Design GVI",
            period:120 ,
            total:"20,000",
            qualification:120,
            logo:"",
        },
        {
            title:"Product Design GVI",
            period:120 ,
            total:"20,000",
            qualification:120,
            logo:"",
        },
    ]
  return   <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow >
        <TableCell className="tablecell action">
                <div className="tablehead">
                      <span>Internship Title</span> <ExpandCircleDownOutlinedIcon/> 
                </div>
            </TableCell>

        <TableCell className="tablecell action">
        <div className="tablehead">
                     <span>Completion Period</span> <ExpandCircleDownOutlinedIcon/>
                    </div>           
            </TableCell>

        <TableCell className="tablecell action">
        <div className="tablehead">
                      <span>Total Enrolled</span> <ExpandCircleDownOutlinedIcon/>
                    </div>          
            </TableCell>

        <TableCell className="tablecell action">
        <div className="tablehead">
                      <span>Qualification Candidats</span> <ExpandCircleDownOutlinedIcon/>
                    </div>          
            </TableCell>

        <TableCell className="tablecell action"></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.title}
          
        >
          <TableCell className="tablecell">
            <div className="GVI">{row.title}</div>
            <p>Amet minim mollit non deserunt <br /> est sit aliqua dolor do amet sint. </p>
          </TableCell>
          <TableCell className="tablecell">
            <div className="period"> {row.period} days
            <p>(created on 10/12/2021)</p></div>
           </TableCell>
          <TableCell className="tablecell">
            <div className="total">{row.total}</div></TableCell>
          <TableCell className="tablecell">
            <div className="qualif">
                <span>{row.qualification}</span>
            <img src={chart} alt="" />
            </div></TableCell>
          <TableCell className="tablecell">
            <div className="logo">{row.logo}
                <BarChartRoundedIcon className="icon"/>
                <PeopleRoundedIcon className="icon"/>
                <WorkspacesOutlinedIcon className="icon"/>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
}

export default table