import FriendListItem from '../FriendListItem/FriendListItem'
import css from "./FriendList.module.css"


export default function FriendList({friends}) {
    return (

      <ul className={css.friendsContainer} >
        {friends.map((item) => {
          return (<li key={item.id} className={css.friendsList}>
            <FriendListItem friend={item} />
          </li>
          );
        })}
      </ul>

    )
  }