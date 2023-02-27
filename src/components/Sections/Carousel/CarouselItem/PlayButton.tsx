import {
  Grid,
  Image,
  Box,
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import cssClasses from "./CarouselItemImage.module.css";

import React from "react";

const PlayButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      width={{ base: "4.5rem", md: "7.31rem", "2xl": "7vw" }}
      sx={{ aspectRatio: "117/48" }}
      gridColumn="1 / -1"
      gridRow="1 / -1"
      templateColumns="30% 1fr"
      alignItems="center"
      paddingLeft={{ base: "0.5rem", md: "0.5rem", "2xl": "0.4vw" }}
      borderRadius={{ base: "2rem", md: "2rem", "2xl": "2vw" }}
      bgColor="rgb(151, 151, 151, 0.25)"
      justifySelf={"center"}
      alignSelf={"center"}
      zIndex={1}
      opacity={0}
      className={cssClasses.play_button}
      as="button"
      onClick={onOpen}
    >
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            bgColor="brand.semiDarkBlue"
            // borderWidth="2px"
            borderColor="brand"
            color="white"
            maxW="80%"
          >
            <ModalHeader textStyle="headingS">Demo Application</ModalHeader>
            <ModalCloseButton />
            <ModalBody textStyle="paragraphMedium">
              Thank you for using our movie streaming web application! While we
              offer a wide variety of movies on our platform, please note that
              the movies you see are for demo purposes only and may or may not
              exist.
            </ModalBody>

            <ModalBody textStyle="paragraphMedium">
              For copyright reasons, we are unable to allow you to play any
              content on our platform, even if it is just for demonstration
              purposes.
            </ModalBody>

            <ModalFooter>
              <Button
                textStyle="paragraphMedium"
                colorScheme="red"
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Image
          src="/assets/icon-play.svg"
          alt="play icon"
          width="100%"
          borderRadius="1vw"
          zIndex={0}
        />
      </Box>
      <Text textStyle="headingXS">Play</Text>
    </Grid>
  );
};

export default PlayButton;
