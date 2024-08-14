export default function FriendListItem 
({ friend: {isOnline, name, avatar} })
  {
    
    
    return (
      <li >
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p>{isOnline ? "Online" : "Offline"}</p>
      </li>
    )
  }