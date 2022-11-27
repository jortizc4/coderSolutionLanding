import { Icon } from "./styles/styledComponents.js";
export const SocialCards = ({ icon, user, link }) => {
  return (
    <Icon>

        <img src={icon} alt={user} />
        <figcaption>
            <a href={link} target='_blank'>
            {user}
            </a>
            </figcaption>

    </Icon>
  );
};
