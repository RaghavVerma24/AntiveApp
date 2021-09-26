import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../../Signin/firebase";
import { useAuth } from "../../../Signin/context/AuthContext";
import { ROOT_FOLDER } from "../../hooks/useFolder";
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 74%;
  z-index: 99999999999999;
`;


function AddFolderButton({ currentFolder, btnWidth, variant }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const { currentUser } = useAuth();
  const inputRef = useRef()
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (currentFolder === null) return;
    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }

    database.folders.add({
      name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      path,
      createdAt: database.getCurrentTimestamp(),
    });
    setName("");
    onClose();
  }
  return (
    <>
      <Button
        leftIcon={<FontAwesomeIcon icon={faFolderPlus} />}
        variant={variant}
        colorScheme="cyan"
        width={btnWidth}
        onClick={onOpen}
      >
        Create A Folder
      </Button>
      <Modal initialFocusRef={inputRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create A Folder</ModalHeader> */}
          <ModalCloseButton />
          <Box as="form" onSubmit={handleSubmit}>
            <ModalBody>
              <Input
              ref={inputRef}
                type="text"
                required
                placeholder="Folder Name"
                variant="flushed"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" colorScheme="blue" onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit" colorScheme="green">
                Submit
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddFolderButton;

