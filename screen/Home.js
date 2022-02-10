import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../Navigators/AuthProvider';

export default function Home() {
  const {user} = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.text}>Home Page</Text>
      <View>
        <Text style={styles.text}>User Name: {user.displayName}</Text>
        <Text style={styles.text}>User Email : {user.email}</Text>
        <Text style={styles.text}>User Id : {user.uid}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 18},
});
