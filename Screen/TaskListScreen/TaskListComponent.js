import { Box, Button, Center, Heading, Input, TextArea, View, Text, Checkbox, VStack, HStack } from "native-base"
import { useEffect, useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
//import TaskDetail from "./TaskDetail.scss";
export default ({ navigation }) => {
    
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] =useState(false);
    const [open2, setOpen2] = useState(false);

    const [addDate, setAddDate] = useState();
    const [notify, setNotify] = useState();
    const [addDeadline, setAddDeadline] = useState();
    const [reuse, setReuse] = useState();
    const [description, setDescription] = useState();
    const styles = StyleSheet.create({
        button: {
           // backgroundColor: 'white',
            color: `'#1256F3'`,
            width: 280
        },
        icon: {
            fontSize: ''
        },
        view: {
            display: 'flex',
            flexDirection: 'row',
            color: '#11111',
            paddingTop: 20, 
            //paddingBottom: 10
        },
        text: {
            paddingLeft: 20,
            fontSize: 20
        }
    })
    return (
        <VStack w="100%">
            <View style={styles.view}>
                <Icon size={30} name="spinner"></Icon>
                <Text style={styles.text}>
                    Ngày của tôi
                </Text>
            </View>
            <View style={styles.view} >
                <Icon size={30} name="bell"></Icon>
                <Text style={styles.text} onPress={() => setOpen(!open)}>
                    Quan trọng
                </Text>
            </View>


            <View style={styles.view}>
                <Icon size={30} name="calendar"></Icon>
                <Text style={styles.text} onPress={() => setOpen1(!open1)}>
                    Đã lập kế hoạch
                </Text>
            </View>


            <View style={styles.view}>
                <Icon size={30} name="spinner"></Icon>
                <Text style={styles.text}>
                    Lặp lại
                </Text>
            </View>

            <View style={styles.view}>
                <Icon size={30} name="spinner"></Icon>
                <Text style={styles.text}>
                    Đã giao cho tôi
                </Text>
            </View>
            <View style={styles.view}>
                <Icon size={30} name="spinner"></Icon>
                <Text style={styles.text}>
                    Tác vụ
                </Text>
            </View>
        </VStack>
    )
}