import React, { useEffect, useState } from "react";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const linkStyles = {
    px: 2,
    py: 1,
    rounded: "md",
    color: "white",
    fontWeight: "semibold",
    fontSize: "sm",
    transition: "all 0.2s",
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      h="50px"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={scrolled ? "rgba(2, 12, 29, 1)" : "transparent"}
      transition="background-color 0.3s ease"
    >
      <HStack h={14} alignItems="center" w="90%" ml="2%" spacing="2%">
          <ScrollLink to="home" smooth={true} duration={500} offset={-40}>
            <Link {...linkStyles}>Home</Link>
          </ScrollLink>

          <ScrollLink to="experience" smooth={true} duration={500} offset={40}>
            <Link {...linkStyles}>Experience</Link>
          </ScrollLink>

          <Link href="./Divij_Garg_Resume_7-19-2025.pdf" isExternal {...linkStyles}>
            Resume
          </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
