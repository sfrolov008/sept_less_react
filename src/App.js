import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'comments/:postId'} element={<PostPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};