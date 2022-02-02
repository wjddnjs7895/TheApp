import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';

function ListBox(props) {
    const tailRadius = props.id === 34 ? 10 : 0;

    return(
        <View style = {{
            ...styles.boxStyle,
            borderBottomRightRadius : tailRadius, 
        }}>
            <Text>
            </Text>
        </View>
    )
}

const CalendarScreen = () => {
    const day = ["","월", "화", "수", "목", "금"];
    const period = [
        "1교시",
        "2교시",
        "3교시",
        "4교시",
        "5교시",
        "6교시",
        "7교시",
    ];
    const data = [];
    const listBox = [];
    for (let i = 0; i < 7; i++) {
        data.push([]);
        for (let j = 0; j < 5; j++) {
            data[i].push(i*5+j)
        }
    }

    for(let i = 0; i < 6; i++) {
        const headWidth = i === 0 ? Dimensions.get('window').width * 0.1 : Dimensions.get('window').width * 0.15;
        const headBorder = i === 0 ? 1 : 0.4;
        const headRadius = i === 0 ? 10 : 0;
        const tailRadius = i === 5 ? 10 : 0;
        listBox.push(
            <View 
                style = {{
                    ...styles.dayStyle, 
                    borderRightWidth : headBorder,
                    borderTopLeftRadius : headRadius,
                    borderTopRightRadius : tailRadius,
                    width : headWidth,
                }} 
                key = {day[i]}>
                <Text 
                    style = {{
                        fontFamily : 'KOTRA_HOPE_TTF',
                        color : colors.white,
                    }}
                >
                    {day[i]}
                </Text>
            </View>
        );
    }

    for (let i = 0; i < 7; i++) {
        const headRadius = i === 6 ? 10 : 0;
        listBox.push(
            <View style = {{borderBottomLeftRadius : headRadius, ...styles.periodStyle}} key = {period[i]}>
                <Text 
                    style = {{
                        fontFamily : 'KOTRA_HOPE_TTF',
                        fontSize : 15,
                    }}
                >
                    {period[i]}
                </Text>
            </View>
        )
        listBox.push(data[i].map((data) => 
            <ListBox 
                key = {data.toString()}
                value = {data}
                id = {data}
            />
        ));
    }

        
    return(
        <View style = {{
            alignItems : 'center',
            justifyContent : 'center',
        }}>
            <View style = {{width : Dimensions.get('window').width * 0.85}}>
                <View style = {styles.buttonContainerStyle}>
                   <TouchableOpacity
                        style = {styles.selectStyle}
                    >
                        <Image 
                            source = {require('../../assets/images/Logo_Arrow_Crimson.png')}
                            style = {{
                                width : Dimensions.get('window').width * 0.05,
                                height : Dimensions.get('window').width * 0.05,
                            }}
                        />
                        <Text style = {{color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 15, marginLeft : 5}}>
                            시간표 선택
                        </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity
                        style = {styles.buttonStyle}
                    >
                        <Image 
                            source = {require('../../assets/images/Logo_Plus_Crimson.png')}
                            style = {{
                                width : Dimensions.get('window').width * 0.05,
                                height : Dimensions.get('window').width * 0.05,
                            }}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity
                        style = {styles.buttonStyle}
                    >
                        <Image 
                            source = {require('../../assets/images/Logo_Delete_Crimson.png')}
                            style = {{
                                width : Dimensions.get('window').width * 0.05,
                                height : Dimensions.get('window').width * 0.05,
                            }}
                        />
                    </TouchableOpacity> 
                </View>
            </View>
            <View 
                style = {{
                    width : Dimensions.get('window').width * 0.85, 
                    height : Dimensions.get('window').width * 1.1,
                    borderRadius : 10, 
                    elevation : 5, 
                    backgroundColor : colors.white
                }}
            >                
                <View style = {styles.calendarStyle}>
                    {listBox}
                </View>
            </View>
            <View style = {{alignItems : 'center', marginTop : 30, marginBottom : 15,}}>
                    <TouchableOpacity
                        style = {styles.selectStyle}
                    >
                        <Image 
                                source = {require('../../assets/images/Logo_List_Crimson.png')}
                                style = {{
                                    width : Dimensions.get('window').width * 0.05,
                                    height : Dimensions.get('window').width * 0.05,
                                }}
                        />
                        <Text style = {{color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 15, marginLeft : 10}}>
                            정보 보기
                        </Text> 
                    </TouchableOpacity>
            </View>
            <View style = {{
                backgroundColor : '#F5F5F5',
                width : Dimensions.get('window').width,
                borderTopWidth : 1,
                borderColor : colors.gray,
                height : 100,
            }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxStyle : {
        borderWidth : 0.4,
        borderColor : colors.gray,
        width : Dimensions.get('window').width * 0.15,
        height : Dimensions.get('window').width * 0.15,
        alignItems : 'center',
        justifyContent : 'center',
    },
    dayStyle : {
        backgroundColor : colors.crimson,
        borderWidth : 0.4,
        borderColor : colors.gray,
        height : Dimensions.get('window').width * 0.05,
        alignItems : 'center',
        justifyContent : 'center',
    },
    periodStyle : {
        borderWidth : 0.4,
        borderRightWidth : 1,
        borderColor : colors.gray,
        width : Dimensions.get('window').width * 0.1,
        height : Dimensions.get('window').width * 0.15,
        alignItems : 'center',
        justifyContent : 'center',
    },
    calendarStyle : {
        flexDirection : "row",
        flexWrap : "wrap",
    },
    buttonContainerStyle : {
        flexDirection : "row",
        justifyContent : "flex-end",
        marginTop : Dimensions.get('window').height * 0.05,
        marginBottom : Dimensions.get('window').height * 0.026,
    },
    selectStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : "row",
        marginLeft : 5,
        marginRight : 5,
        elevation : 3,
        backgroundColor : colors.white,
        width : Dimensions.get('window').width * 0.27,
        height : Dimensions.get('window').width * 0.07,
        borderRadius : 20,
    },
    buttonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : "row",
        marginLeft : 5,
        marginRight : 5,
        elevation : 5,
        backgroundColor : colors.white,
        width : Dimensions.get('window').width * 0.07,
        height : Dimensions.get('window').width * 0.07,
        borderRadius : 100,
    },
})

export default CalendarScreen;