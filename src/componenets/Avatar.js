import avatar from "../avatar/avatar.png";

export const Avatar = () => {
  return (
    <>
      <button className="avatar-contact-btn">Contact</button>
      <img className="avatar" src={avatar} alt="" />
    </>
  );
};
