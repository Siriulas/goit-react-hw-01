import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({friends}) {
    return (
    <div>
      <ul >
        {friends.map((item) => (
          <li key={item.id}>
            <FriendListItem friend={item} />
          </li>
        ))}
      </ul>
  </div>
    )
  }