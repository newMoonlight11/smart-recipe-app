import { Pressable, Text } from 'react-native';
import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { type ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Pressable>, 'onPress'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Pressable
      {...rest}
      onPress={async () => {
        if (process.env.EXPO_OS !== 'web') {
          // Open the link in an in-app browser on native.
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
        } else {
          // Open the link in a new tab on web
          window.open(href, '_blank');
        }
      }}
    >
      {rest.children}
    </Pressable>
  );
}
