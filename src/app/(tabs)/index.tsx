
import { useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

import ImageViewer from '@/components/image-viewer';

const slika = require('@/assets/images/background-image.png');

export default function Index() {
  const imageOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [imageOpacity]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Košarka</Text>

        <Animated.View style={{ opacity: imageOpacity }}>
          <ImageViewer imgSource={slika} />
        </Animated.View>

        <Text style={styles.description}>
          Dobrodošel v moji aplikaciji o košarki.
        </Text>

        <Text style={styles.text}>
          V aplikaciji bom predstavil osnovne informacije o košarki,
          njena pravila, igralne pozicije in nekaj zanimivosti.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Kaj lahko najdeš v aplikaciji?
          </Text>

          <Text style={styles.item}>• osnovne informacije</Text>
          <Text style={styles.item}>• osnovna pravila</Text>
          <Text style={styles.item}>• igralne pozicije</Text>
          <Text style={styles.item}>• zanimivosti</Text>
        </View>

        <Text style={styles.bottomText}>
          Za več informacij uporabi spodnji meni.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },

  description: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffd33d',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 15,
  },

  text: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 25,
  },

  section: {
    width: '100%',
    backgroundColor: '#30343b',
    borderRadius: 12,
    padding: 20,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },

  item: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 10,
  },

  bottomText: {
    fontSize: 15,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 25,
  },
});
