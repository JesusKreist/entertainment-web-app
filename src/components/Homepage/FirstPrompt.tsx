import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type FirstPromptProps = {
  currentAppMode: "normal" | "demo" | "unset" | undefined;
  updateAppMode: (appMode: "normal" | "demo") => void;
};

const FirstPrompt: React.FC<FirstPromptProps> = ({
  currentAppMode,
  updateAppMode,
}) => {
  const router = useRouter();
  const { onClose } = useDisclosure();

  const navigateToHomepage = () => {
    router.push("/");
  };

  const handleClosePrompt = () => {
    updateAppMode("normal");
    onClose();
  };

  const handleDemo = async () => {
    updateAppMode("demo");
    const response = await signIn("credentials", {
      email: "demo@example.com",
      password: "password",
      redirect: false,
    });

    if (response?.error) {
      throw new Error(response.error);
    }

    navigateToHomepage();
  };

  return (
    <Modal isOpen={currentAppMode === "unset"} onClose={handleClosePrompt}>
      <ModalOverlay />
      <ModalContent
        bgColor="brand.semiDarkBlue"
        // borderWidth="2px"
        borderColor="brand"
        color="white"
        width={{
          base: "87vw",
          sm: "min(87vw, 400px)",
          md: "25rem",
          "2xl": "28vw",
        }}
      >
        <ModalHeader textStyle="headingS">Choose your experience</ModalHeader>
        <ModalCloseButton />
        <ModalBody textStyle="paragraphMedium">
          How would you like to use the app?
        </ModalBody>

        <ModalFooter>
          <Button
            textStyle="paragraphMedium"
            // variant={"ghost"}
            colorScheme="blue"
            mr={3}
            onClick={handleClosePrompt}
          >
            Normal Mode
          </Button>

          <Button
            textStyle="paragraphMedium"
            colorScheme="red"
            onClick={handleDemo}
          >
            Demo Mode
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FirstPrompt;
