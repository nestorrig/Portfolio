import { Icon } from "../Icons/Icon";

/* eslint react/prop-types: 0 */
export const SkillCard = ({ name, icon }) => {
  return (
    <div className="skills__techs__item bg__3">
    <figure>
        <Icon name={icon} />
    </figure>
    <h3>
        {name}
    </h3>
</div>
  );
}