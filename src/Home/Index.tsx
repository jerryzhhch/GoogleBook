import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { homeStyles as styles} from '../Styles/index';

const HomeScreen = ({ navigation }: any) => {

    const onPress = () => {
        navigation.navigate("Book");
    };

    return (
        <View style={styles.wrapper}>
          <Text style={styles.bodyText}>Google Books</Text>
          <Pressable
            style={styles.button}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>Go</Text>
          </Pressable>
        </View>
    );
};

export default HomeScreen;
