import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import './MyBackDrop.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
)

export default function MyBackDrop() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className="backdrop" style={{ margin: 32 }}>
      <Backdrop className={classes.backdrop} open={true} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
