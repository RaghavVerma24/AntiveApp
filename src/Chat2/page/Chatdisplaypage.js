import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../components/ChatFeed';
// import LoginForm from './components/LoginForm';
import '../styles/chatstyles.css';
import { useAuth } from '../../Signin/context/AuthContext';

const projectID = 'dd16ef6f-3567-4699-ab02-b0e7370f7d3e';


const Chatdisplaypage = () => {
//   if (currentUser) return <LoginForm />;
const {currentUser} = useAuth() 

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={currentUser.email}
      userSecret={currentUser.uid}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Chatdisplaypage;