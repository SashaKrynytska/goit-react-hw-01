import PropTypes from "prop-types";
import {
  FriendBox,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendBox>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar"></FriendAvatar>
      <FriendName>{name}</FriendName>
    </FriendBox>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
