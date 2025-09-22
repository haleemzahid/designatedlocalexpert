import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components';
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