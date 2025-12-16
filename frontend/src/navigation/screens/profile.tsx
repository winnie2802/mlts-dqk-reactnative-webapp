import {
  Text,
  View,
  Alert,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function profile() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  
  const navigation = useNavigation();
  const [showPopUp, setShowPopUp] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const handleConfirm = async () => {
    try {
      const response = await fetch("http://10.215.198.186:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      const data = await response.json();
      if (data.success) {
        Alert.alert(
          "✅ Success",
          `Welcome ${data.user.name}`,
          [
            {
              text: "OK",
              onPress: () => {
                setShowPopUp(false);
                navigation.navigate("profile");
              }
            }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert("⚠️ Error", data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("❌ Error", "Failed to connect to server");
    }
  };

  const [value, setValue] = React.useState('Nam');
  
  return (
    <SafeAreaView style={[ styles.body, isPortrait && styles.body_Portrait ]}>
      <StatusBar backgroundColor='black'/>
      <View style={[ styles.stickyTopNavigationBar, isPortrait && styles.stickyTopNavigationBar_Portrait ]}>
        <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/kunLogo.png' }} style={[ styles.kunLogo, { cursor: 'pointer' }, isPortrait && styles.kunLogo_Portrait ]} resizeMode='stretch'></Image>
        
        <View style={[ styles.navigationText, isPortrait && styles.navigationText_Portrait ]}>
          <Text style={[ styles.navigationText1, { cursor: 'pointer' }, isPortrait && styles.navigationText1_Portrait ]} allowFontScaling={ false }>Chương trình đổi thưởng</Text>
          <Text style={[ styles.navigationText2, { cursor: 'pointer' }, isPortrait && styles.navigationText2_Portrait ]} allowFontScaling={ false } onPress={() => setShowPopUp(true)}>Quà siêu KUN</Text>
          <Text style={[ styles.navigationText3, { cursor: 'pointer' }, isPortrait && styles.navigationText3_Portrait ]} allowFontScaling={ false }>Liên hệ</Text>
        </View>

        <View style={[ styles.navigationIcon, isPortrait && styles.navigationIcon_Portrait ]}>
          <Ionicons name="person-sharp" color="white" style={[ styles.navigationIcon1, isPortrait && styles.navigationIcon1_Portrait ]} allowFontScaling={ false } onPress={() => setShowPopUp(true)}/>
          <MaterialIcons name="shopping-bag" color="white" style={[ styles.navigationIcon2, isPortrait && styles.navigationIcon2_Portrait ]} allowFontScaling={ false } onPress={() => setShowPopUp(true)}/>
        </View>
      </View>
      
      <ScrollView style={[ styles.scrollView, isPortrait && styles.scrollView_Portrait ]} showsVerticalScrollIndicator={ false }>
        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-reactnative-application/background6.png' }} style={[ styles.background1, isPortrait && styles.background1_Portrait ]} resizeMode='stretch'>
            <View style={[ styles.content1, isPortrait && styles.content1_Portrait ]}>
              <View style={[ styles.content11, isPortrait && styles.content11_Portrait ]}>
                <Text style={[ styles.text111, isPortrait && styles.text111_Portrait ]} allowFontScaling={ false }>THÔNG TIN TÀI KHOẢN</Text>
              </View>

              <View style={[ styles.content12, isPortrait && styles.content12_Portrait ]}>
                <View style={[ styles.content121, isPortrait && styles.content121_Portrait ]}>
                  
                </View>

                <View style={[ styles.content122, isPortrait && styles.content122_Portrait ]}>
                  <View style={[ styles.content1221, isPortrait && styles.content1221_Portrait ]}>
                    <Text style={[ styles.text12211, isPortrait && styles.text12211_Portrait ]} allowFontScaling={ false }>TÀI KHOẢN CỦA TÔI</Text>

                    <Text style={[ styles.text12212, isPortrait && styles.text12212_Portrait ]} allowFontScaling={ false }>Quản lý thông tin hồ sơ để bảo mật tài khoản</Text>
                  </View>

                  <View style={[ styles.content1222, isPortrait && styles.content1222_Portrait ]}>
                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Tên</Text>
                      <TextInput style={[ styles.input122211, isPortrait && styles.input122211_Portrait ]} allowFontScaling={ false }></TextInput>
                    </View>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Email</Text>
                      <TextInput style={[ styles.input122211, isPortrait && styles.input122211_Portrait ]} allowFontScaling={ false }></TextInput>
                    </View>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>SĐT</Text>
                      <TextInput style={[ styles.input122212, isPortrait && styles.input122212_Portrait ]} allowFontScaling={ false } readOnly={ true }></TextInput>
                    </View>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Giới tính</Text>
                      <RadioButton.Group onValueChange={setValue} value={value}>
                        <View style={[ styles.genderRadioButtonContainer, isPortrait && styles.genderRadioButtonContainer_Portrait ]}>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="Nam"/>
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Nam</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="Nữ"/>
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Nữ</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="Khác" />
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Khác</Text>
                          </View>
                        </View>
                      </RadioButton.Group>
                    </View>
                    
                    <Text style={{ fontSize: 10, marginLeft: 110, width: 400, textAlign: 'right', }}>Selected: {value}</Text>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Địa chỉ</Text>
                      <TextInput style={[ styles.input122211, isPortrait && styles.input122211_Portrait ]} allowFontScaling={ false }></TextInput>
                    </View>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Tỉnh/Thành phố</Text>
                      <TextInput style={[ styles.input122211, isPortrait && styles.input122211_Portrait ]} allowFontScaling={ false }></TextInput>
                    </View>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Huyện/Quận</Text>
                      <TextInput style={[ styles.input122211, isPortrait && styles.input122211_Portrait ]} allowFontScaling={ false }></TextInput>
                    </View>

                    <View style={[ styles.content12221, isPortrait && styles.content12221_Portrait ]}>
                      <Text style={[ styles.text122211, isPortrait && styles.text122211_Portrait ]} allowFontScaling={ false }>Xã/Phường</Text>
                      <TextInput style={[ styles.input122211, isPortrait && styles.input122211_Portrait ]} allowFontScaling={ false }></TextInput>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-reactnative-application/background5.png' }} style={[ styles.footer, isPortrait && styles.footer_Portrait ]} resizeMode='cover'>
            <View style={[ styles.content5, isPortrait && styles.content5_Portrait ]}>
              <Image source={{ uri: 'https://winnie2802.github.io/mltechsoft-doiquakun-backend/idpLogo.png' }} style={[ styles.idpLogo, isPortrait && styles.idpLogo_Portrait ]} resizeMode='stretch'></Image>
              
              <View style={[ styles.content51, isPortrait && styles.content51_Portrait ]}>
                <Text style={[ styles.text511, isPortrait && styles.text511_Portrait ]} allowFontScaling={ false }>CÔNG TY CỔ PHẦN SỮA QUỐC TẾ (IDP)</Text>
                
                <Text style={[ styles.text512, isPortrait && styles.text512_Portrait ]} allowFontScaling={ false }>Giấy CN ĐKDN số: 0500463609</Text>
                
                <Text style={[ styles.text512, isPortrait && styles.text512_Portrait ]} allowFontScaling={ false }>Cấp lần đầu ngày: 24/11/2014</Text>
                
                <Text style={[ styles.text512, isPortrait && styles.text512_Portrait ]} allowFontScaling={ false }>Nơi cấp: Sở KH và ĐT Thành phố Hà Nội</Text>
              </View>

              <View style={[ styles.content52, isPortrait && styles.content52_Portrait ]}>
                <View style={[ styles.content521, isPortrait && styles.content521_Portrait ]}>
                  <Text style={[ styles.text5211, { cursor: 'pointer' }, isPortrait && styles.text5211_Portrait ]} allowFontScaling={ false }>Chương trình đổi thưởng</Text>
                </View>

                <View style={[ styles.content522, isPortrait && styles.content522_Portrait ]}>
                  <Text style={[ styles.text5221, isPortrait && styles.text5221_Portrait ]} allowFontScaling={ false }>Chính sách</Text>
                  
                  <Text style={[ styles.text5222, { cursor: 'pointer' }, isPortrait && styles.text5222_Portrait ]} allowFontScaling={ false }>Cách đổi quà</Text>
                  
                  <Text style={[ styles.text5222, { cursor: 'pointer' }, isPortrait && styles.text5222_Portrait ]} allowFontScaling={ false }>Chính sách bảo mật</Text>
                </View>

                <View style={[ styles.content523, isPortrait && styles.content523_Portrait ]}>
                  <Text style={[ styles.text5231, isPortrait && styles.text5231_Portrait ]} allowFontScaling={ false }>Liên hệ</Text>
                  
                  <Text style={[ styles.text5232, { cursor: 'pointer' }, isPortrait && styles.text5232_Portrait ]} allowFontScaling={ false }>Hotline: 1900 633 571</Text>
                  
                  <View style={[ styles.container5, isPortrait && styles.container5_Portrait ]}>
                    <TouchableOpacity style={[ styles.buttonFb, isPortrait && styles.buttonFb_Portrait ]}><FontAwesome6 name="facebook-f" color="white" style={[ styles.iconFb, isPortrait && styles.iconFb_Portrait ]} allowFontScaling={ false }/></TouchableOpacity>
                    <TouchableOpacity style={[ styles.buttonYt, isPortrait && styles.buttonYt_Portrait ]}><FontAwesome6 name="youtube" color="white" style={[ styles.iconYt, isPortrait && styles.iconYt_Portrait ]} allowFontScaling={ false }/></TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[ styles.content53, isPortrait && styles.content53_Portrait ]}>
                <Text style={[ styles.text531, isPortrait && styles.text531_Portrait ]} allowFontScaling={ false }>Địa chỉ</Text>
                
                <Text style={[ styles.text532, isPortrait && styles.text532_Portrait ]} allowFontScaling={ false }>HCM: 217 Nguyễn Văn Thủ, Phường Đakao, Quận 1, Hồ Chí Minh</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      { showPopUp && (
        <SafeAreaView style={[ styles.popUpBackground, isPortrait && styles.popUpBackground_Portrait ]}>
          <View style={[ styles.popUp, isPortrait && styles.popUp_Portrait ]}>
            <FontAwesome name='close' color='red' style={[ styles.popUpClose, { cursor: 'pointer' }, isPortrait && styles.popUpClose_Portrait ]} onPress={() => setShowPopUp(false)}/>

            <Text style={[ styles.popUpText, isPortrait && styles.popUpText_Portrait ]} allowFontScaling={ false }>Nhập số điện thoại</Text>

            <TextInput style={[ styles.popUpInput, isPortrait && styles.popUpInput_Portrait ]} allowFontScaling={ false } keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber}></TextInput>

            <TouchableOpacity style={[ styles.popUpButton, isPortrait && styles.popUpButton_Portrait ]} onPress={ handleConfirm }>
              <Text style={[ styles.popUpButtonText, isPortrait && styles.popUpButtonText_Portrait ]} allowFontScaling={ false }>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    
    flex: 1,
  },

  stickyTopNavigationBar: {
    backgroundColor: '#1b1464',
    
    width: '100%',
    height: 70,
    
    position: 'absolute',
    top: statusBarHeight,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
    
    paddingLeft: 20,
    paddingRight: 20,
  },
    kunLogo: {
      width: 100,
      height: 50,
    },
    navigationText: {
      flexDirection: 'row',

      alignItems: 'center',

      gap: 40,
    },
      navigationText1: {
        color: 'white',

        fontSize: 12,
      },
      navigationText2: {
        color: 'white',

        fontSize: 12,
      },
      navigationText3: {
        color: 'white',

        fontSize: 12,
      },
    navigationIcon: {
      flexDirection: 'row',

      gap: 40,
    },
      navigationIcon1: {
        fontSize: 20,
      },
      navigationIcon2: {
        fontSize: 20,
      },

  scrollView: {
    marginTop: 70,
  },

  background1: {
    width: '100%',
    height: 1000,
  },
    content1: {
      flexDirection: 'column',

      padding: 20,
    },
      content11: {
        borderBottomWidth: 1,

        paddingBottom: 20,
      },
        text111: {
          fontWeight: '900',
          fontSize: 18,
        },
      content12: {
        flexDirection: 'row',
        
        paddingTop: 20,
      },
        content121: {
          width: '30%',
        },
          content1211: {

          },
            avatar: {

            },
            userName: {
              
            },
          content1212: {

          },
        content122: {
          width: '70%',

          borderLeftWidth: 1,

          paddingLeft: 20,
          paddingBottom: 20,
        },
          content1221: {

          },
            text12211: {
              fontWeight: '900',
              fontSize: 16,
            },
            text12212: {
              fontSize: 12,
              color: 'lightgray',

              marginTop: 10,
            },
          content1222: {
            flexDirection: 'column',
          },
            content12221: {
              flexDirection: 'row',

              marginTop: 10,

              justifyContent: 'space-between',
            },
              text122211: {
                fontWeight: 'bold',
                fontSize: 12,

                marginTop: 10,
              },
              input122211: {
                borderWidth: 1,
                borderRadius: 10,

                width: 400,

                fontSize: 12,
              },
              input122212: {
                backgroundColor: 'lightgray',
                borderRadius: 10,

                width: 400,

                fontSize: 12,
              },
              genderRadioButtonContainer: {
                width: 400,
                
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              
  footer: {
    width: '100%',
    height: 500,
  },
    content5: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
    },
      idpLogo: {
        width: 50,
        height: 50,
      },
      content51: {
        marginTop: 20,
      },
        text511: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,

          marginBottom: 10,
        },
        text512: {
          color: 'white',

          fontSize: 12,

          marginTop: 10,
        },
      content52: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginTop: 20,
      },
        content521: {

        },
          text5211: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 12,
          },
        content522: {
          
        },
          text5221: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 12,

            marginBottom: 10,
          },
          text5222: {
            color: 'white',

            fontSize: 12,

            marginTop: 10,
          },
        content523: {

        },
          text5231: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 12,

            marginBottom: 10,
          },
          text5232: {
            color: 'white',

            fontSize: 12,

            marginTop: 10,
          },
          container5: {
            flexDirection: 'row',
            gap: 20,

            marginTop: 10,
          },
            buttonFb: {
              backgroundColor: 'none',
              
              width: 40,
              height: 40,

              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 60,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconFb: {
                fontSize: 20,
              },
            buttonYt: {
              backgroundColor: 'none',
              
              width: 40,
              height: 40,

              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 60,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconYt: {
                fontSize: 20,
              },
      content53: {
        marginTop: 10,
      },
        text531: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,
        },
        text532: {
          color: 'white',

          fontSize: 12,

          marginTop: 10,
        },

  popUpBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    width: '100%',
    height: '100%',

    position: 'absolute',
    top: statusBarHeight,

    alignItems: 'center',

    justifyContent: 'center',
  },
    popUp: {
      backgroundColor: 'white',

      alignItems: 'center',

      borderRadius: 20,

      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
      popUpClose: {
        fontSize: 20,

        position: 'absolute',
        top: 20,
        right: 20,
      },
      popUpText: {
        color: '#00aaec',

        fontWeight: 'bold',
        fontSize: 18,
      },
      popUpInput: {
        borderWidth: 1,
        borderColor: '#00aaec',
        borderRadius: 10,
        
        width: 300,

        fontSize: 12,

        paddingLeft: 10,

        marginTop: 10,
      },
      popUpButton: {
        backgroundColor: '#00aaec',
        
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        marginTop: 10,
      },
        popUpButtonText: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,
        },










  body_Portrait: {
    backgroundColor: 'black',
    
    flex: 1,
  },

  stickyTopNavigationBar_Portrait: {
    backgroundColor: '#1b1464',
    
    width: '100%',
    height: 35,
    
    position: 'absolute',
    top: statusBarHeight,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
    
    paddingLeft: 10,
    paddingRight: 10,

    marginLeft: 0,
  },
    kunLogo_Portrait: {
      width: 50,
      height: 25,
    },
    navigationText_Portrait: {
      flexDirection: 'row',

      alignItems: 'center',

      gap: 20,
    },
      navigationText1_Portrait: {
        color: 'white',

        fontSize: 6,
      },
      navigationText2_Portrait: {
        color: 'white',

        fontSize: 6,
      },
      navigationText3_Portrait: {
        color: 'white',

        fontSize: 6,
      },
    navigationIcon_Portrait: {
      flexDirection: 'row',

      gap: 20,
    },
      navigationIcon1_Portrait: {
        fontSize: 10,
      },
      navigationIcon2_Portrait: {
        fontSize: 10,
      },

  scrollView_Portrait: {
    marginTop: 35,
  },

  background1_Portrait: {
    width: '100%',
    height: 200,
  },
    content1_Portrait: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 10,
      
      transform: [{ translateY: '-50%' }],
    },
      text11_Portrait: {
        color: 'white',
        
        fontSize: 9,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 5,

        textAlign: 'center',
      },
      text12_Portrait: {
        color: 'white',
        
        fontSize: 8,
        fontWeight: '900',

        textShadowColor: '#fdbd35',
        textShadowRadius: 5,

        textAlign: 'center',

        marginTop: 5,
      },
      text13_Portrait: {
        color: 'white',
        
        fontSize: 6,

        textAlign: 'center',

        marginTop: 5,
      },
      button1_Portrait: {
        backgroundColor: '#fdbd35',

        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

        borderRadius: 32,

        alignSelf: 'center',

        marginTop: 5,
      },
        button1Text_Portrait: {
          color: 'white',

          fontSize: 6,
          fontWeight: 'bold',
        },

  footer_Portrait: {
    width: '100%',
    height: 250,
  },
    content5_Portrait: {
      position: 'absolute',
      left: 10,
      right: 10,
      bottom: 10,
    },
      idpLogo_Portrait: {
        width: 25,
        height: 25,
      },
      content51_Portrait: {
        marginTop: 10,
      },
        text511_Portrait: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 6,

          marginBottom: 5,
        },
        text512_Portrait: {
          color: 'white',

          fontSize: 6,

          marginTop: 5,
        },
      content52_Portrait: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginTop: 10,
      },
        content521_Portrait: {

        },
          text5211_Portrait: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 6,
          },
        content522_Portrait: {
          
        },
          text5221_Portrait: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 6,

            marginBottom: 5,
          },
          text5222_Portrait: {
            color: 'white',

            fontSize: 6,

            marginTop: 5,
          },
        content523_Portrait: {

        },
          text5231_Portrait: {
            color: 'white',

            fontWeight: 'bold',
            fontSize: 6,

            marginBottom: 5,
          },
          text5232_Portrait: {
            color: 'white',

            fontSize: 6,

            marginTop: 5,
          },
          container5_Portrait: {
            flexDirection: 'row',
            gap: 10,

            marginTop: 5,
          },
            buttonFb_Portrait: {
              backgroundColor: 'none',
              
              width: 20,
              height: 20,

              borderWidth: 0.5,
              borderColor: 'white',
              borderRadius: 30,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconFb_Portrait: {
                fontSize: 10,
              },
            buttonYt_Portrait: {
              backgroundColor: 'none',
              
              width: 20,
              height: 20,

              borderWidth: 0.5,
              borderColor: 'white',
              borderRadius: 30,

              alignItems: 'center',
              justifyContent: 'center',
            },
              iconYt_Portrait: {
                fontSize: 10,
              },
      content53_Portrait: {
        marginTop: 5,
      },
        text531_Portrait: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 6,
        },
        text532_Portrait: {
          color: 'white',

          fontSize: 6,

          marginTop: 5,
        },

  popUpBackground_Portrait: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    width: '100%',
    height: '100%',

    position: 'absolute',

    alignItems: 'center',

    justifyContent: 'center',
  },
    popUp_Portrait: {
      backgroundColor: 'white',

      alignItems: 'center',

      borderRadius: 20,

      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
      popUpClose_Portrait: {
        fontSize: 20,

        position: 'absolute',
        top: 20,
        right: 20,
      },
      popUpText_Portrait: {
        color: '#00aaec',

        fontWeight: 'bold',
        fontSize: 18,
      },
      popUpInput_Portrait: {
        borderWidth: 1,
        borderColor: '#00aaec',
        borderRadius: 10,
        
        width: 300,

        fontSize: 12,

        paddingLeft: 10,

        marginTop: 10,
      },
      popUpButton_Portrait: {
        backgroundColor: '#00aaec',
        
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        borderRadius: 64,

        marginTop: 10,
      },
        popUpButtonText_Portrait: {
          color: 'white',

          fontWeight: 'bold',
          fontSize: 12,
        },
});