import { Component } from "react";
import React from "react";
import Child from "./Child";
import Web from "./Web";
import Modul3 from "./Modul3";
class Parent extends Component {
    state = {
        komponenMuncul: true,
        komponenMuncul1: false,
        komponenMuncul2: false
    }
    ubahKomponenMuncul = () => {
        this.setState((state) => {
            return { komponenMuncul: !this.state.komponenMuncul }
        })
    }
    ubahKomponenMuncul1 = () => {
        this.setState((state) => {
            return { komponenMuncul1: !this.state.komponenMuncul1 }
        })
    }
    ubahKomponenMuncul2 = () => {
        this.setState((state) => {
            return { komponenMuncul2: !this.state.komponenMuncul2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponenMuncul ? <Child /> : ''}
                <button onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Hilangkan' : 'Munculkan'} Penambah Angka!</button>
                <br></br>
                {this.state.komponenMuncul1 ? <Web /> : ''}
                <button onClick={this.ubahKomponenMuncul1}>{this.state.komponenMuncul1 ? 'Hilangkan' : 'Munculkan'} Kelompok!</button>
                <br></br>
                {this.state.komponenMuncul2 ? <Modul3 /> : ''}
                <button onClick={this.ubahKomponenMuncul2}>{this.state.komponenMuncul2 ? 'Hilangkan' : 'Munculkan'} Tugas Modul 3!</button>
            </div>
        );
    }
}
export default Parent;