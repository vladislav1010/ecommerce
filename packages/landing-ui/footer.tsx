import * as React from "react";
import { Box, BoxProps, chakra, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

// Compare with the original, с точки зрения соответствия абстракций соответствует проблеме
// M. Fowler Refactoring Move Function, Move field
// "ensure  related software elements are grouped together and the links between them are easy to find and understand"
// "obscure what the program is doing"
// "that match the problem, then my behavior code is simple and straightforward"

// Смотрю, что нужно сделать. Делаю, проверяю изменения. Цикл повторяется

// https://chakra-ui.com/guides/principles

// Compare with maintainability of their styles on different viewport widths
function Container({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      mx={"auto"}
      px={{ md: 0, lg: "10px", xl: 0 }}
      maxW={{ lg: "1150px" }}
      w={{ lg: "95%" }}
    >
      {children}
    </Box>
  );
}

// a1
// В т.ч. поведение при разных медиа запросах
function LinksColumn({
  title,
  items,
  ...rootProps
}: {
  title: string;
  items: { to: string; title: string }[];
} & BoxProps) {
  return (
    <Box
      // a2
      // Не вспомнил, зачем это. Только позже сообразил, что flex-grow: 1 здесь не играет роли, из-за flex-direction: column
      // flex="0 0 auto"
      {...rootProps}
      display={{ base: "flex", md: "block" }}
      alignItems="flex-start"
    >
      <Text textStyle="h5" fontSize="md" as="h5" flex="0 1 50%">
        {title}
      </Text>
      <Box mt={{ base: 0, md: "20px" }}>
        <chakra.ul
          m={0}
          p={0}
          display="flex"
          flexWrap="wrap"
          listStyleType="none"
          flexDirection="column"
          role="menu"
        >
          {items.map((x) => (
            <chakra.li role="none" pb="2px">
              <NextLink passHref href={x.to}>
                <Link role="menuitem" fontSize="md" textStyle="body">
                  {x.title}
                </Link>
              </NextLink>
            </chakra.li>
          ))}
        </chakra.ul>
      </Box>
    </Box>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return <Link href={href}>{icon}</Link>;
}

// a1
// Можно было извлечь layout в отдельные компоненты
// Но это не нужно, т.к. достаточно отчетливо видно, какие элементы что делают
// Где flex container, children, hypothetical size, ...
// Как и какие свойства css взаимодействуюь, чтобы получить желаемое поведение
function Footer() {
  const linksColumnProps: BoxProps = {
    flex: "0 0 auto",
  };

  return (
    <Container>
      <Flex
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        pt={{ base: "30px", md: "60px" }}
        pb={{ base: "30px", md: "50px" }}
      >
        <Box flex="0 0 auto">
          <Link
            lineHeight={"0"}
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="69.096" height="24">
    <path d="M9.43 20.26L12.34 20.26L12.34 3.58L8.11 3.58C3.86 3.58 1.63 5.76 1.63 8.98C1.63 11.54 2.86 13.06 5.04 14.62L1.25 20.26L4.39 20.26L8.62 13.94L7.15 12.96C5.38 11.76 4.51 10.82 4.51 8.81C4.51 7.03 5.76 5.83 8.14 5.83L9.43 5.83ZM47.57 19.44L47.57 17.11C46.68 17.71 45.19 18.24 43.80 18.24C41.71 18.24 40.92 17.26 40.80 15.24L47.69 15.24L47.69 13.73C47.69 9.53 45.84 7.94 42.98 7.94C39.50 7.94 37.85 10.61 37.85 14.26C37.85 18.46 39.91 20.50 43.56 20.50C45.38 20.50 46.73 20.02 47.57 19.44ZM65.42 20.50C66.74 20.50 67.68 20.26 68.38 19.75L68.38 17.42C67.66 17.93 66.79 18.24 65.59 18.24C63.55 18.24 62.71 16.66 62.71 14.16C62.71 11.54 63.74 10.20 65.62 10.20C66.72 10.20 67.80 10.58 68.38 10.94L68.38 8.52C67.78 8.18 66.72 7.94 65.30 7.94C61.66 7.94 59.76 10.56 59.76 14.23C59.76 18.26 61.61 20.50 65.42 20.50ZM21.41 8.18L21.41 12.96L17.59 12.96L17.59 8.18L14.74 8.18L14.74 20.26L17.59 20.26L17.59 15.22L21.41 15.22L21.41 20.26L24.26 20.26L24.26 8.18ZM37.15 18L35.88 18L35.88 8.18L27.55 8.18L27.55 9.22C27.55 12.17 27.36 15.98 26.35 18L25.46 18L25.46 23.02L28.10 23.02L28.10 20.26L34.51 20.26L34.51 23.02L37.15 23.02ZM56.69 20.26L59.93 20.26L55.34 13.75L59.38 8.18L56.50 8.18L52.46 13.75L52.46 8.18L49.61 8.18L49.61 20.26L52.46 20.26L52.46 14.33ZM42.94 10.20C44.35 10.20 44.78 11.38 44.78 12.89L44.78 13.13L40.80 13.13C40.87 11.21 41.57 10.20 42.94 10.20ZM33.02 18L28.99 18C29.78 16.18 30 12.89 30 10.80L30 10.44L33.02 10.44Z" />
</svg>
          </Link>
          <Box mt="15px">
            <Text textStyle="body" lineHeight={"none"}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text textStyle="body" lineHeight={"none"}>
            Sed vel cursus dolor
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
              href="https://t.me/"
              icon={
                <chakra.svg
                  borderRadius="999px"
                  display="inline-flex"
                  h="40px"
                  w="25px"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
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
          flex="0 1 auto"
          // a2
          alignItems={{ base: "stretch", md: "flex-start" }}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "flex-start", md: "space-between" }}
          w={{ base: "full", md: "55%" }}
          mt={{ base: "15px", md: 0 }}
        >
          <LinksColumn
            {...linksColumnProps}
            title="Platform"
            items={[
              { to: "/how-it-works-for-talent", title: "Talent" },
              { to: "/how-it-works-for-talent", title: "Enterprises" },
              { to: "/how-it-works-for-talent", title: "Payments + Fees" },
              { to: "/how-it-works-for-talent", title: "Dispute Resolution" },
              { to: "/how-it-works-for-talent", title: "FAQ" },
            ]}
          />
          <LinksColumn
            {...linksColumnProps}
            title="Platform"
            items={[
              { to: "/how-it-works-for-talent", title: "Docs" },
              { to: "/how-it-works-for-talent", title: "For Companies" },
              { to: "/how-it-works-for-talent", title: "For Freelancers" },
              { to: "/how-it-works-for-talent", title: "eBooks" },
              { to: "/how-it-works-for-talent", title: "Blog" },
              { to: "/how-it-works-for-talent", title: "Podcast" },
              { to: "/how-it-works-for-talent", title: "Webinars" },
            ]}
          />
          <LinksColumn
            {...linksColumnProps}
            title="Platform"
            items={[{ to: "/how-it-works-for-talent", title: "About" }]}
          />
        </Flex>
      </Flex>
      <Box>
        {/* a4 Смотрю обзор CSS. Цвет встречается на странице единажды - one-off */}
        <Text color="#444444" fontSize="10px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel cursus dolor. Quisque tincidunt vestibulum urna, at pretium ligula pellentesque ac. Praesent sit amet diam ut felis semper pretium quis ac nulla. Aenean molestie libero arcu, non lobortis nibh suscipit nec. Curabitur ut est ac elit varius semper sit amet sit amet metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut faucibus sapien at metus molestie efficitur. Phasellus in nisl blandit, egestas mauris ac, sagittis tortor. Duis bibendum arcu a lectus iaculis aliquam. Ut venenatis lectus eget felis dapibus, a viverra lacus malesuada.
        </Text>
      </Box>
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent="space-between"
        pt="30px"
        pb="50px"
        px={{ base: "15px", md: 0 }}
      >
        <Box flex="0 0 auto">
          {/* a5 Потом могу забыть причину, почему one-off, т.ч. оставил комментарий */}
          {/* one-off as is used only in footer on the index page */}
          <Text fontSize="md" color="#667" mb={{ base: "20px", md: 0 }}>
            ©Yoursite 2022
          </Text>
        </Box>
        <Box flex="0 1 auto">{/* TODO: */}</Box>
      </Box>
    </Container>
  );
}

export { Footer };
