import { Box, Grid, GridItem, Text, Flex, Input, Checkbox, Button } from "@chakra-ui/react"
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialLinkedin } from "react-icons/ti"
import { BsSpotify } from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {IoIosMail} from "react-icons/io"

export default function Footer() {
    return (
        <Box p={16} bg={"#f5f5f5"} h={"max-content"}>
            <Flex justifyContent={"space-between"}>
                <Grid width={"70%"} textAlign={"left"} templateColumns={"repeat(3, 1fr)"}>
                    <GridItem>
                        <Text color={"#6A6A6A"} mb={2}>EXPLORE</Text>
                            <a href="https://www.indiegogo.com/about/what-we-do">
                                <Text>What We Do</Text>
                            </a>
                            <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>Funding</Text>
                            </a>
                    </GridItem>
                    <GridItem>
                        <Text color={"#6A6A6A"} mb={2}>ABOUT</Text>
                            <a href="https://www.indiegogo.com/about/our-story">
                                <Text>About Us</Text>
                            </a>
                            <a href="https://www.indiegogo.com/blog">
                                <Text>Blog</Text>
                            </a>
                            <a href="https://www.indiegogo.com/trust">
                                <Text>Trust & Safety</Text>
                            </a>
                            <a href="https://support.indiegogo.com/hc/en-us">
                                <Text>Help & Support</Text>
                            </a>
                            <a href="https://www.indiegogo.com/contact/press">
                                <Text>Press</Text>
                            </a>
                            <a href="https://www.indiegogo.com/careers">
                                <Text>Careers</Text>
                            </a>
                            <a href="https://www.indiegogo.com/contact/questions">
                                <Text>Contact</Text>
                            </a>
                    </GridItem>
                    <GridItem>
                        <Text color={"#6A6A6A"} mb={2}>ENTREPRENEURS</Text>
                            <a href="https://www.indiegogo.com/about/what-we-do">
                                <Text>How It Works</Text>
                            </a>
                            <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>Indiegogo vs. Kickstarter</Text>
                        </a>
                        <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>Education Center</Text>
                        </a>
                        <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>Experts Directory</Text>
                        </a>
                        <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>Fees</Text>
                        </a>
                        <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>Enterprise</Text>
                        </a>
                        <a href="https://www.indiegogo.com/explore/all?project_type=campaign">
                                <Text>China</Text>
                        </a>
                    </GridItem>
                </Grid>
                <Flex w={"23%"} flexDirection={"column"} alignItems={"center"}>
                    <IoIosMail className="mail-icon" color="#e51074" />
                    <Text as={"b"}>Find it first on Indiegogo</Text>
                    <Text>Discover new and clever products in the Indiegogo newsletter</Text>
                    <Input mt={10} placeholder="Your email address"></Input>
                    <Checkbox colorScheme={"pink"} textAlign={"left"} mt={4}>I agree to the <span style={{color: "#e51074", textDecoration: "underline"}}>Terms of Use</span> and have read and understand the <span style={{color: "#e51074", textDecoration: "underline"}}>Privacy Policy</span></Checkbox>
                    <Button borderRadius={"3px"} mt={4} w={"100%"} color={"white"} bg={"#e51074"}>SIGN ME UP</Button>
                </Flex>
            </Flex>
            <Flex width={"200px"} justifyContent={"space-between"} alignItems={"center"} height={"max-content"}>
                    <TiSocialFacebook className="social-icons" color="black" />
                    <TiSocialTwitter className="social-icons" color="black" />
                    <TiSocialYoutube className="social-irons" color="black" />
                    <AiOutlineInstagram className="social-icons" color="black" />
                    <TiSocialLinkedin className="social-icons" color="black" />
                    <BsSpotify className="social-icons" color="black" />
            </Flex>
            <hr style={{ marginTop: "20px", color: "lightgrey", border: "1px solid lightgrey" }} />
            <Flex fontSize={"xs"} mx={"auto"} mt={5} w={"70%"} justifyContent="space-between" flexWrap={"wrap"}>
                <a href="https://www.indiegogo.com/about/terms">Terms of Use</a>
                <a href="https://www.indiegogo.com/about/privacy">Privacy Policy</a>
                <a href="https://www.indiegogo.com/">Cookie Policy</a>
                <a href="https://www.indiegogo.com/">Do Not Sell My Personal Information</a>
                <a href="https://www.indiegogo.com/about/accessibility">Accessibility</a>
                <Text>© 2020 Indiegogo, Inc. All Rights Reserved</Text>
            </Flex>
        </Box>
    )
}