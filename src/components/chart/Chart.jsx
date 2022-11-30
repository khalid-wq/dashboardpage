import "./chart.scss"
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
const data = [
   {name:"Monday", Total:100000},
   {name:"Tusday", Total:65000},
   {name:"wednsday", Total:850},
   {name:"thusday", Total:375},
   {name:"frieday", Total:300},
   {name:"sunday", Total:150},
  ];
const Chart = () => {
  return (
    <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
 
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart