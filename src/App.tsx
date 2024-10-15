import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Typography from '@mui/joy/Typography'
import { Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import School from './pages/School'
import Teachers from './pages/Teachers'
import Students from './pages/Students'
import Dashboard from './pages/Dashboard'
import SMS from './pages/SMS'
import Examinations from './pages/Examinations'
import AddStudents from './pages/Add-students'


export default function JoyOrderDashboardTemplate () {

  // Header Component
  function Head() {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '64px', // Adjust based on your design
          backgroundColor: '#1976d2', // Change as needed
          zIndex: 1000, // Ensures the header stays above other components
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography>
          My App Header
        </Typography>
        <Button>Login</Button>
      </Box>
    );
  }

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
     
      <Box sx={{ display: 'flex', minHeight: '100dvh' , backgroundColor:'#f2f2f2'}}>
        <Head />  {/* Use the Head component here */}
        <Header />
        <Sidebar />

        <Box
          component='main'
          className='MainContent'
          sx={{
            mt: { 
              xs:'0px',
              sm:'var(--Header-height)',
              md:'var(--Header-height)'
            },
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(var(--Header-height))',
              sm: 'calc(var(--Header-height))',
              md: 3
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            marginLeft: {sx:0, md:'var(--Sidebar-width)'}, // Add space for the sidebar
            padding: 2,
            gap: 1
          }}
        >
          <Box sx={{ display: 'flex', mb: 1, gap: 1, flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'start', sm: 'center' }, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          </Box>

          <Box sx={{}}>
            <Routes>
              <Route path='/teachers' element={<Teachers />} />
              <Route path='/students' element={<Students />} />
              <Route path='/school' element={<School />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='/sms' element={<SMS />} />
              <Route path='/examinations' element={<Examinations />} />
              <Route path='/add-students' element={<AddStudents />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  )
}
