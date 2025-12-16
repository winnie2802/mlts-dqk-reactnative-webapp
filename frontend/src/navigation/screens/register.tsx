import { Button } from '@react-navigation/elements';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// 1. Get screen width and define a breakpoint
const screenWidth = Dimensions.get('window').width;
const isDesktop = screenWidth >= 1024; // Customize breakpoint as needed

export function register() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button style={styles.homeButton} screen='home' color='black'>HOME</Button>

      <View style={[styles.form, isDesktop ? styles.formDesktop : styles.formMobile]}>
        <Text style={styles.createText}>Create an account</Text>
        
        <Text style={styles.emailText}>Email</Text>
        <TextInput style={styles.emailInputText}></TextInput>

        <Text style={styles.userText}>Username</Text>
        <TextInput style={styles.userInputText}></TextInput>

        <Text style={styles.passwordText}>Password</Text>
        <TextInput style={styles.passwordInputText}></TextInput>

        <Button style={styles.registerButton} color='white' screen='register'>Register</Button>

        <View style={styles.logInLinkContainer}>
          <Text style={styles.logInLink} onPress={() => navigation.navigate('logIn')}>Already have an account? Log in</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea6b66",
  },

  homeButton: {
    backgroundColor: "white",
    
    width: 120,
    height: 60,
    
    margin: 30,
    
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },

  form: {
    backgroundColor: "white",
  },
  formDesktop: {
    backgroundColor: "white",

    marginLeft: 480,
    marginRight: 480,
  },
  formMobile: {
    backgroundColor: "white",

    marginLeft: 30,
    marginRight: 30,
  },

  createText: {
    textAlign: "center",

    marginTop: 60,
  },

  emailText: {
    marginTop: 30,
    marginLeft: 60,
  },
  
  emailInputText: {
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,

    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },

  userText: {
    marginTop: 30,
    marginLeft: 60,
  },
  
  userInputText: {
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,

    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },

  passwordText: {
    marginTop: 30,
    marginLeft: 60,
  },
  
  passwordInputText: {
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,

    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },

  registerButton: {
    backgroundColor: "#ea6b66",

    marginTop: 30,
    marginLeft: 60,
    marginRight: 60,
    
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },

  logInLinkContainer: {
    alignItems: 'flex-end',

    marginTop: 10,
    marginRight: 60,
    marginBottom: 60,
  },
  logInLink: {
    color: "#ea6b66",

    textDecorationLine: "underline",

    cursor: "pointer",
  },
});