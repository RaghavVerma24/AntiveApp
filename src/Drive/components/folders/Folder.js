import { Box, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import folderIcon from "../../images/icons8-folder-512.png";
import { BsFillTrashFill, BsFillFolderFill } from "react-icons/bs";
import styled from "styled-components";
import { database, storage } from "../../../Signin/firebase";
import db from "../../../Signin/firebase";
import { useAuth } from "../../../Signin/context/AuthContext";
//redux
import { useSelector, useDispatch } from "react-redux";

const IconWrapper = styled.div`
  // position: absolute;
  // top: 150px;
  // left: 40px;
  cursor: pointer;
  width: 20px;

  &:hover {
    color: #081225;
    transition: all 0.3s ease-in-out;
  }
`;

const FolderIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 60px;
  font-size: 50px;
  margin: 0 auto;

  &:hover {
    color: #081225;
    transition: all 0.2s ease-in-out;
  }
`;

function Folder({ folder }) {
  const toast = useToast();
  const { currentUser } = useAuth;

  const deleteFolder = async () => {
    try {
      await database.folders.doc(folder.id).delete();
      toast({
        title: "Deleted",
        description: "folder deleted successfully!",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      display="block"
      borderRadius="md"
      borderWidth="2px"
      className="hoverAnim"
      transition="ease-in-out 0.1s"
    >
      <Link to={{ pathname: `/folder/${folder.id}`, state: { folder } }}>
        {/* <Image
          width="70px"
          fallbackSrc={folderIcon}
          margin="0 auto"
          src={folderIcon}
          alt={folder.name}
        /> */}
        <FolderIconWrapper>
          <BsFillFolderFill />
        </FolderIconWrapper>

        <Text isTruncated={true} as="h2" fontSize="xl" align="center" px="2">
          {folder.name}
          {/* <IconWrapper onClick={deleteFolder}>
            <BsFillTrashFill />
          </IconWrapper> */}
        </Text>
      </Link>
      <IconWrapper onClick={deleteFolder}>
        <BsFillTrashFill />
      </IconWrapper>
    </Box>
  );
}

export default Folder;
