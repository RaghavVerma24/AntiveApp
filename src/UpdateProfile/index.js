import React, { useRef, useState } from "react";
import { useAuth } from "../Signin/context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
} from "@chakra-ui/react";
import CenterContainer from "../Drive/utilities/CenterContainer";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== password2Ref.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="UpdateProfileBg">
    <CenterContainer>
      <Box w="sm" px="6" pt="8" borderWidth="2px" borderRadius="md">
        <Heading as="h2" fontSize="2xl" align="center" mb="4">
          Update Profile
        </Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        <Box as="form" onSubmit={handleSubmit}>
          <FormControl mb="3" id="email">
            <FormLabel>Email</FormLabel>
            <Input
              variant="flushed"
              type="email"
              name="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </FormControl>
          <FormControl mb="3" id="password">
            <FormLabel>New Password</FormLabel>
            <Input
              variant="flushed"
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Leave Blank To Keep It The Same"
            />
          </FormControl>
          <FormControl mb="3" id="password-confirm">
            <FormLabel>Confirm New Password</FormLabel>
            <Input
              variant="flushed"
              ref={password2Ref}
              type="password"
              name="password2"
              placeholder="Leave Blank To Keep It The Same"
            />
          </FormControl>
          <Center>
            <Button
              isLoading={loading}
              colorScheme="cyan"
              variant="ghost"
              w="100"
              type="submit"
              my="4"
            >
              Update
            </Button>
          </Center>
        </Box>
      </Box>
      <Box as="div" w="100" textAlign="center" mt="2">
        <Link to="/dashboard">
          <Button colorScheme="cyan" variant="ghost">
            Cancel
          </Button>
        </Link>
      </Box>
    </CenterContainer>
    </div>
  );
}
