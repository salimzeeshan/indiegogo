import { Box, Text, Flex, Divider, Button, Grid, GridItem, Heading } from "@chakra-ui/react"
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineHeart } from "react-icons/ai"
import { MdAccessTimeFilled } from "react-icons/md"
import {FaShareAltSquare} from "react-icons/fa"
import staffPicksData from "../components/staffPicksData"

export default function StaffPicks() {

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
    
    const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginTop: 6,
            marginBottom: 6
        }}
    />
    );

    return (
        <>
            <section>
                <Box>
                    <Box position={"relative"}>
                        <img style={{width: "100%", height: "350px", objectFit: "cover", filter: "brightness(50%)"}} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1441311610/rdre527vhsnrg20hjugp.jpg" alt="" />
                        <Box color={"white"} w={"100%"} className={"staff-banner"}>
                            <Text fontSize={"5xl"}>Indiegogo Team Favorites</Text>
                            <Text mt={4}>Campaigns we're loving this week</Text>
                        </Box>
                    </Box>
                    <Flex bg={"#f5f5f5"} px={"68px"} py={8} justifyContent={"space-between"}>
                        <Flex>
                            <Text><span style={{ fontWeight: "bold", marginRight: "5px" }}>145</span>projects</Text>
                            <Divider mx={4} orientation='vertical'></Divider>
                            <Text><span style={{ fontWeight: "bold", marginRight: "5px" }}>138k</span>backers</Text>
                            <Divider mx={4} orientation='vertical'></Divider>
                            <Text><span style={{ fontWeight: "bold", marginRight: "5px" }}>$51.3M</span>raised</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                            <Flex mr={6}>
                                <AiFillFacebook color="#e51074" className="staff-icons" />
                                <AiFillTwitterSquare color="#e51074" className="staff-icons" />
                                <FaShareAltSquare color="#e51074" className="staff-icons" />
                            </Flex>
                            <Button className="follow-button" variant={"outline"} borderColor={"#e51074"} leftIcon={<AiOutlineHeart color="#e51074" />}>FOLLOW</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Grid my={16} px={"60px"} textAlign={"left"} templateColumns={"repeat(4, 1fr)"} gap={10}>
                    {
                        staffPicksData.map((ele) => {
                            return (
                                <>
                                    <GridItem border={"1px solid lightgrey"} className={"pop-card"}>
                                        <img style={{width: "100%"}} src={ele.img} alt="" />
                                        <Box p={3}>
                                            <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                                                <Text fontSize={"sm"} color={"#088366"}>FUNDING</Text>
                                            </Flex>
                                            <Line color="lightgrey" />
                                            <Heading fontSize={"md"} mt={3}>{ele.title}</Heading>
                                            <Box h={"90px"}>
                                                <Text fontSize={"sm"} mt={2}>{ele.desc}</Text>
                                            </Box>
                                            <Text fontSize={"sm"} color={"#088366"} mb={3}>{ele.category}</Text>
                                            <Flex mb={2} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                                                <Flex alignItems={"end"}>
                                                    <Text as={"b"} mr={1}>{ele.raised}</Text>
                                                    <Text fontSize={"xs"} color={"grey"} mb="1.5px">{ele.currency}</Text>
                                                </Flex>
                                                <Flex alignItems={"end"}>
                                                    <Text fontSize={"sm"} color={"#6a6a6a"} mt={0.9}>{ele.percent}</Text>
                                                </Flex>
                                            </Flex>
                                            <ColoredLine color={"#33ca97"} />
                                            <Flex mt={2} alignItems={"center"}>
                                                <MdAccessTimeFilled color="#6a6a6a"/>
                                                <Text color={"#6A6A6A"} ml={1} fontSize={"xs"}>29 days left</Text>
                                            </Flex>
                                        </Box>
                                    </GridItem>
                                </>
                            )
                        })
                    }
                </Grid>
            </section>
        </>
    )
}