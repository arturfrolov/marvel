import {Outlet, useOutlet} from "react-router-dom";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";


const ComicsPage = () => {
    const outLet = useOutlet();

    return (
        <>
            <AppBanner/>
            { outLet ? <Outlet/> : <ComicsList/> }
        </>
    )
}

export default ComicsPage;