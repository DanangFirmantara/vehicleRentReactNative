import PushNotification from 'react-native-push-notification';

const Notifications = PushNotification.createChannel({
   channelId: 'profile-notif',
   channelName: 'for test notification',
   vibrate: true,
   playSound: true,
   soundName: 'default',
});

export default Notifications;
