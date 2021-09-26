import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { database } from "../../../Signin/firebase";
import { useAuth } from "../../../Signin/context/AuthContext";
import { ROOT_FOLDER } from "../../hooks/useFolder";
import { useDisclosure } from "@chakra-ui/hooks";
import './Modal.css'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding-top: 40px;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Fldrbutton = styled.div`
  background-color: #1A202C;
  color: white;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
`;

export const ModalDrive = ({ showModal, setShowModal, currentFolder }) => {
  const modalRef = useRef();
  const inputRef = useRef()
  const [name, setName] = useState("");
  const { currentUser } = useAuth();
  const {onClose} = useDisclosure()

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
    closeModal();
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent as="form" onSubmit={handleSubmit}>
                <h1 className="modalHeader">Create Your Folder!</h1>
                <div className='form-inputD'>
                <input
                  ref={inputRef}
                  className='form-inputsD'
                  type="text"
                  required
                  placeholder="Type Name Here..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                </div>
                <Fldrbutton type='submit'>Add Folder !</Fldrbutton>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
