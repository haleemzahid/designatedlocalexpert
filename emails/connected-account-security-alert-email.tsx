<<<<<<< HEAD
import * as React from 'react';
=======
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
import {
  Body,
  Container,
  Head,
<<<<<<< HEAD
=======
  Heading,
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components';
<<<<<<< HEAD

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
=======
import { Tailwind } from '@react-email/tailwind';

import { AppInfo } from '@/constants/app-info';

export type ConnectedAccountSecurityAlertEmailData = {
  recipient: string;
  name: string;
  accountProvider?: string;
  timestamp?: string;
  ipAddress?: string;
};

export const ConnectedAccountSecurityAlertEmail = ({ 
  name, 
  accountProvider = 'third-party account',
  timestamp,
  ipAddress
}: ConnectedAccountSecurityAlertEmailData) => (
  <Html>
    <Head />
    <Preview>Security Alert: New account connection detected</Preview>
    <Tailwind>
      <Body className="m-auto bg-white px-2 font-sans">
        <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
          <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
            Security Alert!
          </Heading>
          <Text className="text-[14px] leading-[24px] text-black">
            Hello {name},
          </Text>
          <Text className="text-[14px] leading-[24px] text-black">
            We detected that a new {accountProvider} was connected to your {AppInfo.APP_NAME} account.
          </Text>
          
          {(timestamp || ipAddress) && (
            <Section className="my-[16px] rounded bg-[#f6f6f6] p-[16px]">
              <Text className="text-[14px] leading-[20px] text-black">
                <strong>Connection Details:</strong>
              </Text>
              {timestamp && (
                <Text className="text-[12px] leading-[16px] text-[#666666]">
                  Time: {timestamp}
                </Text>
              )}
              {ipAddress && (
                <Text className="text-[12px] leading-[16px] text-[#666666]">
                  IP Address: {ipAddress}
                </Text>
              )}
            </Section>
          )}
          
          <Text className="text-[14px] leading-[24px] text-black">
            If this was you, no action is needed. If you didn't connect this account, 
            please secure your account immediately by changing your password and 
            reviewing your connected accounts.
          </Text>
          
          <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
          
          <Text className="text-[12px] leading-[24px] text-[#666666]">
            This security alert was sent from {AppInfo.APP_NAME}. If you have any 
            concerns, please contact our support team.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
