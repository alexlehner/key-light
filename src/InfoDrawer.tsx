import {Button, Drawer, Group, Space, Text, Title} from '@mantine/core';

const InfoDrawer = ({
  setDrawerOpened,
  drawerOpened,
}: {
  setDrawerOpened: Function;
  drawerOpened: boolean;
}) => {
  return (
    <div className="infoDrawer">
      <Button variant="default" onClick={() => setDrawerOpened(!drawerOpened)}>
        What's this?
      </Button>
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        position="right"
        padding="xl"
        size="xl"
      >
        <>
          <Group direction="column" spacing="xl">
            <div>
              <Title order={1}>What's this?</Title>
              <Text>
                Ever jump on Zoom and your face is washed out by your monitor?
                This tool helps you look better on video by giving you a solid
                thoughtful behind your various windows.{' '}
              </Text>
            </div>
            <div>
              <Title order={2}>How should I use it?</Title>
              <Text>
                Open this page full screen behind any windows you need open.
                Pick a color based on the time of day. Hint: The darker it is
                outside, the warmer your color should be.
              </Text>
            </div>
          </Group>
        </>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;
