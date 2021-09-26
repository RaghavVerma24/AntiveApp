import { useState, useEffect } from "react";
// import { firebase } from "../../Signin/firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";
import { useAuth } from "../../Signin/context/AuthContext";
import db from "../../Signin/firebase";
//redux
import { useSelector, useDispatch } from "react-redux";


// export const useTasks = selectedProject => {
//   const [tasks, setTasks] = useState([]);
//   const [archivedTasks, setArchivedTasks] = useState([]);
//   // const {currentUser} = useAuth();
//   const { queryUser, currentUser } = useSelector((state) => state);


//   useEffect(() => {
//     let unsubscribe = db
//       .collection("tasks")
//       .where("userId", '==', currentUser.uid)

//     unsubscribe =
//       selectedProject && !collatedTasksExist(selectedProject)
//         ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
//         : selectedProject === "TODAY"
//         ? (unsubscribe = unsubscribe.where(
//             "date",
//             "==",
//             moment().format("DD/MM/YYYY")
//           ))
//         : selectedProject === "INBOX" || selectedProject === 0
//         ? (unsubscribe = unsubscribe.where("date", "==", ""))
//         : unsubscribe;

//     unsubscribe = unsubscribe.onSnapshot((snapshot) => {
//       const newTasks = snapshot.docs.map((task) => ({
//         id: task.id,
//         ...task.data(),
//       }));

//       setTasks(
//         selectedProject === "NEXT_7"
//           ? newTasks.filter(
//               (task) =>
//                 moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
//                 task.archived !== true
//             )
//           : newTasks.filter((task) => task.archived !== true)
//       );
//       setArchivedTasks(newTasks.filter(task => task.archived !== false));
//     });

//     return () => unsubscribe();
//   }, [selectedProject]);

//   return {tasks, archivedTasks};
// };

// export const useProjects = () => {
//     const [projects, setProjects] = useState([])
//     const {currentUser} = useAuth()

//     useEffect(() => {
//         db
//         .collection('projects')
//         // .where('userId', '==', 'CVYC6dr56B7rb7B78t76')
//         .where("userId", '==', currentUser.uid)
//         .orderBy('projectId')
//         .get()
//         .then(snapshot => {
//             const allProjects = snapshot.docs.map(project => ({
//                 ...project.data(),
//                 docId: project.id,
//             }))

//             if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
//                 setProjects(allProjects)
//             }
//         })
//     }, [projects])

//     return {projects, setProjects}
// }

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const {currentUser} = useAuth();

  useEffect(() => {
    let unsubscribe = db
      .collection("tasks")
      .where("userId", '==', currentUser.uid)

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return {tasks, archivedTasks};
};

export const useProjects = () => {
    const [projects, setProjects] = useState([])
    const {currentUser} = useAuth()

    useEffect(() => {
        db
        .collection('projects')
        // .where('userId', '==', 'CVYC6dr56B7rb7B78t76')
        .where("userId", '==', currentUser.uid)
        .orderBy('projectId')
        .get()
        .then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id,
            }))

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects)
            }
        })
    }, [projects])

    return {projects, setProjects}
}