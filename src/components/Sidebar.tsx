import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { closeSidebar } from '../utilis';
import { Link } from 'react-router-dom';



function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: 'grid',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          },
          open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        // position: { xs: 'fixed', md: 'sticky' },
        position: 'fixed',
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        mt: 'var(--Header-height)',
        p: 1,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>

        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      {/* <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" /> */}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <Link to="/">
          <ListItem>
            <ListItemButton>
              <GridViewOutlinedIcon  />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>


          <Link to="/school">
          <ListItem>
          
            <ListItemButton>
              <ApartmentRoundedIcon/>
              <ListItemContent>
                <Typography level="title-sm">School</Typography>
              </ListItemContent>
            </ListItemButton>
      
          </ListItem>
          </Link>

          <Link to="/Teachers">
          <ListItem>
            <ListItemButton >
              <PersonRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Teachers</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>

            {/* Add Students and View Students Nested Menu */}
          <ListItem nested>
          <Toggler
            renderToggle={({ open, setOpen }) => (
              <ListItemButton onClick={() => setOpen(!open)}>
                <MenuBookOutlinedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Students</Typography>
                </ListItemContent>
                <KeyboardArrowDownIcon
                  sx={[
                    open
                      ? {
                          transform: 'rotate(180deg)',
                        }
                      : {
                          transform: 'none',
                        },
                  ]}
                />
              </ListItemButton>
            )}
          >
            <List sx={{ gap: 0.5 }}>
              <Link to="/Add-students">
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>Add Students</ListItemButton>
                </ListItem>
              </Link>
              <Link to="/view-students">
                <ListItem>
                  <ListItemButton>View Students</ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Toggler>
          </ListItem>
          <ListItem nested>
          <Toggler
            renderToggle={({ open, setOpen }) => (
              <ListItemButton onClick={() => setOpen(!open)}>
                <AssignmentRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Academics</Typography>
                </ListItemContent>
                <KeyboardArrowDownIcon
                  sx={[
                    open
                      ? {
                          transform: 'rotate(180deg)',
                        }
                      : {
                          transform: 'none',
                        },
                  ]}
                />
              </ListItemButton>
            )}
          >
            <List sx={{ gap: 0.5 }}>
              <Link to="/examinations">
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>Examinations</ListItemButton>
                </ListItem>
              </Link>

              <ListItem>
                <ListItemButton>Classes</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Subjects</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Results</ListItemButton>
              </ListItem>
            </List>
          </Toggler>
        </ListItem>

          <Link to="/sms">
          <ListItem>
            <ListItemButton
              role="menuitem"
              component="a"
            //   href=""
            >
              <QuestionAnswerRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">SMS</Typography>
              </ListItemContent>
              <Chip size="sm" color="primary" variant="solid">
                4
              </Chip>
            </ListItemButton>
          </ListItem>
          </Link>

        </List>

   
      </Box>



      {/* <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Siriwat K.</Typography>
          <Typography level="body-xs">siriwatk@test.com</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral">
          <LogoutRoundedIcon />
        </IconButton>
      </Box> */}
    </Sheet>
  );
}
