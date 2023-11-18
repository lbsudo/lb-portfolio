import * as React from 'react';

interface EmailTemplateProps {
  Name: string;
  Email: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name, Email, Message }) => (
  <div>
    <h3>Name: {Name} </h3>
    <h5>Email: {Email}</h5>
    <p>Message: {Message}</p>
  </div>
);
