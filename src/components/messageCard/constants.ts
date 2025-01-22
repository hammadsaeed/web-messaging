import Avatar1 from "../../assets/avatar/Avatar-1.png";
import Avatar2 from "../../assets/avatar/Avatar-2.png";
import Avatar3 from "../../assets/avatar/Avatar-3.png";
import Avatar4 from "../../assets/avatar/Avatar-4.png";
import Avatar5 from "../../assets/avatar/Avatar-5.png";
import Avatar6 from "../../assets/avatar/Avatar-6.png";

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];

export const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
};
