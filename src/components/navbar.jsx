import { Box, Image, Divider, Center } from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function Navbar() {
    return <Box fontSize={14.5} className="navbar" w="100%" display={"flex"} px={15} pr={25} alignItems={"center"} justifyContent="space-between" h={65} backgroundColor={"white"} zIndex={3}>
        <Box display={"flex"} alignItems={"center"} w={"max-content"}>
            <Link to={"/"}>
                <Image mr={7} w={158} src={"https://prod-backend-company-uploads-transcend-io.s3.amazonaws.com/57b21f6a-c3dd-4f0f-8004-f6dd369fabe2/50e3a960-4b80-46f3-b146-feddaa621ce0"} />
            </Link>
            <Box mr={25}>
                <Link to={"/explore"}>Explore</Link>
            </Box>
            <Box mr={25}>
                <Link to={"/top10"}>Our Top 10 Finds</Link>
            </Box>
            <Box mr={25}>
                <Link to={"/staff-picks"}>Team Favourites</Link>
            </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} w={"max-content"}>
            <Box ml={25}>
                <Link to={"/start-campaign"}>Start a Campaign</Link>
            </Box>
            <Box ml={25}>
                <Link to={"/what-we-do"}>What We Do</Link>
            </Box>
            <Center ml={25}>
                <Divider orientation='vertical' h='35px' />
            </Center>
            <Box ml={25}>
                <Link to={"/signup"}>Sign Up</Link>
            </Box>
            <Box ml={25}>
                <Link to={"/login"}>Login</Link>
            </Box>
        </Box>
    </Box>
}