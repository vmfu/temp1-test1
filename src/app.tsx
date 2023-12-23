import type React from 'react';
import { st, classes } from './app.st.css';
import { Header } from './header';
import { Form1 } from './components/form-1/form-1';

export interface AppProps {
    className?: string;
}


export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <Header className={classes.header} />
            <Form1 /></main>
    );
};
