import { Button } from '@react-navigation/elements';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// 1. Get screen width and define a breakpoint
const screenWidth = Dimensions.get('window').width;
const isDesktop = screenWidth >= 1024; // Customize breakpoint as needed

export function logIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button style={styles.homeButton} screen='home' color='black'>HOME</Button>

      <View style={[styles.form, isDesktop ? styles.formDesktop : styles.formMobile]}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.excitedText}>We're so excited to see you again!</Text>
        
        <Text style={styles.emailText}>Email</Text>
        <TextInput style={styles.emailInputText}></TextInput>

        <Text style={styles.userText}>Username</Text>
        <TextInput style={styles.userInputText}></TextInput>

        <Text style={styles.passwordText}>Password</Text>
        <TextInput style={styles.passwordInputText}></TextInput>

        <View style={styles.forgotLinkContainer}>
          <Text style={styles.forgotLink} onPress={() => navigation.navigate('logIn')}>Forgot your password?</Text>
        </View>

        <Button style={styles.logInButton} color='white' screen='logIn'>Log In</Button>

        <View style={styles.registerLinkContainer}>
          <Text style={styles.registerLink} onPress={() => navigation.navigate('register')}>Need an account? Register</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67ab9f",
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


  welcomeText: {
    textAlign: "center",

    marginTop: 60,
  },

  excitedText: {
    textAlign: "center",
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

  forgotLinkContainer: {
    alignItems: 'flex-end',

    marginTop: 10,
    marginRight: 60,
    marginBottom: 20,
  },
  forgotLink: {
    color: "#67ab9f",

    textDecorationLine: "underline",

    cursor: "pointer",
  },

  logInButton: {
    backgroundColor: "#67ab9f",

    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },

  registerLinkContainer: {
    alignItems: 'flex-end',

    marginTop: 10,
    marginRight: 60,
    marginBottom: 60,
  },
  registerLink: {
    color: "#67ab9f",

    textDecorationLine: "underline",

    cursor: "pointer",
  },
});