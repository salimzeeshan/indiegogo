import { Box, Text, Button, Flex, Grid, GridItem } from "@chakra-ui/react"
import { AiFillFacebook, AiOutlineTwitter, AiOutlineHeart } from "react-icons/ai"
import top10Data from "../components/top10Data"

export default function Top10() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 7,
                borderRadius: 5,
            }}
        />
    );

    return (
        <>
            <Box bg={"#f5f5f5"} px={"60px"} py={10}>
                <Box w={"600px"} m={"auto"}>
                    <hr style={{ border: "2px solid #E51075", width: "120px", margin: "auto", marginBottom: "25px" }} />
                    <Text as={"b"} fontSize={"4xl"}>10 Cool & Clever Finds</Text>
                    <Text mt={2}>Discover your next "a-ha" moment in our roundup of standout projects, from live crowdfunding & InDemand campaigns to innovative products shipping now.</Text>
                    <Flex mt={4} w={"80%"} mx={"auto"} justifyContent={"space-between"}>
                        <Button padding={"0px 35px"} leftIcon={<AiFillFacebook />} color={"white"} bg={"#3f5c9d"}>SHARE</Button>
                        <Button padding={"0px 35px"} leftIcon={<AiOutlineTwitter />} color={"white"} bg={"#2c99d8"}>TWEET</Button>
                        <Button padding={"0px 35px"} variant={"outline"} leftIcon={<AiOutlineHeart color="#E51075" />} color={"#E51075"} borderColor="#E51075">FOLLOW</Button>
                    </Flex>
                </Box>
                <Grid mt={16} templateColumns={"repeat(2, 1fr)"} gap={10}>
                    {
                        top10Data.map((ele) => {
                            return ( <>
                                    <GridItem key={ele.id} textAlign={"left"} border={"1px solid lightgrey"} className={"pop-card"}>
                                        <img width={"100%"}  src={ele.img} alt="" />
                                        <Box p={8}>
                                            <Text as={"b"} fontSize={"md"} color={"#088366"}>FUNDING</Text>
                                            <Box mt={4} mb={4}>
                                                <hr style={{border: "3px solid lighgray"}} />
                                            </Box>
                                            <Box h={"70px"}>
                                                <Text as={"b"} fontSize={"2xl"} mt={3}>{ele.title}</Text>
                                            </Box>
                                            <Box h={"70px"}>
                                            <Text color={"grey"} fontSize={"xl"} mt={2}>{ele.desc}</Text>
                                            </Box>
                                            <Flex mb={2} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                                                <Flex alignItems={"end"}>
                                                    <Text fontSize={"xl"} as={"b"} mr={2}>{ele.raised}</Text>
                                                    <Text fontSize={"md"} color={"grey"} mb="1.5px">{ele.currency}</Text>
                                                </Flex>
                                                <Flex alignItems={"end"}>
                                                    <Text as={"b"} fontSize={"md"} color={"#6a6a6a"} mt={0.9}>{ele.percent}</Text>
                                                </Flex>
                                            </Flex>
                                            <ColoredLine color={"#33ca97"} />
                                        </Box>
                                </GridItem>
                                </>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}