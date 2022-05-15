import * as React from "react";
import { Box, chakra, Flex, Link, Text, useTheme } from "@chakra-ui/react";

// https://chakra-ui.com/guides/principles

// Compare with maintainability of their styles on different viewport widths
function Container({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      mx={0}
      px={{ md: 0, lg: "10px", xl: 0 }}
      maxW={{ lg: "1150px" }}
      w={{ lg: "95%" }}
    >
      {children}
    </Box>
  );
}

function LinksColumn({ children }: { children?: React.ReactNode }) {
  return <Box flex="0 0 auto">{children}</Box>;
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return <Link href={href}>{icon}</Link>;
}

function Footer() {
  return (
    <Container>
      <Flex
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
        pt="60px"
        pb="50px"
      >
        <Box flex="0 0 auto">
          <Link
            lineHeight={"0"}
            href="https://www.usebraintrust.com/"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.usebraintrust.com/hubfs/Braintrust%20(1).svg"
              alt="Braintrust"
            />
          </Link>
          <Box mt="15px">
            <Text textStyle="body" lineHeight={"none"}>
              Own it.
            </Text>
            <Text textStyle="body" lineHeight={"none"}>
              Your work. Your network. Your future.
            </Text>
          </Box>
          <Box
            sx={{
              "* + *": {
                ml: "25px",
              },
            }}
          >
            <SocialIcon
              href="https://t.me/braintrustofficial"
              icon={
                <chakra.svg
                  borderRadius="999px"
                  display="inline-flex"
                  h="40px"
                  w="25px"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  aria-labelledby="telegram6"
                  role="img"
                >
                  <title>Follow us on Telegram</title>
                  <g>
                    <path
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                      xmlns="http://www.w3.org/2000/svg"
                    ></path>
                  </g>
                </chakra.svg>
              }
            />
          </Box>
        </Box>
        <Flex
          flex="1 1 auto"
          alignItems="flex-start"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <LinksColumn />
          <LinksColumn />
          <LinksColumn />
        </Flex>
      </Flex>
      <Box></Box>
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent="space-between"
      >
        <Box flex="0 0 auto"></Box>
        <Box flex="0 1 auto"></Box>
      </Box>
    </Container>
  );
}

export { Footer };
