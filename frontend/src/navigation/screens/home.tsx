import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function home() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navigation = useNavigation();
  const [showPopUp, setShowPopUp] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const handleConfirm = async () => {
    const checkPhoneNumber = phoneNumber.trim();

    if (checkPhoneNumber === '') {
      alert('⚠️ Phone-Number Cannot Be Blank!');
      return;
    }

    if (!/^\d+$/.test(checkPhoneNumber)) {
      alert('⚠️ Numbers Only!');
      return;
    }

    if (checkPhoneNumber.length !== 10) {
      alert('⚠️ Must Be 10 Numbers!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          phoneNumber: checkPhoneNumber 
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ Login Successful!');
        navigation.navigate('profile');
        setPhoneNumber('');
        setShowPopUp(false);    
      } else {
        alert('❌ User Not Found!');
      }
    } catch (error) {
      console.error('⚠️ Error: ', error);
      alert(
        '⚠️ Cannot Connect to Server.\n\n' +
        '❌ Failed to Login.'
      );
    }
  };
  
  return (
    <View style={[ styles.body, isPortrait && styles.body_Portrait ]}>
      <View style={[ styles.navigationBar, isPortrait && styles.navigationBar_Portrait ]}>
        <Pressable onHoverIn={ () => setHoveredIndex(0) } onHoverOut={ () => setHoveredIndex(null) }>
          <Image style={[ styles.kunLogo, isPortrait && styles.kunLogo_Portrait, hoveredIndex === 0 && styles.kunLogo_Hover ]}
            source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/logos/kunLogo.png' }}
            resizeMode='stretch'>
          </Image>
        </Pressable>
        
        <View style={[ styles.navigationBarTexts, isPortrait && styles.navigationBarTexts_Portrait ]}>
          <Pressable onHoverIn={ () => setHoveredIndex(1) } onHoverOut={ () => setHoveredIndex(null) }>
            <Text style={[ styles.navigationBarText1, isPortrait && styles.navigationBarText1_Portrait, hoveredIndex === 1 && styles.navigationBarText1_Hover ]}>
              Chương trình đổi thưởng
            </Text>
          </Pressable>

          <Pressable onHoverIn={ () => setHoveredIndex(2) } onHoverOut={ () => setHoveredIndex(null) }>
            <Text style={[ styles.navigationBarText2, isPortrait && styles.navigationBarText2_Portrait, hoveredIndex === 2 && styles.navigationBarText2_Hover ]}>
              Quà siêu KUN
            </Text>
          </Pressable>

          <Pressable onHoverIn={ () => setHoveredIndex(3) } onHoverOut={ () => setHoveredIndex(null) }>
            <Text style={[ styles.navigationBarText3, isPortrait && styles.navigationBarText3_Portrait, hoveredIndex === 3 && styles.navigationBarText3_Hover ]}>
              Liên hệ
            </Text>
          </Pressable>
        </View>

        <View style={[ styles.navigationBarIcons, isPortrait && styles.navigationBarIcons_Portrait ]}>
          <Pressable onHoverIn={ () => setHoveredIndex(4) } onHoverOut={ () => setHoveredIndex(null) }>
            <Ionicons style={[ styles.navigationBarIcon1, isPortrait && styles.navigationBarIcon1_Portrait, hoveredIndex === 4 && styles.navigationBarIcon1_Hover ]} onPress={() => setShowPopUp(true)}
              name="person-sharp"
            />
          </Pressable>
          
          <Pressable onHoverIn={ () => setHoveredIndex(5) } onHoverOut={ () => setHoveredIndex(null) }>
            <MaterialIcons style={[ styles.navigationBarIcon2, isPortrait && styles.navigationBarIcon2_Portrait, hoveredIndex === 5 && styles.navigationBarIcon2_Hover ]} onPress={() => setShowPopUp(true)}
              name="shopping-bag"
            />
          </Pressable>
        </View>
      </View>
      
      <ScrollView style={[ styles.scrollView, isPortrait && styles.scrollView_Portrait ]}>
        <View>
          <ImageBackground style={[ styles.background1, isPortrait && styles.background1_Portrait ]} source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/backgrounds/background1.png' }} resizeMode='stretch'>
            <View style={[ styles.content1, isPortrait && styles.content1_Portrait ]}>
              <Text style={[ styles.content1Text1, isPortrait && styles.content1Text1_Portrait ]}>
                SƯU TẬP THẺ SIÊU QUYỀN NĂNG
              </Text>
              
              <Text style={[ styles.content1Text1, isPortrait && styles.content1Text1_Portrait ]}>
                ĐỔI QUÀ SIÊU KUN
              </Text>
              
              <Text style={[ styles.content1Text2, isPortrait && styles.content1Text2_Portrait ]}>
                TRONG MỖI THÙNG KUN TƯƠI VUI 180ML
              </Text>
              
              <Text style={[ styles.content1Text3, isPortrait && styles.content1Text3_Portrait ]}>
                Thời gian: 25/07 - 30/09/2021
              </Text>
              
              <Pressable onHoverIn={ () => setHoveredIndex(6) } onHoverOut={ () => setHoveredIndex(null) } onPress={ () => setShowPopUp(true) }>
                <Text style={[ styles.content1Button, isPortrait && styles.content1Button_Portrait, hoveredIndex === 6 && styles.content1Button_Hover ]}>
                  Sưu tập ngay
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground style={[ styles.background2, isPortrait && styles.background2_Portrait ]} source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/backgrounds/background2.png' }} resizeMode='stretch'>
            <View style={[ styles.content2, isPortrait && styles.content2_Portrait ]}>
              <Text style={[ styles.content2Text1, isPortrait && styles.content2Text1_Portrait ]}>
                Thẻ Siêu Quyền Năng
              </Text>
              
              <Text style={[ styles.content2Text2, isPortrait && styles.content2Text2_Portrait ]}>
                Tích Thẻ Siêu Quyền Năng để đổi quà yêu thích. Thời gian khuyến mãi từ 25/07 - 30/09/2021. Hạn chót đổi quà 10/10/2021. Thẻ trúng thưởng do IDP phát hành, phải còn nguyên vẹn, không rách nát, chắp vá, cạo sửa, bôi vẽ,...
              </Text>
              
              <Pressable onHoverIn={ () => setHoveredIndex(7) } onHoverOut={ () => setHoveredIndex(null) } onPress={ () => setShowPopUp(true) }>
                <Text style={[ styles.content2Button, isPortrait && styles.content2Button_Portrait, hoveredIndex === 7 && styles.content2Button_Hover ]}>
                  Xem Chi Tiết Và Đổi Quà
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground style={[ styles.background3, isPortrait && styles.background3_Portrait ]} source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/backgrounds/background3.png' }} resizeMode='stretch'>
            <View style={[ styles.content3, isPortrait && styles.content3_Portrait ]}>
              <Text style={[ styles.content3Text1, isPortrait && styles.content3Text1_Portrait ]}>BA BƯỚC ĐỔI QUÀ KUN</Text>
              
              <View style={[ styles.step1, isPortrait && styles.step1_Portrait ]}>
                <Image style={[ styles.step, isPortrait && styles.step_Portrait ]}
                  source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/onboarding_4_step1.png' }}
                  resizeMode='stretch'>
                </Image>
                
                <Text style={[ styles.content3Text2, isPortrait && styles.content3Text2_Portrait ]}>
                  Đăng ký tài khoản bằng SĐT
                </Text>
              </View>
              
              <View style={[ styles.subStep1, isPortrait && styles.subStep1_Portrait ]}>
                <View style={[ styles.lineToStep, isPortrait && styles.lineToStep_Portrait ]}></View>
                
                <Text style={[ styles.content3Text3, isPortrait && styles.content3Text3_Portrait ]}>
                  Chỉ cần điền SĐT và nhập mật khẩu là bạn đã đăng ký tài khoản thành công
                </Text>
              </View>
              
              <View style={[ styles.step1, isPortrait && styles.step1_Portrait ]}>
                <Image style={[ styles.step, isPortrait && styles.step_Portrait ]}
                  source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/onboarding_4_step2.png' }}
                  resizeMode='stretch'>
                </Image>
                
                <Text style={[ styles.content3Text2, isPortrait && styles.content3Text2_Portrait ]}>
                  Chọn quà KUN mà bạn muốn đổi thưởng
                </Text>
              </View>
              
              <View style={[ styles.subStep1, isPortrait && styles.subStep1_Portrait ]}>
                <View style={[ styles.lineToStep, isPortrait && styles.lineToStep_Portrait ]}></View>
                
                <Text style={[ styles.content3Text3, isPortrait && styles.content3Text3_Portrait ]}>
                  Nhập mã số trên mặt thẻ mà bạn sưu tập được. Tích lũy đủ số lượng thẻ cần thiết và chọn phần quà bạn muốn đổi thưởng.
                </Text>
              </View>
              
              <View style={[ styles.step1, isPortrait && styles.step1_Portrait ]}>
                <Image style={[ styles.step, isPortrait && styles.step_Portrait ]}
                  source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/onboarding_4_step3.png' }}
                  resizeMode='stretch'>
                </Image>
                
                <Text style={[ styles.content3Text2, isPortrait && styles.content3Text2_Portrait ]}>
                  Điền thông tin và nhận quà
                </Text>
              </View>
              
              <View style={[ styles.subStep1, isPortrait && styles.subStep1_Portrait ]}>
                <View style={[ styles.lineToStep, isPortrait && styles.lineToStep_Portrait ]}></View>
                
                <Text style={[ styles.content3Text3, isPortrait && styles.content3Text3_Portrait ]}>
                  Sau khi bạn đã điền đầy đủ thông tin, chúng tôi sẽ xác nhận sự hợp lệ của những mã số và sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                </Text>
              </View>
              
              <Pressable onHoverIn={ () => setHoveredIndex(8) } onHoverOut={ () => setHoveredIndex(null) } onPress={ () => setShowPopUp(true) }>
                <Text style={[ styles.content3Button, isPortrait && styles.content3Button_Portrait, hoveredIndex === 8 && styles.content3Button_Hover ]}>
                  Đổi quà ngay
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground style={[ styles.background4, isPortrait && styles.background4_Portrait ]} source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/backgrounds/background4.png' }} resizeMode='stretch'>
            <View style={[ styles.content4, isPortrait && styles.content4_Portrait ]}>
              <Text style={[ styles.content4Text1, isPortrait && styles.content4Text1_Portrait ]}>
                QUÀ SIÊU KUN
              </Text>
              
              <Text style={[ styles.content4Text2, isPortrait && styles.content4Text2_Portrait ]}>
                Bạn chưa đăng nhập, hãy đăng nhập ngay để xem các phần quà nhé!
              </Text>
              
              <Pressable onHoverIn={ () => setHoveredIndex(8) } onHoverOut={ () => setHoveredIndex(null) } onPress={ () => setShowPopUp(true) }>
                <Text style={[ styles.content4Button, isPortrait && styles.content4Button_Portrait, hoveredIndex === 8 && styles.content4Button_Hover ]}>
                  Đăng nhập
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        <View>
          <ImageBackground style={[ styles.footer, isPortrait && styles.footer_Portrait ]} source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/backgrounds/backgroundFooter.png' }} resizeMode='cover'>
            <View style={[ styles.footerContent, isPortrait && styles.footerContent_Portrait ]}>
              <View style={[ styles.idpLogo, isPortrait && styles.idpLogo_Portrait ]}>
                <Pressable onHoverIn={ () => setHoveredIndex(9) } onHoverOut={ () => setHoveredIndex(null) }>
                  <Image style={[ styles.idpLogo, isPortrait && styles.idpLogo_Portrait, hoveredIndex === 9 && styles.idpLogo_Hover ]}
                    source={{ uri: 'https://winnie2802.github.io/mlts-dqk-reactnative-webapp/images/logos/idpLogo.png' }}
                    resizeMode='stretch'>
                  </Image>
                </Pressable>
              </View>
              
              <View style={[ styles.footerContent1, isPortrait && styles.footerContent1_Portrait ]}>
                <Text style={[ styles.footerContent1Text1, isPortrait && styles.footerContent1Text1_Portrait ]}>
                  CÔNG TY CỔ PHẦN SỮA QUỐC TẾ (IDP)
                </Text>
                
                <Text style={[ styles.footerContent1Text2, isPortrait && styles.footerContent1Text2_Portrait ]}>
                  Giấy CN ĐKDN số: 0500463609
                </Text>
                
                <Text style={[ styles.footerContent1Text2, isPortrait && styles.footerContent1Text2_Portrait ]}>
                  Cấp lần đầu ngày: 24/11/2014
                </Text>
                
                <Text style={[ styles.footerContent1Text2, isPortrait && styles.footerContent1Text2_Portrait ]}>
                  Nơi cấp: Sở KH và ĐT Thành phố Hà Nội
                </Text>
              </View>

              <View style={[ styles.footerContent2, isPortrait && styles.footerContent2_Portrait ]}>
                <View style={[ styles.footerContent2Sub, isPortrait && styles.footerContent2Sub_Portrait ]}>
                  <Text style={[ styles.footerContent2SubText1, isPortrait && styles.footerContent2SubText1_Portrait ]}>
                    Chương trình đổi thưởng
                  </Text>
                </View>

                <View style={[ styles.footerContent2Sub, isPortrait && styles.footerContent2Sub_Portrait ]}>
                  <Text style={[ styles.footerContent2SubText1, isPortrait && styles.footerContent2SubText1_Portrait ]}>
                    Chính sách
                  </Text>
                  
                  <Pressable onHoverIn={ () => setHoveredIndex(10) } onHoverOut={ () => setHoveredIndex(null) }>
                    <Text style={[ styles.footerContent2SubText2, isPortrait && styles.footerContent2SubText2_Portrait, hoveredIndex === 10 && styles.footerContent2SubText2_Hover ]}>
                      Cách đổi quà
                    </Text>
                  </Pressable>
                  
                  <Pressable onHoverIn={ () => setHoveredIndex(11) } onHoverOut={ () => setHoveredIndex(null) }>
                    <Text style={[ styles.footerContent2SubText2, isPortrait && styles.footerContent2SubText2_Portrait, hoveredIndex === 11 && styles.footerContent2SubText2_Hover ]}>
                      Chính sách bảo mật
                    </Text>
                  </Pressable>
                </View>

                <View style={[ styles.footerContent2Sub, isPortrait && styles.footerContent2Sub_Portrait ]}>
                  <Text style={[ styles.footerContent2SubText1, isPortrait && styles.footerContent2SubText1_Portrait ]}>Liên hệ</Text>
                  
                  <Text style={[ styles.footerContent2SubText2, isPortrait && styles.footerContent2SubText2_Portrait ]}>Hotline: 1900 633 571</Text>
                  
                  <View style={[ styles.footerContentIcons, isPortrait && styles.footerContentIcons_Portrait ]}>
                    <Pressable onHoverIn={ () => setHoveredIndex(12) } onHoverOut={ () => setHoveredIndex(null) }>
                      <FontAwesome6 style={[ styles.iconFb, isPortrait && styles.iconFb_Portrait, hoveredIndex === 12 && styles.iconFb_Hover ]} 
                        name="facebook-f"
                      />
                    </Pressable>
                    
                    <Pressable onHoverIn={ () => setHoveredIndex(13) } onHoverOut={ () => setHoveredIndex(null) }>
                      <FontAwesome6 style={[ styles.iconYt, isPortrait && styles.iconYt_Portrait, hoveredIndex === 13 && styles.iconYt_Hover ]}
                        name="youtube"
                      />
                    </Pressable>
                  </View>
                </View>
              </View>

              <View style={[ styles.footerContent3, isPortrait && styles.footerContent3_Portrait ]}>
                <Text style={[ styles.footerContent3Text1, isPortrait && styles.footerContent3Text1_Portrait ]}>
                  Địa chỉ
                </Text>
                
                <Text style={[ styles.footerContent3Text2, isPortrait && styles.footerContent3Text2_Portrait ]}>
                  HCM: 217 Nguyễn Văn Thủ, Phường Đakao, Quận 1, Hồ Chí Minh
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      {showPopUp && (
        <View style={ styles.popUpBackground }>
          <View style={[ styles.popUp, isPortrait && styles.popUp_Portrait ]}>
            <Pressable style={[ styles.popUpClose, isPortrait && styles.popUpClose_Portrait ]} onHoverIn={ () => setHoveredIndex(14) } onHoverOut={  () => setHoveredIndex(null) }>
              <FontAwesome style={[ styles.popUpClose, isPortrait && styles.popUpClose_Portrait, hoveredIndex === 14 && styles.popUpClose_Hover ]} onPress={ () => setShowPopUp(false) }
                name="close"
              />
            </Pressable>

            <Text style={[ styles.popUpText, isPortrait && styles.popUpText_Portrait ]}>
              Nhập số điện thoại
            </Text>

            <TextInput style={[ styles.popUpInput, isPortrait && styles.popUpInput_Portrait ]} onChangeText={ setPhoneNumber }
              value={ phoneNumber }
              maxLength={10}
            />

            <Pressable onHoverIn={ () => setHoveredIndex(15) } onHoverOut={ () => setHoveredIndex(null) } onPress={ handleConfirm }>
              <Text style={[ styles.popUpButton, isPortrait && styles.popUpButton_Portrait, hoveredIndex === 15 && styles.popUpButton_Hover ]}>
                Xác nhận
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
body: {
  backgroundColor: 'black',

  display: 'flex',
  flexDirection: 'column',
  flex: 1,
},

navigationBar: {
  backgroundColor: '#1b1464',

  height: 100,
  
  position: 'absolute',
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  padding: 40,
},
  kunLogo: {
    width: 100,
    height: 50,
  },
    kunLogo_Hover: {
      transform: [{ scale: 0.8 }],
    },

  navigationBarTexts: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
    navigationBarText1: {
      color: 'white',

      fontSize: 20,
    },
      navigationBarText1_Hover: {
        textDecorationLine: 'underline',
        transform: [{ scale: 0.8 }],
      },

    navigationBarText2: {
      color: 'white',

      fontSize: 20,
    },
      navigationBarText2_Hover: {
        textDecorationLine: 'underline',
        transform: [{ scale: 0.8 }],
      },
    
    navigationBarText3: {
      color: 'white',

      fontSize: 20,
    },
      navigationBarText3_Hover: {
        textDecorationLine: 'underline',
        transform: [{ scale: 0.8 }],
      },

  navigationBarIcons: {
    display: 'flex',
    flexDirection: 'row',

    gap: 40,
  },
    navigationBarIcon1: {
      color: 'white',
      
      fontSize: 20,
    },
      navigationBarIcon1_Hover: {
        transform: [{ scale: 0.8 }],
      },
    
    navigationBarIcon2: {
      color: 'white',

      fontSize: 20,
    },
      navigationBarIcon2_Hover: {
        transform: [{ scale: 0.8 }],
      },

scrollView: {
  marginTop: 100,
},

background1: {
  width: '100%',
  height: innerHeight,

  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
},
  content1: {
    width: '50%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
    content1Text1: {
      color: 'white',
      
      fontSize: 30,
      fontWeight: '900',

      textShadowColor: '#fdbd35',
      textShadowRadius: 10,
    },
    
    content1Text2: {
      color: 'white',
      
      fontSize: 30,
      fontWeight: '900',

      textShadowColor: '#fdbd35',
      textShadowRadius: 10,
    },
    
    content1Text3: {
      color: 'white',
      
      fontSize: 20,
    },
    
    content1Button: {
      color: 'white',
      backgroundColor: '#fdbd35',

      fontSize: 20,
      fontWeight: 'bold',

      borderWidth: 1,
      borderColor: '#fdbd35',
      borderRadius: 10,

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },
      content1Button_Hover: {
        borderRadius: 60,
      },

background2: {
  width: '100%',
  height: innerHeight,

  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',

  padding: 40,
},
  content2: {
    width: '50%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
    content2Text1: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    
    content2Text2: {
      fontSize: 18,

      textAlign: 'justify',
    },
    
    content2Button: {
      color: '#00aaec',
      backgroundColor: 'white',

      fontSize: 20,
      fontWeight: 'bold',

      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },
      content2Button_Hover: {
        borderRadius: 60,
      },

background3: {
  width: '100%',
  height: innerHeight * 1.2,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  padding: 40,
},
  content3: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
    content3Text1: {
      color: 'white',
      
      fontSize: 30,
      fontWeight: '900',
      textAlign: 'center',

      textShadowColor: '#fdbd35',
      textShadowRadius: 10,

      width: '100%',
    },
    
    step1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
      step: {
        width: 50,
        height: 50,
      },
      
      content3Text2: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold',
      },

    subStep1: {
      width: '50%',
      
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },        
      lineToStep: {
        backgroundColor: '#fdbd35',

        width: 2,
        height: 70,

        borderRadius: 2,
        
        marginLeft: 25,
        marginRight: 25,
      },
      content3Text3: {
        fontSize: 18,

        textAlign: 'justify',
      },
    
    content3Button: {
      color: 'white',
      backgroundColor: '#fdbd35',

      fontSize: 20,
      fontWeight: 'bold',
      
      borderWidth: 1,
      borderColor: '#fdbd35',
      borderRadius: 10,
      
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },
      content3Button_Hover: {
        borderRadius: 60,
      },

background4: {
  width: '100%',
  height: innerHeight,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
},
  content4: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
    content4Text1: {
      color: '#fdbd35',
      
      fontSize: 30,
      fontWeight: '900',
    },
    
    content4Text2: {
      fontSize: 20,
    },
    
    content4Button: {
      color: 'white',
      backgroundColor: '#00aaec',

      fontSize: 20,
      fontWeight: 'bold',

      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,

      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },
      content4Button_Hover: {
        borderRadius: 60,
      },

footer: {
  width: '100%',
  height: innerHeight * 1.2,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
},
  footerContent: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    padding: 40,
  },
    idpLogo: {
      width: 100,
      height: 100,
    },
      idpLogo_Hover: {
        transform: [{ scale: 0.8 }],
      },
    
    footerContent1: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
      footerContent1Text1: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold',
      },
      
      footerContent1Text2: {
        color: 'white',

        fontSize: 18,
      },
    
    footerContent2: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
      footerContent2Sub: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      },
        footerContent2SubText1: {
          color: 'white',
          
          fontSize: 20,
          fontWeight: 'bold',
        },

        footerContent2SubText2: {
          color: 'white',
          
          fontSize: 18,
        },
          footerContent2SubText2_Hover: {
            textDecorationLine: 'underline',
          },
        
        footerContentIcons: {
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        },
          iconFb: {
            color: 'white',
            backgroundColor: 'none',
            
            fontSize: 30,
            
            width: 60,
            height: 60,

            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 60,

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
            iconFb_Hover: {
              color: 'white',
              backgroundColor: '#0765fe',

              borderColor: '#0765fe',
            },
          
          iconYt: {
            color: 'white',
            backgroundColor: 'none',
            
            fontSize: 30,
            
            width: 60,
            height: 60,

            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 60,

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
            iconYt_Hover: {
              color: 'red',
              backgroundColor: 'white',
            },
    
    footerContent3: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
      footerContent3Text1: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold',
      },
      footerContent3Text2: {
        color: 'white',

        fontSize: 18,
      },

popUpBackground: {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},
  popUp: {
    backgroundColor: 'white',
    
    borderRadius: 10,
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,

    padding: 40,
  },
    popUpClose: {
      fontSize: 20,
      
      alignSelf: 'flex-end',
    },
      popUpClose_Hover: {
        color: 'red',
      },
    
    popUpText: {
      color: '#00aaec',

      fontSize: 20,
      fontWeight: 'bold',
    },
    
    popUpInput: {
      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,
      
      width: 300,

      fontSize: 18,

      padding: 10,
    },
    
    popUpButton: {
      color: 'white',
      backgroundColor: '#00aaec',
      
      fontSize: 20,
      fontWeight: 'bold',
      
      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,
      
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },
      popUpButton_Hover: {
        borderRadius: 60,
      },










body_Portrait: {
  backgroundColor: 'black',

  display: 'flex',
  flexDirection: 'column',
  flex: 1,
},

navigationBar_Portrait: {
  backgroundColor: '#1b1464',

  height: 100,
  
  position: 'absolute',
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  padding: 40,
},
  kunLogo_Portrait: {
    width: 100,
    height: 50,
  },

  navigationBarTexts_Portrait: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
    navigationBarText1_Portrait: {
      color: 'white',

      fontSize: 20,
    },

    navigationBarText2_Portrait: {
      color: 'white',

      fontSize: 20,
    },
    
    navigationBarText3_Portrait: {
      color: 'white',

      fontSize: 20,
    },

  navigationBarIcons_Portrait: {
    display: 'flex',
    flexDirection: 'row',

    gap: 40,
  },
    navigationBarIcon1_Portrait: {
      color: 'white',
      
      fontSize: 20,
    },
    
    navigationBarIcon2_Portrait: {
      color: 'white',

      fontSize: 20,
    },

scrollView_Portrait: {
  marginTop: 100,
},

background1_Portrait: {
  width: '100%',
  height: innerHeight,

  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
},
  content1_Portrait: {
    width: '50%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
    content1Text1_Portrait: {
      color: 'white',
      
      fontSize: 30,
      fontWeight: '900',

      textShadowColor: '#fdbd35',
      textShadowRadius: 10,
    },
    
    content1Text2_Portrait: {
      color: 'white',
      
      fontSize: 30,
      fontWeight: '900',

      textShadowColor: '#fdbd35',
      textShadowRadius: 10,
    },
    
    content1Text3_Portrait: {
      color: 'white',
      
      fontSize: 20,
    },
    
    content1Button_Portrait: {
      color: 'white',
      backgroundColor: '#fdbd35',

      fontSize: 20,
      fontWeight: 'bold',

      borderWidth: 1,
      borderColor: '#fdbd35',
      borderRadius: 10,

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },

background2_Portrait: {
  width: '100%',
  height: innerHeight,

  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',

  padding: 40,
},
  content2_Portrait: {
    width: '50%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
    content2Text1_Portrait: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    
    content2Text2_Portrait: {
      fontSize: 18,

      textAlign: 'justify',
    },
    
    content2Button_Portrait: {
      color: '#00aaec',
      backgroundColor: 'white',

      fontSize: 20,
      fontWeight: 'bold',

      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },

background3_Portrait: {
  width: '100%',
  height: innerHeight * 1.2,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  padding: 40,
},
  content3_Portrait: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
    content3Text1_Portrait: {
      color: 'white',
      
      fontSize: 30,
      fontWeight: '900',
      textAlign: 'center',

      textShadowColor: '#fdbd35',
      textShadowRadius: 10,

      width: '100%',
    },
    
    step1_Portrait: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
      step_Portrait: {
        width: 50,
        height: 50,
      },
      
      content3Text2_Portrait: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold',
      },

    subStep1_Portrait: {
      width: '50%',
      
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },        
      lineToStep_Portrait: {
        backgroundColor: '#fdbd35',

        width: 2,
        height: 70,

        borderRadius: 2,
        
        marginLeft: 25,
        marginRight: 25,
      },
      content3Text3_Portrait: {
        fontSize: 18,

        textAlign: 'justify',
      },
    
    content3Button_Portrait: {
      color: 'white',
      backgroundColor: '#fdbd35',

      fontSize: 20,
      fontWeight: 'bold',
      
      borderWidth: 1,
      borderColor: '#fdbd35',
      borderRadius: 10,
      
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },

background4_Portrait: {
  width: '100%',
  height: innerHeight,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
},
  content4_Portrait: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
    content4Text1_Portrait: {
      color: '#fdbd35',
      
      fontSize: 30,
      fontWeight: '900',
    },
    
    content4Text2_Portrait: {
      fontSize: 20,
    },
    
    content4Button_Portrait: {
      color: 'white',
      backgroundColor: '#00aaec',

      fontSize: 20,
      fontWeight: 'bold',

      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,

      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },

footer_Portrait: {
  width: '100%',
  height: innerHeight * 1.2,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
},
  footerContent_Portrait: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    padding: 40,
  },
    idpLogo_Portrait: {
      width: 100,
      height: 100,
    },
    
    footerContent1_Portrait: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
      footerContent1Text1_Portrait: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold',
      },
      
      footerContent1Text2_Portrait: {
        color: 'white',

        fontSize: 18,
      },
    
    footerContent2_Portrait: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
      footerContent2Sub_Portrait: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      },
        footerContent2SubText1_Portrait: {
          color: 'white',
          
          fontSize: 20,
          fontWeight: 'bold',
        },

        footerContent2SubText2_Portrait: {
          color: 'white',
          
          fontSize: 18,
        },
        
        footerContentIcons_Portrait: {
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        },
          iconFb_Portrait: {
            color: 'white',
            backgroundColor: 'none',
            
            fontSize: 30,
            
            width: 60,
            height: 60,

            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 60,

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          
          iconYt_Portrait: {
            color: 'white',
            backgroundColor: 'none',
            
            fontSize: 30,
            
            width: 60,
            height: 60,

            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 60,

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
    
    footerContent3_Portrait: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
      footerContent3Text1_Portrait: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold',
      },
      footerContent3Text2_Portrait: {
        color: 'white',

        fontSize: 18,
      },

popUpBackground_Portrait: {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},
  popUp_Portrait: {
    backgroundColor: 'white',
    
    borderRadius: 10,
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,

    padding: 40,
  },
    popUpClose_Portrait: {
      fontSize: 20,
      
      alignSelf: 'flex-end',
    },
    
    popUpText_Portrait: {
      color: '#00aaec',

      fontSize: 20,
      fontWeight: 'bold',
    },
    
    popUpInput_Portrait: {
      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,
      
      width: 300,

      fontSize: 18,

      padding: 10,
    },
    
    popUpButton_Portrait: {
      color: 'white',
      backgroundColor: '#00aaec',
      
      fontSize: 20,
      fontWeight: 'bold',
      
      borderWidth: 1,
      borderColor: '#00aaec',
      borderRadius: 10,
      
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
    },
});