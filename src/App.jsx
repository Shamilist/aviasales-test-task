import React from "react";
import { Filter } from './components/Filter'
import { Cards } from './components/Cards'
import { Logo } from './components/Logo'
import { FooterButton } from "./components/FooterButton";
import { Tabs } from "./components/Tabs";

const App = () => {
        return (
            <>
            <Logo />
            <Filter />
            <Tabs/>
            <Cards />
            <FooterButton />
            </>
        )
}

export default App;