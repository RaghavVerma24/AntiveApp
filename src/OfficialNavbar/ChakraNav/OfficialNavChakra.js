//React SHit
import React, { useState } from "react";
import { useAuth } from "../../Signin/context/AuthContext";
import { useHistory, Link } from "react-router-dom";

//Styles/Icons
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { IoPawOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

//Components
import NavItem from "./NavItem";

export default function OfficialNavChakra() {
  const [navSize, changeNavSize] = useState("large");
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
      window.location.reload(false);
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      backgroundColor="#111827"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        backgroundColor="#111827"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          backgroundColor="#111827"
          mt={0}
          //   mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <Link to="/dashboard">
          <NavItem
            navSize={navSize}
            icon={RiDashboardFill}
            title="Dashboard"
            description="This is the description for the dashboard."
          />
        </Link>
        <Link to="/agenda">
          <NavItem navSize={navSize} icon={IoIcons.IoIosPaper} title="Agenda" />
        </Link>
        <Link to="/chat">
          <NavItem navSize={navSize} icon={FiUser} title="Chat" />
        </Link>
        <Link to="/budget">
          <NavItem
            navSize={navSize}
            icon={FaIcons.FaMoneyCheck}
            title="Budget"
          />
        </Link>
        <Link to="/drive">
          <NavItem navSize={navSize} icon={FaIcons.FaSave} title="Drive" />
        </Link>
        <Link to="/update-profile">
          <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
        </Link>
      </Flex>

      <Flex
        p="5%"
        backgroundColor="#111827"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
        // mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              {currentUser.displayName ||
                currentUser.email.substring(
                  0,
                  currentUser.email.lastIndexOf("@")
                )}
            </Heading>
            <Text onClick={handleLogout} cursor='pointer' color="gray" _hover={{ opacity: "50%" }}>Logout</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
