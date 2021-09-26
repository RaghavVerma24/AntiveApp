//React Shit
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

//Icons
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import FilesEmptyState from "../../Drive/components/files/FilesEmptyState";
import FilesTable from "../../Drive/components/files/FilesTable";
import FilesTableSkeleton from "../../Drive/components/files/FilesTableSkeleton";
import FolderBreadCrumbs from "../../Drive/components/layout/FolderBreadCrumbs";
import FolderGrid from "../../Drive/components/folders/FolderGrid";

//Functionality
import { useFolder } from "../../Drive/hooks/useFolder";

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

function DriveDash() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { childFiles, loading } = useFolder(folderId, state.folder);
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <Box width="100%" px="8" py="4">
        <Box>
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
              <Text fontSize="3xl" fontWeight="600" mb={4}>
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
              <FilesTable childFiles={childFiles} />
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default DriveDash;
