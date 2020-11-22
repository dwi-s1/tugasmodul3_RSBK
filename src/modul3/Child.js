import React, { Component } from "react";
class Child extends Component {
    // tepat dibawah deklarasi class Child
    state = {
        angka: 0
    }
    // kode berikutnya...
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Angka sebelumnya: ${prevState.angka}`)
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
                <h1>Penambah Angka</h1>
                <button onClick={this.tambahAngka}>Tambah 1 Angka</button>
                <br />
                <span>{this.state.angka}</span>
            </div>
        );
    }
}
export default Child;