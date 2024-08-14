import css from "./profile.module.css"
export default function Profile({image, name, tag, location, followers, views, likes}) {
    return (
        <div className={css.containerList}>
           
             <div className={css.containerWrap}>
                <img className={css.userPhoto}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.userName}>{name}</p>
                <p className={css.userData}>{tag}</p>
                <p className={css.userData}>{location}</p>
            </div>

            <ul className={css.container}>
                <li className={css.userItem}>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li className={css.userItem}>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li className={css.userItem}>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
                </ul>

        </div>
    );
    
}
    