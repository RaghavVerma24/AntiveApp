//Styles
import {
  Box,
  Center,
  Progress,
  Text,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  Skeleton,
} from "@chakra-ui/react";
import { DriveTitle, DriveIconWrapper, DriveTextWrapper } from "./DashboardDriveElements";
import styled from "styled-components";
//import "../Dashboard/dashboard.css";
import "../../../Dashboard/dashboard.css"

//Icons
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";


//React Shit
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

//Components or Functionality
import { useFolder } from "../../hooks/useFolder";
import AddFileButton from "../Buttons/AddFileButton";
import AddFolderButton from "../Buttons/AddFolderButton";
import HomeButton from "../Buttons/HomeButton";
import FilesEmptyState from "../files/FilesEmptyState";
import FolderBreadCrumbs from "./FolderBreadCrumbs";
import FilesTable from "../files/FilesTable";
import FilesTableSkeleton from "../files/FilesTableSkeleton";
import FolderGrid from "../folders/FolderGrid";
import OfficialNav from "../../../OfficialNavbar/OfficialNav";

function DashboardDrive() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles, loading, foldersLoading } =
    useFolder(folderId, state.folder);
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");
  // const [isSmallerThan554] = useMediaQuery("(max-height: 554px)");
  const marginLeft554 = styled.div`
  @media screen and (max-height: 554px) {
      margin-left: 1rem;
    }
  }
  `
  // const marginLeftnormal = styled.div`
  // @media screen and (min-height: 555px) {
  //     margin-left: 2rem;
  //   }
  // }
  // `

  return (
    <>
      <div className="WholeDashboard">
        <OfficialNav />
      </div>
      <DriveTitle>
        <DriveIconWrapper>
          <BiIcons.BiLockAlt />
        </DriveIconWrapper>
        <DriveTextWrapper>Vault</DriveTextWrapper>
      </DriveTitle>
      <Box width="95%" px="8" py="4" pl="20">
      {/* <Box width="95%" px="8" py="4" marginLeft="2rem"> */}
        {/* TOP BUTTONS */}
        {isSmallerThan700 ? (
          <Menu isLazy placement="bottom">
            <MenuButton
              variant="outline"
              colorScheme="cyan"
              width="100%"
              as={Button}
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
            >
              Menu
            </MenuButton>
            <MenuList w="inherit">
              {/* <HomeButton variant="ghost" /> */}
              <MenuDivider />
              <AddFileButton
                currentFolder={folder}
                uploadingFiles={uploadingFiles}
                setProgress={setProgress}
                progress={progress}
                variant="ghost"
                setUploadingFiles={setUploadingFiles}
                btnWidth="100%"
              />
              <MenuDivider />
              <AddFolderButton
                variant="ghost"
                btnWidth="100%"
                currentFolder={folder}
              />
              <MenuDivider />
            </MenuList>
          </Menu>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            fontSize="xl"
            flexWrap="wrap"
          >
            {/* <HomeButton variant="outline" /> */}
            <AddFileButton
              currentFolder={folder}
              uploadingFiles={uploadingFiles}
              setProgress={setProgress}
              progress={progress}
              setUploadingFiles={setUploadingFiles}
              variant="outline"
            />
            <AddFolderButton currentFolder={folder} variant="outline" />
          </Box>
        )}

        {/* BREADCRUMBS */}

        <FolderBreadCrumbs currentFolder={folder} />
        <hr style={{ marginBottom: "2rem" }} />

        <Box>
          {/* FOLDERS */}

          {foldersLoading && (
            <>
              <Skeleton h="140px" w="100%" />
              <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />
            </>
          )}

          {childFolders.length > 0 && (
            <>
              <FolderGrid childFolders={childFolders} />
              <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />
            </>
          )}

          {/* FILES */}

          {loading && (
            <>
              <Text fontSize="3xl" fontWeight="600" mb={4}>
                Your Files
              </Text>
              <FilesTableSkeleton />
            </>
          )}
          {!loading && childFiles.length === 0 && (
            <>
              <Text fontSize="30px" fontWeight="600" mb={4}>
                Your Files
              </Text>
              <FilesEmptyState />
            </>
          )}
          {childFiles.length > 0 && (
            <>
              <Text fontSize="3xl" fontWeight="600" mb={4}>
                Your Files
              </Text>
              <FilesTable childFiles={childFiles}  />
            </>
          )}
        </Box>
      </Box>

      {/* PROGRESS BAR */}

      {uploadingFiles.length > 0 && (
        <Center>
          <Box
            borderWidth="2px"
            borderRadius="md"
            px="4"
            pos="absolute"
            bgColor="#3182ce"
            bottom="5%"
            width="80vw"
          >
            {uploadingFiles.map((file) => (
              <Box key={file.id} my="4">
                <Text fontSize="md">
                  {file.error
                    ? "Upload Failed!"
                    : `Uploading ${file.name} (${progress}%)`}
                </Text>
                <Progress
                  isIndeterminate={!file.error}
                  colorScheme={file.error ? "red" : "blue"}
                  value={100}
                  height="5px"
                />
              </Box>
            ))}
          </Box>
        </Center>
      )}
    </>
  );
}

export default DashboardDrive;
