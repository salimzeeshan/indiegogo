import { Routes, Route } from "react-router-dom"
import Login from "../components/login"
import Signup from "../components/signup"
import Explore from "./explore"
import Home from "./home"
import PageNotFound from "./pagenotfound"
import StaffPicks from "./staff-picks"
import Top10 from "./top10"
import WhatWeDo from "./whatwedo"

export default function AllRoutes (){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/explore" element={<Explore />}></Route>
                <Route path="/what-we-do" element={<WhatWeDo />}></Route>
                <Route path="/staff-picks" element={<StaffPicks />}></Route>
                <Route path="/top10" element={<Top10 />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}