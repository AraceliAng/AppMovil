import React, { Component } from 'react';
import imgLogo from '../../assets/m.jpg';
import Carousel from 'react-native-banner-carousel';

export default class Banner extends Component{
    state ={
        data:[
            {
                "id" : 1,
                "title" : "Transportes Muciño",
                "imagePath": imgLogo,
            },
        ]
    };
    render(){
        let {data}= this.state;
        return(
            <Carousel
                titleColor={'#ffffff'}
                height={350}
                data={data}
                navigationType={"bars"}
                navigationColor={'#ffffff'}
                navigation={true}
            />
        )
    }
}