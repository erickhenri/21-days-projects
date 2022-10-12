import './styles.css'
import Earth from './assets/earth.png'
import Ovni from './assets/ovni.png'

export function HelloWord() {
    return (
        <div className="day1">
            <img src={Earth} alt="" className="earth" />
            <div className="ovniArea">
                <img src={Ovni} alt="" className="ovni" />
                <div className="helloWord">
 
                    <h1>
                        Hello word
                    </h1>
                </div>
            </div>
        </div>
    )
}