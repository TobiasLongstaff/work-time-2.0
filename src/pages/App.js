import React from 'react'
import Cronometro from '../components/cronometro/Cronometro'
import TablaContainer from '../components/tabla/TablaContainer'
import NewContainer from '../components/new/NewContainer'

function App() {
    return (
        <div className="container">
            <nav>
                <h2>Work Time v2.0</h2>
            </nav>
            <div className="container-pagina">
                <TablaContainer/>
                <div className="container-right">
                    <Cronometro/><br/>
                    <NewContainer/>                      
                </div>
            </div>                  
        </div>
    );
}

export default App;
