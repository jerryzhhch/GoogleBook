import React from 'react';
import { View, Text } from 'react-native';
import { homeStyles as styles} from '../Styles/index';

const BookScreen = ({ navigation }: any) => {
    return (
        <View style={styles.wrapper}>
          <Text style={styles.bodyText}>Book List</Text>
        </View>
    );
};

export default BookScreen;
