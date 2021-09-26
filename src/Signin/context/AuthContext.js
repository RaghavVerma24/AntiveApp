import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import db from "../firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, username) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}


// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   function signup(email, password, username) {
//     const slug = generateUserSlug(username);
//     let promise = new Promise(function (resolve, reject) {
//     auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((ref) => {
//       ref.user.updateProfile({
//         displayName: slug,
//         photoURL:
//           'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
//       });
//       db.collection('userProfile')
//         .doc(slug)
//         .set({
//           id: slug,
//           email,
//           username,
//           photoURL:
//             'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
//           bio: '',
//           website: '',
//           phone: '',
//         })
//         .then(() => {
//           resolve(slug);
//         });
//     })
//     .catch((error) => reject(error));
// });

// return promise;
// };

//   const login = (email, password) => {
//     let promise = new Promise(function (resolve, reject) {
//       auth
//         .signInWithEmailAndPassword(email, password)
//         .then((ref) => {
//           resolve(ref.user.displayName);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });

//     return promise;
//   };

//   function logout() {
//     return auth.signOut();
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
//   }

//   function updateEmail(email) {
//     return currentUser.updateEmail(email);
//   }

//   function updatePassword(password) {
//     return currentUser.updatePassword(password);
//   }

//   const updateProfileImage = (file) => {
//     let promise = new Promise(function (resolve, reject) {
//       UploadImage(file).then((url) => {
//         auth.currentUser
//           .updateProfile({
//             photoURL: url,
//           })
//           .then(() => {
//             db.collection("userProfile")
//               .doc(auth.currentUser.displayName)
//               .update({
//                 photoURL: url,
//               })
//               .then(() => {
//                 resolve("Profile Image Updated");
//               })
//               .catch((error) => {
//                 reject(error);
//               });
//           });
//       });
//     });

//     return promise;
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, [currentUser]);

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword,
//     updateProfileImage,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }