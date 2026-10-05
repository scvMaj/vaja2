import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const MainImage = require('@/assets/images/kosarka-igra.jpg');
const CourtImage = require('@/assets/images/kosarkarsko-igrisce.jpg');
const GameImage = require('@/assets/images/kosarkarska-tekma.jpg');
const PositionsImage = require('@/assets/images/organizator.jpg');

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Košarka</Text>

      <Image source={MainImage} style={styles.mainImage} />

      <Text style={styles.heading}>Osnovno o košarki</Text>

      <Text style={styles.text}>
        Košarka je ekipni šport, pri katerem se dve ekipi pomerita
        in poskušata doseči čim več točk. Cilj igre je žogo spraviti
        skozi nasprotnikov koš.
      </Text>

      <Text style={styles.text}>
        Na igrišču je med igro pet igralcev vsake ekipe. Igralci si
        podajajo žogo, jo vodijo in poskušajo doseči koš z različnih
        položajev na igrišču.
      </Text>

      <Image source={CourtImage} style={styles.image} />

      <Text style={styles.heading}>Osnovna pravila</Text>

      <Text style={styles.text}>
        Koš iz igre je vreden dve točki, met za črto za tri točke
        pa tri točke. Prosti met je vreden eno točko.
      </Text>

      <Text style={styles.text}>
        Igralec se z žogo ne sme premikati brez vodenja. Med igro
        mora ekipa paziti tudi na čas napada in različne prekrške.
      </Text>

      <Image source={GameImage} style={styles.image} />

      <Text style={styles.heading}>Igralne pozicije</Text>

      <Text style={styles.text}>
        V košarki ima vsak igralec svojo vlogo. Pozicije se med
        sodobno igro pogosto prepletajo, vendar se igralci še vedno
        delijo na pet osnovnih pozicij.
      </Text>

      <Image source={PositionsImage} style={styles.positionsImage} />

      <Text style={styles.subheading}>1. Organizator igre</Text>

      <Text style={styles.text}>
        Organizator igre vodi napad, razporeja soigralce in pogosto
        začne akcijo. Pomembni so predvsem dobro vodenje žoge,
        pregled nad igro in natančne podaje.
      </Text>

      <Text style={styles.subheading}>2. Branilec</Text>

      <Text style={styles.text}>
        Branilec je pogosto dober strelec z razdalje in pomaga pri
        organizaciji napada. Pomemben je tudi pri obrambi nasprotnih
        igralcev.
      </Text>

      <Text style={styles.subheading}>3. Krilo</Text>

      <Text style={styles.text}>
        Krilo mora biti vsestranski igralec. Pomaga pri napadu,
        obrambi, skokih in metih z različnih položajev.
      </Text>

      <Text style={styles.subheading}>4. Krilni center</Text>

      <Text style={styles.text}>
        Krilni center igra bližje košu in je pomemben pri skokih
        ter obrambi. Pogosto lahko zadene tudi mete z večje razdalje.
      </Text>

      <Text style={styles.subheading}>5. Center</Text>

      <Text style={styles.text}>
        Center je običajno eden višjih igralcev ekipe. Njegova
        glavna naloga je igra pod košem, skakanje za žoge in obramba
        ob obroču.
      </Text>

      <Text style={styles.heading}>Zanimivosti</Text>

      <Text style={styles.text}>
        Košarka je nastala leta 1891 v ZDA. Izumil jo je James
        Naismith, ki je želel ustvariti šport, primeren za igranje
        v dvorani.
      </Text>

      <Text style={styles.text}>
        Danes je košarka razširjena po vsem svetu. Med najbolj
        znanimi tekmovanji je liga NBA, pomembna pa so tudi evropska
        in reprezentančna tekmovanja.
      </Text>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  mainImage: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffd33d',
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 20,
  },

  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },

  text: {
    fontSize: 17,
    color: '#fff',
    lineHeight: 26,
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  image: {
    width: '90%',
    height: 210,
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 10,
    resizeMode: 'contain',
  },

  positionsImage: {
    width: '90%',
    height: 220,
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 15,
    resizeMode: 'contain',
  },

  bottomSpace: {
    height: 30,
  },
});