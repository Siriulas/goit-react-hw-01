import Profile from "../Profile/Profile";

export default function ProfileList(users) {
    return (
        <ul>
            {users.map(item => {
                return (
                    <li key={item.id}>
                        <Profile user={item} />
                    </li>
                )
            })}
        </ul>
    );
    
}