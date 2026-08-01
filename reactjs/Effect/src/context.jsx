import { createContext, useContext } from "react";

const MyContext = createContext();

export default function ContextApp() {
    const user = "Senorita";

    return (
        <MyContext.Provider value={user}>
            <Fun1 />
        </MyContext.Provider>
    );
}

function Fun1() {
    return <Fun2 />;
}

function Fun2() {
    const a = useContext(MyContext);

    return <h1>Heyy {a}</h1>;
}