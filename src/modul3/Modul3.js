import React, { Component } from "react";
class Modul3 extends Component {
    // tepat dibawah deklarasi class Child
    state = {
        tugasmodul:0
    }
    // kode berikutnya...
    componentDidMount() {
        alert(`Tugas Modul 3 Triggred!`)
    }
    tambahtugas = () => {
        this.setState((state) => { return { tugasmodul: state.tugasmodul + 3 } })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Tugas Modul 3 : ${prevState.tugasmodul}`)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return window.confirm('Apakah anda yakin ?');
    }
    componentWillUnmount() {
        alert('I will be gone :(')
    }
    render() {
        return (
            <div>
                <h1>Tugas Modul 3</h1>
                <h2>Kelompok 43</h2>
                <button onClick={this.tambahtugas}>Ubah Tugas!</button>
                <br />
                <span>{this.state.tugasmodul}</span>
            </div>
        );
    }
}
export default Modul3;