import { Image, StyleSheet, Text, View } from 'react-native';

const MyImage = require('@/assets/images/jaz.png');

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zdravo!</Text>

      <Text style={styles.name}>
        Sem Maj Pongrac
      </Text>

      <Image source={MyImage} style={styles.image} />

      <Text style={styles.text}>
        Obiskujem 3. letnik programa tehnik računalništva
        na Elektro in računalniški šoli v Velenju.
      </Text>

      <Text style={styles.text}>
        V prostem času rad hodim v gym, poleti pa se ukvarjam
        tudi z downhillom.
      </Text>

      <Text style={styles.text}>
        Visok sem 6&apos;2 / 188 mimogrede
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    color: '#ffd33d',
    marginBottom: 25,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 30,
  },

  text: {
    width: '100%',
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 20,
  },
});