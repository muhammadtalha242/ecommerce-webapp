import {
  NewsletterContainer,
  NewsletterDescContainer,
  NewsletterTitleContainer,
} from "./container";
import Form from "./form";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterTitleContainer>Newsletter</NewsletterTitleContainer>
      <NewsletterDescContainer>Get timely updates</NewsletterDescContainer>
      <Form />
    </NewsletterContainer>
  );
};

export default Newsletter;
