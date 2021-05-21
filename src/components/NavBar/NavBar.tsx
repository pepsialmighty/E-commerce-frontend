import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import clsx from 'clsx'
import {
  fade,
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HomeIcon from '@material-ui/icons/Home'
import PaymentIcon from '@material-ui/icons/Payment'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import jwt from 'jsonwebtoken'

import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { Link } from 'react-router-dom'

import './NavBar.scss'
import { AppState } from '../../types'
import { getUserSearch, logout, verifiedAdmin } from '../../redux/actions'
import { CartItems } from '../../types/cart.type'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    drawerLink: {
      textDecoration: 'none',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: 56,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
)

const NavBar = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const cart = useSelector((state: AppState) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    userInfo && dispatch(verifiedAdmin(JSON.parse(userInfo)))
  }, [])

  const userInfo = useSelector(
    (state: AppState) => state.authentication.userInfo
  )

  const userInfoFromLocalStorage = localStorage.getItem('userInfo')

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setOpen(open)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const getProductCount = () => {
    const getItemFromLocalStorage = localStorage.getItem('cartItems')

    if (cartItems.length === 0 && getItemFromLocalStorage !== null) {
      const itemFromLocalStorage: CartItems[] = JSON.parse(
        getItemFromLocalStorage
      )
      return itemFromLocalStorage.reduce(
        (qty, item) => Number(item.qty) + qty,
        0
      )
    } else {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
  }

  const handleLogout = () => {
    dispatch(logout(history))
  }

  const handleChange = (event: any) => {
    let userInput = {
      input: event.target.value,
    }
    dispatch(getUserSearch(userInput.input))
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userInfoFromLocalStorage && userInfo.isAdmin === true && (
        <Link
          to="/admin"
          style={{ width: '100%', textDecoration: 'none', color: 'black' }}
        >
          <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
        </Link>
      )}
      <Link
        to="/profile"
        style={{ width: '100%', textDecoration: 'none', color: 'black' }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {userInfoFromLocalStorage ? (
        <div>
          <MenuItem>
            <Typography className={classes.title} variant="h6" noWrap>
              Hello {userInfo.username}
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </div>
      ) : (
        <div>
          <Link
            to="/signin"
            style={{ width: '100%', textDecoration: 'none', color: 'black' }}
          >
            <MenuItem>
              <IconButton aria-label="Sign in" color="inherit">
                <FingerprintIcon />
              </IconButton>
              <p>Sign In</p>
            </MenuItem>
          </Link>
          <Link
            to="/signup"
            style={{ width: '100%', textDecoration: 'none', color: 'black' }}
          >
            <MenuItem>
              <IconButton aria-label="Sign in" color="inherit">
                <DirectionsWalkIcon />
              </IconButton>
              <p>Sign Up</p>
            </MenuItem>
          </Link>
        </div>
      )}
      <Link
        to="/cart"
        style={{ width: '100%', textDecoration: 'none', color: 'black' }}
      >
        <MenuItem>
          <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={getProductCount()} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                marginRight: 16,
                padding: 8,
              }}
            >
              <Typography className={classes.title} variant="h6" noWrap>
                Home
              </Typography>
            </Link>
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {userInfoFromLocalStorage ? (
              <div style={{ marginTop: 7 }}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="display user name"
                  style={{ marginRight: 0 }}
                >
                  <Typography className={classes.title} variant="h6" noWrap>
                    Hello {userInfo.username}
                  </Typography>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            ) : (
              <div>
                <IconButton>
                  <Link
                    to="/signin"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      padding: 8,
                    }}
                  >
                    <Typography className={classes.title} variant="h6" noWrap>
                      Sign In
                    </Typography>
                  </Link>
                </IconButton>
                <IconButton>
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: 4,
                      padding: 8,
                    }}
                  >
                    <Typography className={classes.title} variant="h6" noWrap>
                      Sign Up
                    </Typography>
                  </Link>
                </IconButton>
              </div>
            )}
            <IconButton
              edge="end"
              aria-label="go to cart page"
              color="inherit"
              style={{ marginBottom: 8 }}
            >
              <Link
                to="/cart"
                style={{
                  width: '100%',
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <Badge badgeContent={getProductCount()} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={getProductCount()} color="secondary">
                <MoreIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link
            style={{ width: '100%', textDecoration: 'none', color: 'black' }}
            className={classes.drawerLink}
            to="/"
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link
            style={{ width: '100%', textDecoration: 'none', color: 'black' }}
            className={classes.drawerLink}
            to="/cart"
          >
            <ListItem button>
              <ListItemIcon>
                <Badge badgeContent={getProductCount()} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText>My Cart</ListItemText>
            </ListItem>
          </Link>
          <Link
            style={{ width: '100%', textDecoration: 'none', color: 'black' }}
            className={classes.drawerLink}
            to="/checkout"
          >
            <ListItem button>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText>Check Out</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link
            style={{ width: '100%', textDecoration: 'none', color: 'black' }}
            className={classes.drawerLink}
            to="/profile"
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>User Profile</ListItemText>
            </ListItem>
          </Link>
          {userInfo && userInfo.isAdmin === true && (
            <Link
              style={{ width: '100%', textDecoration: 'none', color: 'black' }}
              className={classes.drawerLink}
              to="/admin"
            >
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText>Admin Page</ListItemText>
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

export default NavBar
