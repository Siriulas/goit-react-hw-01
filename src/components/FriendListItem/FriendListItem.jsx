import css from "./friendListItem.module.css"
import clsx from "clsx"

export default function FriendListItem 
({ friend: {isOnline, name, avatar} })
  {
    return (
      <div >
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
            <p
    
             className={clsx(
          css.friendStatus,
          isOnline ? css.isOnline : css.isOffline
        )}
        > {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    )
  }