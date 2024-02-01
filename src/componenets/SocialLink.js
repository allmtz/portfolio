import { logEvent } from "firebase/analytics";
import { useContext } from "react";
import { AnalyticsContext } from "..";

export const SocialLink = ({ children, link, alt }) => {
  const analytics = useContext(AnalyticsContext);
  return (
    <a
      href={link}
      alt={alt}
      target="_blank"
      rel="noreferrer"
      aria-label={`${alt} link`}
      onClick={() => logEvent(analytics, `clicked-social-${alt}`)}
    >
      {children}
    </a>
  );
};
