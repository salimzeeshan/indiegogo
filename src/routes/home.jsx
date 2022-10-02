import { useState } from "react"
import sliderData from "../components/sliderData"
import { IoIosArrowDropleft, IoIosArrowDropright, IoMdHeartEmpty, IoIosArrowForward } from "react-icons/io"
import {MdAccessTimeFilled} from "react-icons/md"
import {Box, Button, Heading, Text, ButtonGroup, Flex, Grid, GridItem, Image} from "@chakra-ui/react"

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = sliderData.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

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
    <section className='slider' position={"relative"}>
      <Box className="slider-nav-container" mt={2}>
          <IoIosArrowDropleft className='slider-left' onClick={prevSlide} />
          <IoIosArrowDropright className='slider-right' onClick={nextSlide} />
      </Box>
      {sliderData.map((slide, index) => {
        return (
          <Box position={"relative"} className={"sliderBox"}>
                {index === currentSlide && (
                    <div position={"relative"}>
                        <img src={slide.url} className={"image"} alt={"slider"} />
                        <div position={"absolute"} className={"slider-text"}>
                            <Text as={"b"} fontSize={"xl"}>{slide.title}</Text>
                            <Text fontSize={"md"} mb={2} mt={0.5}>{slide.desc}</Text>
                            <Text as={"b"} fontSize={"sm"} className={"see-campaign"} cursor={"pointer"}>SEE CAMPAIGN</Text>
                        </div>
                    </div>
            )}
          </Box>
        );
      })}
      <Box>
            <Heading mt={6}>Find it first on Indigogo</Heading>
            <Text mt={2} mb={4}>Indiegogo is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</Text>
            <ButtonGroup>
                <Button _hover={{bg: "#b82368"}} cursor={"pointer"} mr={4} bg='#e51074' color={"white"}>SIGN UP NOW</Button>
                <Button variant='outline' color={"#e51074"}>LEARN MORE</Button>
            </ButtonGroup>
      </Box>
      <Box mb={16} px={"60px"} mt={10}>
        <Heading fontSize={"3xl"} textAlign="left">Popular Projects</Heading>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={10} mt={10} textAlign={"left"}>
            <GridItem border={"1px solid lightgrey"} className={"pop-card"}>
                <img  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/s3xrlyepynydsiafgc6t" alt="" />
                <Box p={3}>
                    <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Text fontSize={"sm"} color={"#088366"}>FUNDING</Text>
                        <IoMdHeartEmpty color="grey" />
                    </Flex>
                    <Heading fontSize={"md"} mt={3}>Dragonfly - Ride the World’s First Hyperscooter</Heading>
                    <Box h={"90px"}>
                        <Text fontSize={"sm"} mt={2}>4 wheels | Full Tilt Steering | 25 mph & 50-mile range | 350-lb Capacity | Only 39 lbs</Text>
                    </Box>
                    <Text fontSize={"sm"} color={"#088366"} mb={3}>TRANSPORTATION</Text>
                    <Flex mb={2} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Flex alignItems={"end"}>
                            <Text as={"b"} mr={1}>£192.238</Text>
                            <Text fontSize={"xs"} color={"grey"} mb="1.5px">GBP raised</Text>
                        </Flex>
                        <Flex alignItems={"end"}>
                            <Text fontSize={"sm"} color={"#6a6a6a"} mt={0.9}>769%</Text>
                        </Flex>
                    </Flex>
                    <ColoredLine color={"#33ca97"} />
                    <Flex mt={2} alignItems={"center"}>
                        <MdAccessTimeFilled color="#6a6a6a"/>
                        <Text color={"#6A6A6A"} ml={1} fontSize={"xs"}>29 days left</Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem border={"1px solid lightgrey"} className={"pop-card"}>
                <img  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/unt9fguohgl1jbr9laxr" alt="" />
                <Box p={3}>
                    <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Text fontSize={"sm"} color={"#088366"}>FUNDING</Text>
                        <IoMdHeartEmpty color="grey" />
                    </Flex>
                    <Heading fontSize={"md"} mt={3}>Cocinare KRUSH: Make Ice Cream Anytime Anywhere</Heading>
                    <Box h={"90px"}>
                        <Text fontSize={"sm"} mt={2}>World's First Wireless & Portable Ice Cream Maker For You To Make Healthy Ice Cream On-The-Go</Text>
                    </Box>
                    <Text fontSize={"sm"} color={"#088366"} mb={3}>HOME</Text>
                    <Flex mb={2} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Flex alignItems={"end"}>
                            <Text as={"b"} mr={1}>$233,604</Text>
                            <Text fontSize={"xs"} color={"grey"} mb="1.5px">HKD raised</Text>
                        </Flex>
                        <Flex alignItems={"end"}>
                            <Text fontSize={"sm"} color={"#6a6a6a"} mt={0.9}>2,336%</Text>
                        </Flex>
                    </Flex>
                    <ColoredLine color={"#33ca97"} />
                    <Flex mt={2} alignItems={"center"}>
                        <MdAccessTimeFilled color="#6a6a6a"/>
                        <Text color={"#6A6A6A"} ml={1} fontSize={"xs"}>29 days left</Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem border={"1px solid lightgrey"} className={"pop-card"}>
                <img  src="https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/qvsjwipj03zv3zbguhss" alt="" />
                <Box p={3}>
                    <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Text fontSize={"sm"} color={"#088366"}>FUNDING</Text>
                        <IoMdHeartEmpty color="grey" />
                    </Flex>
                    <Heading fontSize={"md"} mt={3}>Freewrite Alpha: Distraction- Free Writing Anywhere</Heading>
                    <Box h={"90px"}>
                        <Text fontSize={"sm"} mt={2}>Distraction-free, portable, flow-state writing. 100 hr battery life. No eye-strain. Cloud Synced.</Text>
                    </Box>
                    <Text fontSize={"sm"} color={"#088366"} mb={3}>PRODUCTIVITY</Text>
                    <Flex mb={2} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Flex alignItems={"end"}>
                            <Text as={"b"} mr={1}>$291,695</Text>
                            <Text fontSize={"xs"} color={"grey"} mb="1.5px">USD raised</Text>
                        </Flex>
                        <Flex alignItems={"end"}>
                            <Text fontSize={"sm"} color={"#6a6a6a"} mt={0.9}>1,167%</Text>
                        </Flex>
                    </Flex>
                    <ColoredLine color={"#33ca97"} />
                    <Flex mt={2} alignItems={"center"}>
                        <MdAccessTimeFilled color="#6a6a6a"/>
                        <Text color={"#6A6A6A"} ml={1} fontSize={"xs"}>29 days left</Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem border={"1px solid lightgrey"} className={"pop-card"}>
                <img  src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/hmxtob09zezutksbpsgw" alt="" />
                <Box p={3}>
                    <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Text fontSize={"sm"} color={"#088366"}>FUNDING</Text>
                        <IoMdHeartEmpty color="grey" />
                    </Flex>
                    <Heading fontSize={"md"} mt={3}>Edge 2.5D - 4K wireless monitor touchscreen</Heading>
                    <Box h={"90px"}>
                        <Text fontSize={"sm"} mt={2}>4K/FHD | 82ft range | Zero lag | DeX | Mac | PC | Android | NS | PS | Xbox | mm-Wave | Multi-touch |</Text>
                    </Box>
                    <Text fontSize={"sm"} color={"#088366"} mb={3}>PRODUCTIVITY</Text>
                    <Flex mb={2} alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
                        <Flex alignItems={"end"}>
                            <Text as={"b"} mr={1}>$1.272.795</Text>
                            <Text fontSize={"xs"} color={"grey"} mb="1.5px">HKD raised</Text>
                        </Flex>
                        <Flex alignItems={"end"}>
                            <Text fontSize={"sm"} color={"#6a6a6a"} mt={0.9}>42,132%</Text>
                        </Flex>
                    </Flex>
                    <ColoredLine color={"#33ca97"} />
                    <Flex mt={2} alignItems={"center"}>
                        <MdAccessTimeFilled color="#6a6a6a"/>
                        <Text color={"#6A6A6A"} ml={1} fontSize={"xs"}>28 days left</Text>
                    </Flex>
                </Box>
            </GridItem>
        </Grid>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={10} mt={16}>
            <GridItem>
                      <Box>
                          <Box>
                              <Box position={"relative"} width="100%">
                                  <img width={"100%"} className={"coll-img"} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664384340/dxlpczk2t7etftjh21st.jpg" alt="" />
                                  <div className="coll-text">
                                      <Text color={"white"} as={"b"} fontSize={"4xl"} top={10}>10 Cool & Clever Finds</Text>
                                  </div>
                              </Box>
                          </Box>
                          <Flex mt={2} justifyContent={"space-between"} width={"100%"}>
                              <Text>Our roundup of standup projects</Text>
                              <Flex alignItems={"center"}>
                                  <Text mb={1} mr={1}>See the collection</Text>
                                  <IoIosArrowForward color="black" />
                              </Flex>
                          </Flex>
                      </Box>
            </GridItem>
            <GridItem>
                      <Box>
                          <Box>
                              <Box position={"relative"} width="100%">
                                  <img width={"100%"} className={"coll-img"} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664384293/po4aiqjrnquowbppa89z.jpg" alt="" />
                                  <div className="coll-text">
                                      <Text color={"white"} as={"b"} fontSize={"4xl"} top={10}>Team Favourites</Text>
                                  </div>
                              </Box>
                          </Box>
                          <Flex mt={2} justifyContent={"space-between"} width={"100%"}>
                              <Text>Dream Glass Flow & more team favorites</Text>
                              <Flex alignItems={"center"}>
                                  <Text mb={1} mr={1}>See the collection</Text>
                                  <IoIosArrowForward color="black" />
                              </Flex>
                          </Flex>
                      </Box>
            </GridItem>
            <GridItem>
                      <Box>
                          <Box>
                              <Box position={"relative"} width="100%">
                                  <img width={"100%"} className={"coll-img"} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png" alt="" />
                                  <div className="coll-text">
                                      <Text color={"white"} as={"b"} fontSize={"4xl"} top={10}>Spend Under $100</Text>
                                  </div>
                              </Box>
                          </Box>
                          <Flex mt={2} justifyContent={"space-between"} width={"100%"}>
                              <Text>Check out these innovative steals</Text>
                              <Flex alignItems={"center"}>
                                  <Text mb={1} mr={1}>See the collection</Text>
                                  <IoIosArrowForward color="black" />
                              </Flex>
                          </Flex>
                      </Box>
            </GridItem>
            <GridItem>
                      <Box>
                          <Box>
                              <Box position={"relative"} width="100%">
                                  <img width={"100%"} className={"coll-img"} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664579598/z2wgrbg96hedz6mee1uq.jpg" alt="" />
                                  <div className="coll-text">
                                      <Text color={"white"} as={"b"} fontSize={"4xl"} top={10}>Spooky Season</Text>
                                  </div>
                              </Box>
                          </Box>
                          <Flex mt={2} justifyContent={"space-between"} width={"100%"}>
                              <Text>Horror games, films, podcasts, and more for Halloween!</Text>
                              <Flex alignItems={"center"}>
                                  <Text mb={1} mr={1}>See the collection</Text>
                                  <IoIosArrowForward color="black" />
                              </Flex>
                          </Flex>
                      </Box>
            </GridItem>
        </Grid>
        <Box mt={16} position="relative">
            <img width={"100%"} src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/homepage/cf-bg-desktop-lg.jpg" alt="" />
            <Flex w={"50%"} className="learn-crowd" flexDirection={"column"} alignItems={"center"}>
                <Text fontSize={"3xl"}>Back the project, take the ride</Text>
                <Text textAlign={"left"} mt={4}>Indiegogo is your destination for clever innovations in tech, design, and more, often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the risks and rewards of bringing new products to life.</Text>
                <Flex alignItems={"center"} mt={4}>
                    <Text mb={1} mr={1}>See the collection</Text>
                    <IoIosArrowForward color="black" />
                </Flex>
            </Flex>
        </Box>
        <Box mt={10}>
            <Box>
                <Text fontSize={"2xl"}>Which categories interest you?</Text>
                <Text  mt={2} fontSize={"sm"}>Discover projects just for you and get great recommendations when you select your interests.</Text>
                <Button mt={4} variant={"outline"}>SIGN UP AND SELECT INTERESTS</Button>
            </Box>
        </Box>
        <Box mt={10}>
            <Box>
                <Text fontSize={"2xl"}>From the Indiegogo Review</Text>
                <Text  mt={2} fontSize={"sm"}>Your behind-the-scenes view of the people and stories behind Indiegogo projects</Text>
            </Box>
        </Box>
        <Grid mt={10} templateColumns={"repeat(3, 1fr)"} gap={10}>
            <GridItem textAlign={"left"}>
                <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660231108/h3ayekkkolooq5k9ilvq.png"></Image>
                <Text mt={4}>Indiegogo and StartEngine Join Forces</Text>
                <Text color={"grey"} mt={1}>How to raise more funds after your campaign</Text>
                <Flex alignItems={"center"} mt={3}>
                    <Text mb={1} mr={1} as="b" fontSize={"md"}>LEARN MORE</Text>
                    <IoIosArrowForward color="black" />
                </Flex>
            </GridItem>
            <GridItem textAlign={"left"}>
                <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660454271/xq8oqua1iie8y5abbxoi.png"></Image>
                <Text mt={4}>I Tried This Mini Gaming Handheld For A Day</Text>
                <Text color={"grey"} mt={1}>We review the new Ayaneo Air and put it to the test!</Text>
                <Flex alignItems={"center"} mt={3}>
                    <Text mb={1} mr={1} as="b" fontSize={"md"}>LEARN MORE</Text>
                    <IoIosArrowForward color="black" />
                </Flex>
            </GridItem>
            <GridItem textAlign={"left"}>
                <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660288199/ak5wz5zhr0ghiwwravay.png"></Image>
                <Text mt={4}>5 New Gadgets Under $100</Text>
                <Text color={"grey"} mt={1}>Which ones will you fund next?</Text>
                <Flex alignItems={"center"} mt={3}>
                    <Text mb={1} mr={1} as="b" fontSize={"md"}>LEARN MORE</Text>
                    <IoIosArrowForward color="black" />
                </Flex>
            </GridItem>
        </Grid>
        <Box mt={16} w="70%" mx={"auto"}>
            <Heading mt={6}>Clever Things For Curious Humans™</Heading>
            <Text mt={2} mb={4}>There’s no better place to start the hunt for something new and special. Begin on Indiegogo to find clever and unconventional things that solve everyday problems large and small.</Text>
            <ButtonGroup>
                <Button _hover={{bg: "#b82368"}} cursor={"pointer"} mr={4} bg='#e51074' color={"white"}>SIGN UP NOW</Button>
                <Button variant='outline' color={"#e51074"}>LEARN MORE</Button>
                </ButtonGroup>
        </Box>
        </Box>
        </section>
  );
};