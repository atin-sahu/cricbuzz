import {
    Box,
    Divider,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect } from "react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  export const SpecialNews = () => {
    const [specialNews, setSpecialNews] = useState([]);
  
    const getSpecialNews = async () => {
      const data = await axios({
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/news/v1/cat/5",
        headers: {
          "X-RapidAPI-Key": "b1233bd737mshb48e280eeb863f7p111f8djsn735cbb71628c",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      }).then((data) => data.data.storyList);
      console.log("special news", data);
      setSpecialNews(data);
    };
  
    useEffect(() => {
      getSpecialNews();
    }, []);
  
    return (
      <Box p={5}>
        <Heading fontSize={"2xl"}>Specials</Heading>
        <Box>
          {specialNews.map((news) => 
            {
              return news.story ? (
                <Box key={news.story.id}>
                  <Flex direction={{ base: "column", xl: "row" }} gap={2} mt={5}>
                    <Box flex={4}>
                      <Link to="">
                        <Image
                          objectFit="cover"
                          minH="200px"
                          rounded="2xl"
                          src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236020/hardik-to-captain-in-ireland-t.jpg"
                        ></Image>
                      </Link>
                    </Box>
                    <Box flex={8}>
                      <Text
                        textTransform="capitalize"
                        noOfLines={1}
                        fontSize={"sm"}
                        mb={2}
                      >{news.story.storyType}	• {news.story.context}
                      </Text>
                      <Link to="">
                        <Text
                          noOfLines={2}
                          fontWeight="bold"
                          fontSize="xl"
                          mb={2}
                        > {news.story.hline}</Text>
                      </Link>
                      <Text noOfLines={3} mb={2}>{news.story.intro}</Text>
                      <Text fontSize={"xs"}></Text>
                    </Box>
                  </Flex>
                  <Divider mt={5} mb={5}></Divider>
                </Box>
              ) : (
                ""
              );
            }
          )}
        </Box>
      </Box>
    );
  };
  