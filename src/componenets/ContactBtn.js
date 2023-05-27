export const ContactBtn = ({ cardName }) => {
  return (
    <button
      className={`contact-btn ${cardName}-contact-btn`}
      onClick={() => {
        window.open("mailto:martinezallan123@gmail.com");
      }}
    >
      Contact
    </button>
  );
};
