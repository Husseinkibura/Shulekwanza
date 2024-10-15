import { Box, Card, Typography } from '@mui/joy'
import React from 'react'
import StudentPerfomance from './StudentPerformance'
import StudentPerformanceChart from '../components/StudentPerformanceChart'

function dashboard() {
  return (

    
    <Box sx={{bgcolor:'' , padding:'5px', }}>
    
<Typography level='h4' sx={{pl:'5px'}}>Dashboard</Typography>
        <Box sx={{bgcolor:'', display:'flex', flexDirection:{
            xs:'column',
            sm:'column',
            md: 'row',
            lg: 'row'
        }, gap:'4px', alignItems:'center', justifyContent:'center', padding:'5px', mt:{sm:'10px', md:0, lg:0}}}>


            
            <Card sx={{ height: '100px', width: { md: '250px', xs: '100%' } , bgcolor:'#ffffff'}}>

                <Typography>Teachers</Typography>
                <Typography level='h1' sx={{mt:-2}}>26</Typography>

                 </Card>

                 <Card sx={{ height: '100px', width: { md: '250px', xs: '100%' } }}>

<Typography>Students enrolled</Typography>
<Typography level='h1' sx={{mt:-2}}>2,050</Typography>

 </Card>

 <Card sx={{ height: '100px', width: { md: '250px', xs: '100%' } }}>

<Typography>Parents</Typography>
<Typography level='h1' sx={{mt:-2}}>20</Typography>

 </Card>

 <Card sx={{ height: '100px', width: { md: '250px', xs: '100%' } }}>

<Typography>Students Graduated</Typography>
<Typography level='h1' sx={{mt:-2}}>1,500</Typography>

 </Card>

        </Box>
        <Box sx={{bgcolor:'', display:'flex', flexDirection:{
            xs:'column',
            sm:'column',
            md: 'row',
            lg: 'row'
        }, gap:'4px', alignItems:'center', justifyContent:'center', padding:'5px', mt:{sm:'10px', md:0, lg:0}}}>

            <Card sx={{width:'100%',  alignItems:'center', display:'flex', justifyContent:'center'}}>
               <Typography >Enrollment Trends</Typography>
                <StudentPerfomance />
            </Card>

            <Card sx={{width:'100%', alignItems:'center', display:'flex', justifyContent:'center'}}>
                Students Performance
                <StudentPerformanceChart/>
        
            </Card>

        </Box>
    </Box>

  )
}

export default dashboard
