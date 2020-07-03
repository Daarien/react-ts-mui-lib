import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { styled, makeStyles, createStyles } from '../components/styles';
import { Paper, Grid } from '../components';
import ButtonsPage from './ButtonsPage';
import InputsPage from './InputsPage';

export default function Main() {
  const classes = useStyles();
  return (
    <Container>
      <header>
        <Link to="/">
          <h2>Main page</h2>
        </Link>
      </header>
      <main>
        <Paper className={classes.paper}>
          <Switch>
            <Route exact path="/" component={NavPage} />
            <Route path="/buttons" component={ButtonsPage} />
            <Route path="/inputs" component={InputsPage} />
          </Switch>
        </Paper>
      </main>
      <footer>
        <hr />
        <Grid container justify="center">
          SberUser UI Library
        </Grid>
      </footer>
    </Container>
  );
}

function NavPage() {
  const routes = ['buttons', 'inputs'];
  return (
    <main>
      <ul>
        {routes.map((route) => (
          <li key={route}>
            <Link to={`/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

const Container = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
  '& > main': {
    flexGrow: 1,
  },
  '& > footer': {
    paddingBottom: 16,
  },
}));

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
  }),
);
