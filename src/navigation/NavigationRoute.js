import {Navigation} from "react-native-navigation";
import RegisterScreens from "./RegisterScreens";
import colors from '../../assets/colors/colors';

RegisterScreens();

export function pushMainRoute() {
    Navigation.setRoot({
        root : {
            bottomTabs : {
                id : 'BOTTOM_TABS',
                options : {
                    bottomTabs : {
                        backgroundColor : "#FFFFFF",
                        titleDisplayMode : 'alwaysHide',
                    }
                },
                children : [
                    {
                        stack : {
                            id : "USER_STACK",
                            children : [{
                                component : {
                                    id : "USER",
                                    name : "UserScreen",
                                }
                            }],
                            options : {
                                topBar : {
                                    leftButtons : [
                                        {
                                            icon : require("../../assets/images/Logo_User_Crimson.png"),
                                        }
                                    ],
                                    title : {text : "내 정보", color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 25,},
                                },
                                bottomTab : {
                                    icon : require("../../assets/images/Logo_User_Gray.png"),
                                    selectedIcon : require("../../assets/images/Logo_User_Crimson.png"),
                                }
                            }
                        }
                    },
                    {
                        stack : {
                            id : "SCHEDULE_STACK",
                            children : [{
                                component : {
                                    id : "SCHEDULE",
                                    name : "ScheduleScreen",
                                }
                            }],
                            options : {
                                topBar : {
                                    leftButtons : [
                                        {
                                            icon : require("../../assets/images/Logo_Schedule_Crimson.png"),
                                        }
                                    ],
                                    title : {text : "시간표", color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 25,},
                                },
                                bottomTab : {
                                    icon : require("../../assets/images/Logo_Schedule_Gray.png"),
                                    selectedIcon : require("../../assets/images/Logo_Schedule_Crimson.png"),
                                }
                            }
                        }
                    },
                    {
                        stack : {
                            id : "MAP_STACK",
                            children : [{
                                component : {
                                    id : "MAP",
                                    name : "MapScreen",
                                }
                            }],
                            options : {
                                topBar : {
                                    leftButtons : [
                                        {
                                            icon : require("../../assets/images/Logo_Map_Crimson.png"),
                                        }
                                    ],
                                    title : {text : "지 도", color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 25,},
                                },
                                bottomTab : {
                                    icon : require("../../assets/images/Logo_Map_Gray.png"),
                                    selectedIcon : require("../../assets/images/Logo_Map_Crimson.png"),
                                }
                            }
                        }
                    },
                    {
                        stack : {
                            id : "TIP_STACK",
                            children : [{
                                component : {
                                    id : "TIP",
                                    name : "TipScreen",
                                }
                            }],
                            options : {
                                topBar : {
                                    leftButtons : [
                                        {
                                            icon : require("../../assets/images/Logo_Tip_Crimson.png"),
                                        }
                                    ],
                                    title : {text : "팁", color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 25,},
                                },
                                bottomTab : {
                                    icon : require("../../assets/images/Logo_Tip_Gray.png"),
                                    selectedIcon : require("../../assets/images/Logo_Tip_Crimson.png"),
                                }
                            }
                        }
                    },
                    {
                        stack : {
                            id : "SETTING_STACK",
                            children : [{
                                component : {
                                    id : "SETTING",
                                    name : "SettingScreen",
                                }
                            }],
                            options : {
                                topBar : {
                                    leftButtons : [
                                        {
                                            icon : require("../../assets/images/Logo_Setting_Crimson.png"),
                                        }
                                    ],
                                    title : {text : "설 정", color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 25,},
                                },
                                bottomTab : {
                                    icon : require("../../assets/images/Logo_Setting_Gray.png"),
                                    selectedIcon : require("../../assets/images/Logo_Setting_Crimson.png"),
                                }
                            }
                        }
                    },
                ]
            }
        }
    });
}

export function pushLoginRoute() {
    //
}

export function pushApp() {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                        {
                        component: {
                            name: "App"
                        }
                    }
                ]
            }
        }
    });
}