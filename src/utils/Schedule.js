import React from 'react';
import {Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

import Box from "../components/Box";
import DayBox from "../components/Box/DayBox";
import PeriodBox from "../components/Box/PeriodBox";

export const day = ["","월", "화", "수", "목", "금"];

export const period = [
    "1교시",
    "2교시",
    "3교시",
    "4교시",
    "5교시",
    "6교시",
    "7교시",
];

export function setData() {
    const data = [];
    for (let i = 0; i < 7; i++) {
        data.push([]);
        for (let j = 0; j < 5; j++) {
            data[i].push(i*5+j)
        }
    }
    return data;
}

export function setListBox(data) {
    const listBox = [];
    for(let i = 0; i < 6; i++) {
        const headWidth = i === 0 ? Dimensions.get('window').width * 0.1 : Dimensions.get('window').width * 0.15;
        const headBorder = i === 0 ? 1 : 0.4;
        const headRadius = i === 0 ? 10 : 0;
        const tailRadius = i === 5 ? 10 : 0;
        listBox.push(
            <DayBox 
                headBorder = {headBorder}
                headRadius = {headRadius}
                tailRadius = {tailRadius}
                headWidth = {headWidth}
                idx = {i}
                key = {day[i]}
            />
        );
    }
    for (let i = 0; i < 7; i++) {
        const headRadius = i === 6 ? 10 : 0;
        listBox.push(
            <PeriodBox headRadius = {headRadius} key = {period[i]}/>
        )
        listBox.push(data[i].map((data) => 
            <Box 
                key = {data.toString()}
                value = {data}
                id = {data}
                idx = {i}
            />
        ));
    }
    return listBox;
}