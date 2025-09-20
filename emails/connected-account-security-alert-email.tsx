import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components';

interface ConnectedAccountSecurityAlertEmailProps {
  userDisplayName: string;
  providerName: string;
  userAgent?: string;
  ipAddress?: string;
}

export const ConnectedAccountSecurityAlertEmail = ({
  userDisplayName,
  providerName,
  userAgent,
  ipAddress
}: ConnectedAccountSecurityAlertEmailProps) => {
  const previewText = `Security alert: New ${providerName} account connected`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={title}>Security Alert</Text>
            <Text style={paragraph}>Hi {userDisplayName},</Text>
            <Text style={paragraph}>
              We're writing to let you know that a new {providerName} account
              was connected to your account.
            </Text>
            {(userAgent || ipAddress) && (
              <>
                <Text style={paragraph}>Here are the details:</Text>
                {userAgent && (
                  <Text style={paragraph}>• Device: {userAgent}</Text>
                )}
                {ipAddress && (
                  <Text style={paragraph}>• IP Address: {ipAddress}</Text>
                )}
              </>
            )}
            <Hr style={hr} />
            <Text style={paragraph}>
              If this was you, you can safely ignore this email. If you didn't
              connect a {providerName} account, please contact our support team
              immediately.
            </Text>
            <Text style={paragraph}>
              Best regards,
              <br />
              The Security Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

ConnectedAccountSecurityAlertEmail.PreviewProps = {
  userDisplayName: 'John Doe',
  providerName: 'Google',
  userAgent: 'Chrome on Windows 10',
  ipAddress: '192.168.1.1'
} as ConnectedAccountSecurityAlertEmailProps;

export default ConnectedAccountSecurityAlertEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px'
};

const box = {
  padding: '0 48px'
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
  fontWeight: '600',
  color: '#dc2626',
  marginBottom: '24px'
};

const paragraph = {
  fontSize: '16px',
  lineHeight: 1.5,
  color: '#374151',
  marginBottom: '16px'
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0'
};
