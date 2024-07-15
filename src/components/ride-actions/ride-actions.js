import React from 'react';
import { Button, ButtonGroup } from '@mui/material';


export const RideActions = ({ setEventsFilter }) => {
    const styles = {
        actionContainer: {
            height: '56px',
            width: '100%'
        },
        actionButton: {
            width: '100%',
            height: '56px',
            borderRadius: '0'
        },
    }

  return (
    <ButtonGroup 
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        sx={styles.actionContainer}
    >
        <Button
            variant="contained"
            fullWidth
            size='large'
            disableElevation
            disableRipple
            aria-label="Edit Event"
            sx={styles.actionButton}
            onClick={ () => setEventsFilter('nearby') }
        >
            Nearby
        </Button>
        <Button
            variant="contained"
            fullWidth
            size='large'
            disableElevation
            disableRipple
            destination="/rides/going"
            sx={styles.actionButton}
            onClick={ () => setEventsFilter('rsvp') }
        >
            RSVP'd
        </Button>
        <Button
            variant="contained"
            fullWidth
            size='large'
            disableElevation
            disableRipple
            sx={styles.actionButton}
            onClick={ () => setEventsFilter('hosting') }
        >
            Hosting
        </Button>
    </ButtonGroup>
  )
}
