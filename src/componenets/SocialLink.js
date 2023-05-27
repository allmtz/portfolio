export const SocialLink = ({ children, link, alt }) => {
  return (
    <a href={link} alt={alt} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
