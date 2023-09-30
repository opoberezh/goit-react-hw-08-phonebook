import { Container } from "./Layout.stiled";
import {AppBar} from '../AppBar/AppBar';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
    return (
<Container>
    <AppBar/>
    <Suspense fallback={null}>
        <Outlet/>
    </Suspense>
    <Toaster position="top-right" reverseOrder={false} />
</Container>
    );
};