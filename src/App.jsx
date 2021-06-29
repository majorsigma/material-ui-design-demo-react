import React from 'react';
import {
    Typography, AppBar, Card, CardActions, CardContent,
    CardMedia, CssBaseline, Grid, Toolbar, Container, Button,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

function App() {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" style={{ marginTop: '100px'}}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterbottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello every one this is a photo album and I wanna try to make this as long as possible so we could see how to it's gonna look like
                        </Typography>
                    </Container>
                    <div>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my Photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </main>

        </>
    );
}

export default App;