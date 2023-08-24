import React from "react";
import { Filter } from './components/Filter'
import { Card } from './components/Card'
import { Logo } from './components/Logo'
import { FooterButton } from "./components/FooterButton";

const App = () => {
        return (
            <>
            <Logo />
            <Filter />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <FooterButton />
            </>
        )
}

export default App;