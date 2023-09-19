import React from 'react';
import css from 'profile.js/profile.module.css'
import PropTypes from 'prop-types'
export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <div className={css.profile}>

        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <div className={css.name}>
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>



            {<ul className={css.stats}>
                <li >
                    <span className={css.label}>Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>}
        </div>
    </div>
}
Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.array(PropTypes.any),
    views: PropTypes.array(PropTypes.any),
    likes: PropTypes.array(PropTypes.any),

}   
