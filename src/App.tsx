import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const App = () => {
  // const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  const loginHandler = () => {
    signInWithPhoneNumber(number);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: '#000', margin: 20}}>
          Phone Number:
        </Text>
        <TextInput
          style={{
            width: '90%',
            backgroundColor: '#eee',
            borderWidth: 1,
            marginBottom: 20,
          }}
          onChangeText={e => setNumber(e)}
        />
        <TouchableOpacity onPress={() => loginHandler()}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#7a7a7a',
            }}>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
