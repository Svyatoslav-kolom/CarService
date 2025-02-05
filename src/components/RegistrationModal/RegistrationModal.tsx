import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { RegistrationForm } from "../RegistrationForm";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay backdropFilter="blur(10px)" />
    <ModalContent maxW="300px">
      <ModalHeader>Registration</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <RegistrationForm onSuccess={onClose} />
      </ModalBody>
    </ModalContent>
  </Modal>
);
