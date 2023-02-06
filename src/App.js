import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AnimalsPage, CarsPage, HomePage, NotFoundPage, UsersPage} from "./pages";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'animals'} element={<AnimalsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route> 
        </Routes>
    );
};

export {App};