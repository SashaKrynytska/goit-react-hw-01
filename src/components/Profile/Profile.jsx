import PropTypes from "prop-types";
import {
  ProfileCard,
  ProfileDescr,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  ProfileStats,
  PSLi,
  PSLabel,
  PSQuantity,
} from "./Profile.styled";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDescr>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDescr>
      <ProfileStats>
        <PSLi>
          <PSLabel>Followers</PSLabel>
          <PSQuantity>{followers}</PSQuantity>
        </PSLi>
        <PSLi>
          <PSLabel>Views</PSLabel>
          <PSQuantity>{views}</PSQuantity>
        </PSLi>
        <PSLi>
          <PSLabel>Likes</PSLabel>
          <PSQuantity>{likes}</PSQuantity>
        </PSLi>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
