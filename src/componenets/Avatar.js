import { ContactBtn } from "./ContactBtn";
import avatar from "../avatar/avatar.png";

export const Avatar = () => {
  return (
    <>
      <ContactBtn cardName={"avatar"}></ContactBtn>
      <img className="avatar" src={avatar} alt="" />
    </>
  );
};
