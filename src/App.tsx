// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import Grid from "@mui/material/Grid";

function App() {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <Typography variant="h1" color="primary">
                            Silent D Gaming
                        </Typography>
                    </Grid>
                    <Grid size={6}>
                        <ButtonGroup variant="contained">
                            <Button>MCA</Button>
                            <Button>MCB</Button>
                            <Button>MCC</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="contained">
                            <Button>FDA</Button>
                            <Button>FDB</Button>
                            <Button>FDC</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="contained">
                            <Button>TDA</Button>
                            <Button>TDB</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid size={6}>Discord</Grid>
                    <Grid size={12}>Footer</Grid>
                </Grid>
                <Card>
                    <CardContent sx={{ boxShadow: 3, textAlign: "center" }}>
                        <Typography variant="h4" component="h1" color="#ff0000">
                            Vite + MUI + Sass
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Button variant="contained" color="success">
                            Success Button
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </>
    );

    //const [count, setCount] = useState(0)
    //
    // return (
    //   <>
    //     <div>
    //       <a href="https://vite.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //       <button onClick={() => setCount((count) => count + 1)}>
    //         count is {count}
    //       </button>
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to test HMR
    //       </p>
    //     </div>
    //     <p className="read-the-docs">
    //       Click on the Vite and React logos to learn more
    //     </p>
    //   </>
    // )
}

export default App;
