import css from 'components/friends/friendList.module.css'
// import PropTypes from 'prop-types'
export const FriendListItem = ({ friends }) => {
    return <ul className={css.friendList}>
        {
            friends.map(({ id, avatar, name, isOnline }) =>
                < li className={css.item} key={id} >
                    <span className={isOnline ? css.status : css.statuOn}>{isOnline}</span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li >)
        }
    </ul>
}
// FriendListItem.propTypes = {
//     avatar: PropTypes.array(PropTypes.any),
//     id: PropTypes.array(PropTypes.any),
//     name: PropTypes.string,
//     isOnline: PropTypes.array(PropTypes.any),
// }
