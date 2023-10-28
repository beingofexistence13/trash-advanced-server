import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export default function App() {
  return (
    <View style={styles.container}>
      <WithSkiaWeb
        getComponent={() => import('./Breath')}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      />
      <Text style={{ textAlign: 'center' }}> Skia...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
