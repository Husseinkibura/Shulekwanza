import * as React from 'react'
import GlobalStyles from '@mui/joy/GlobalStyles'
import Sheet from '@mui/joy/Sheet'
import IconButton from '@mui/joy/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../lg.png'

import { toggleSidebar } from '../utilis'
import { Avatar, Box } from '@mui/joy'
import { Typography } from '@mui/joy'

export default function Header () {
  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1'
        // boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={theme => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '60px'
            }
          }
        })}
      />
      <Box sx={{display: 'flex', gap: 1, alignItems: 'center' }}>
      <Avatar
        src={logo}
        srcSet={logo}
        sx={{ maxWidth: '40px', maxHeight: '40px' }}
      />
      <Typography  level="title-lg">ShuleKwanza</Typography>

      </Box>

     
      <IconButton
        onClick={() => toggleSidebar()}
        variant='outlined'
        color='neutral'
        size='sm'
        sx={{
          display: {
            sm: 'flex', // Show on small screens
            md: 'none' // Hide on medium and larger screens
          }
        }}
      >
        <MenuIcon />
      </IconButton>
    </Sheet>
  )
}
