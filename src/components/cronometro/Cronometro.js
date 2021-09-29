import React from 'react'
import './cronometro.css'

var cronometro

class Cronometro extends React.Component 
{

    constructor(props) 
    {
        super(props)
        this.state =
        {
            time:
            {
                segundos: 0,
                minutos: 0,
                horas: 0
            },
            play: false,
            ico: 'uil uil-play',
        }        
    }

    iniciar = () =>
    {
        this.setState(
        {
            time: 
            {
                ...this.state.time,
                segundos: this.state.time.segundos + 1
            }
        }, () =>
        {
            console.log(this.state.time)
        })
    }

    handleIniciarCronometro = e =>
    {
        console.log(this.state.play)
        if(this.state.play === false)
        {
            this.setState(
            {
                play: true,
                ico: 'uil uil-pause',
            }, () =>
            {
                console.log(this.state.play)
            })

            cronometro = setInterval(this.iniciar, 1000)
        }
        else
        {
            this.setState(
            {
                play: false,
                ico: 'uil uil-play'
            }, () =>
            {
                console.log(this.state.play)
            })

            clearInterval(cronometro)
        }
        console.log('click');  
    }

    render() 
    {
        const { horas, minutos, segundos } = this.state.time
        return(
            <div className="container-cronometro">
                <h2>{horas}:{minutos}:{segundos}</h2>
                <div className="container-controles-cronometro">
                    <button type="button" className="btn-iniciar-cronometro" onClick={this.handleIniciarCronometro}>
                        <i className={this.state.ico}></i>
                    </button>
                    <button type="button" className="btn-reset-cronometro">
                        <i className="uil uil-corner-up-left"></i>
                    </button>
                </div>
            </div>         
        )        
    }
}

export default Cronometro




