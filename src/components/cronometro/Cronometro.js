import React from 'react'
import './cronometro.css'
import soundSuccess from '../../sounds/success.wav'
import soundError from '../../sounds/error.wav'
import Cookies from 'universal-cookie'

var cronometro
const cookies = new Cookies();
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
        if(this.state.time.minutos === 59)
        {
            this.setState(
            {
                time: 
                {
                    ...this.state.time,
                    horas: this.state.time.horas + 1,
                    minutos: 0,
                    segundos: 0

                }
            })
        }

        if(this.state.time.segundos === 59)
        {
            this.setState(
            {
                time: 
                {
                    ...this.state.time,
                    minutos: this.state.time.minutos + 1,
                    segundos: 0

                }
            })
        }
        else
        {
            
            this.setState(
            {
                time: 
                {
                    ...this.state.time,
                    segundos: this.state.time.segundos + 1
                }
            })          
        }

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
            })

            this.audio = new Audio(soundSuccess)
            this.audio.play();
            cronometro = setInterval(this.iniciar, 1000)
        }
        else
        {
            this.setState(
            {
                play: false,
                ico: 'uil uil-play'
            })

            this.audio = new Audio(soundError)
            this.audio.play();

            clearInterval(cronometro)
            let horas = this.state.time.horas
            let minutos = this.state.time.minutos
            let segundos = this.state.time.segundos

            if(horas.toString().length !==  2) 
            {
                horas = '0'+horas
            }

            if(minutos.toString().length !==  2) 
            {
                minutos = '0'+minutos
            }

            if(segundos.toString().length !== 2) 
            {
                segundos = '0'+segundos
            }

            let tiempofinal = horas+':'+minutos+':'+segundos
            cookies.set('tiempo', tiempofinal, {path:'/'})
        }
    }

    hanbleReset = e =>
    {
        this.setState(
        {
            time: 
            {
                horas: 0,
                minutos: 0,
                segundos: 0,
            }
        })
    }

    render() 
    {
        let { horas, minutos, segundos } = this.state.time

        if(horas.toString().length !==  2) 
        {
            horas = '0'+horas
        }

        if(minutos.toString().length !==  2) 
        {
            minutos = '0'+minutos
        }

        if(segundos.toString().length !== 2) 
        {
            segundos = '0'+segundos
        }

        return(
            <div className="container-cronometro">
                <h2>{horas}:{minutos}:{segundos}</h2>
                <div className="container-controles-cronometro">
                    <button type="button" className="btn-iniciar-cronometro" onClick={this.handleIniciarCronometro}>
                        <i className={this.state.ico}></i>
                    </button>
                    <button type="button" className="btn-reset-cronometro" onClick={this.hanbleReset}>
                        <i className="uil uil-corner-up-left"></i>
                    </button>
                </div>
            </div>         
        )        
    }
}

export default Cronometro




