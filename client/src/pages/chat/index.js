import styles from './styles.module.css';
import MessagesReceived from './messages';
import SendMessage from './send_message';
import RoomsAndUsersColumn from './room-and-users'

const Chat = ({ username, room ,socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomsAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;