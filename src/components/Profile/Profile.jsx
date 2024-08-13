import userData from "./components/Profile/Profile_Data.json";
export default function Profile() {
    return (
        <div>
            <ul>{[userData].map(user => {
                return <li>
                     <div>
                <img
                    src={user.image}
                    alt="User avatar"
                />
                <p>{user.name}</p>
                <p>{user.tag}</p>
                <p>{user.location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{user.stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{user.stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{user.stats.likes}</span>
                </li>
                </ul></li>;
            })}
           
                </ul>
        </div>
    );
    
}
 