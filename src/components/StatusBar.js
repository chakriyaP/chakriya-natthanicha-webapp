import React from 'react'
import "../assets/css/StatusBar.css"

function StatusBar({status}) {
    let widthAndHight = 60  

    return (
        <div className="status-bar">
                <span className="dot" style={{width:widthAndHight, height:widthAndHight, borderRadius:widthAndHight/2,marginLeft:widthAndHight*-0.2}}>
                    <h2 style ={{fontSize:widthAndHight*0.6},{ color:(status === "1") ? "#B3B842" : "#eeeeee"}}>1</h2>
                    </span>
                <div className="rectangle" style={{width:widthAndHight*2, height:widthAndHight/4 , marginLeft:widthAndHight*-0.2 }}></div>
                <span className="dot" style={{width:widthAndHight, height:widthAndHight, borderRadius:widthAndHight/2,marginLeft:widthAndHight*-0.2}}>
                     <h2 style ={{fontSize:widthAndHight*0.6}, { color:(status === "2") ? "#B3B842" : "#eeeeee"}}>2</h2>
                </span>
                <div className="rectangle" style={{width:widthAndHight*2, height:widthAndHight/4,marginLeft:widthAndHight*-0.2 }}></div>
                <span className="dot" style={{width:widthAndHight, height:widthAndHight, borderRadius:widthAndHight/2,marginLeft:widthAndHight*-0.2}}>
                    <h2 style ={{fontSize:widthAndHight*0.6},{ color:(status === "3") ? "#B3B842" : "#eeeeee"}}>3</h2>
                </span> 
        </div>
    );
}
export default StatusBar;