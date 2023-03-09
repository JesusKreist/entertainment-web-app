import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePageStore } from "../../data/appState";

const DemoPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigateToHomepage = () => {
    router.push("/");
  };

  const handleDemo = async () => {
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
    <Box>
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="brand.semiDarkBlue"
          // borderWidth="2px"
          borderColor="brand"
          color="white"
          maxW="80%"
        >
          <ModalHeader textStyle="headingS">Demo User</ModalHeader>
          <ModalCloseButton />
          <ModalBody textStyle="paragraphMedium">
            We would like to inform you that the version of the web application
            you are currently viewing is a demo version. This means that the
            features and functionalities you see are only a preview of what the
            full version has to offer.
          </ModalBody>

          <ModalBody textStyle="paragraphMedium">
            We encourage you to explore the demo version and see what it can do.
            If you have any questions or feedback, please feel free to contact
            us. We value your input and are always looking for ways to improve
            our application.
          </ModalBody>

          <ModalFooter>
            <Button
              textStyle="paragraphMedium"
              colorScheme="red"
              onClick={handleDemo}
            >
              Explore application
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DemoPage;
