import React, { Component } from "react";
class Web extends Component {
    // tepat dibawah deklarasi class Child
    state = {
        kelompok: 0
    }
    // kode berikutnya...
    componentDidMount() {
        alert(`Kelompok 43 Triggred!`)
    }
    tambahKel = () => {
        this.setState((state) => { return { kelompok: state.kelompok + 43 } })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Kelompok: ${prevState.kelompok}`)
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
                <h1>Web Sederhana</h1>
                <h2>Kelompok 43</h2>
                <button onClick={this.tambahKel}>Ubah Kelompok</button>
                <br />
                <span>{this.state.kelompok}</span>
            </div>
        );
    }
}
export default Web;