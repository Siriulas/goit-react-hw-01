
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import ProfileList from "../ProfileList/ProfileList";
import ProfileData from "../Profile/ProfileData.json"


export default function App() {
  return (
    <div>
      <ProfileList users = {ProfileData}
      />
    </div>
  );
};
