import {Box, Image, Text} from "@chakra-ui/react"

export default function Explore() {
    return (
        <>
            <Box position={"relative"}>
                <Image src={"https://g1.iggcdn.com/assets/explore/desktop/campaign-d867fa38edb5ad270cd80df5816b0268df9e3bfa622a136e4fa9969c71156649.jpg"}></Image>
                <Box w={"100%"} color={"white"} className="explore-banner">
                    <Text fontSize={"5xl"}>Indiegogo Campaigns</Text>
                    <Text mt={4} fontSize={"2xl"}>Fund new and groundbreaking projects, including hits from Indiegogo InDemand</Text>
                </Box>
            </Box>
        </>
    )
}