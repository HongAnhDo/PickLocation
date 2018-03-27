import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/Complete.css'
import {grey500} from 'material-ui/styles/colors';

import ic_back from '../images/ic_back_1x.png';
import ic_done from '../images/ic_done.png';
import icon_complete from '../images/ic_complete.png';


class ScreenComplete extends Component {
    render() {
        return (
            <div className = "containerComplete">
                <div className = "containerHeader">
                    <img className = "imgBack" src={ic_back} />

                    <div className ="middleHeader">
                        <img className = "imgMiddle" src={ic_done} />
                        <span className = "textMiddle" >Đặt xe thành công</span>
                    </div>
                    <div className ="rightMiddle">
                        Bước
                    <div className= "step">3/3</div>
                    </div>
                </div>

                <div className = "containerContent">
                    <img className = "imgTickGreen" src={icon_complete} />
                    <div className = "textLineFirst">Chúc mừng</div>
                    <div className = "textLineSecond">Cảm ơn quý khách đã sử dụng dịch vụ của</div>
                    <div className = "textLineThird">Dichungtaxi.com</div>

                    <button className = "buttonComeBack">Đặt xe chiều về</button>

                    <p className = "pCancelTrip"><span className = "textCancelTrip">Hủy chuyến</span></p>

                </div>

                <div className = "containerBottom">
                    <i className="zmdi zmdi-long-arrow-return" style={{ color: grey500, fontSize: 10, padding:'3px' }}></i>
                    <span className= "textBackBottom" >Quay lại trang chủ</span>
                </div>

            </div>


        );
    }
}

export default AppBarExampleIcon;