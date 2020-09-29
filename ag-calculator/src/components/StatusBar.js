import React from 'react'
import "../assets/css/StatusBar.css"

function StatusBar(status) {
    let widthAndHight = 60
    
    return (

        <div class="status-bar">
           
                <span class="dot" style={{width:widthAndHight, height:widthAndHight, borderRadius:widthAndHight/2,marginLeft:widthAndHight*-0.2}}>
                    <h2 style ={{fontSize:widthAndHight*0.6,color:"#B3B842"}}>1</h2>
                    </span>
                <div class="rectangle" style={{width:widthAndHight*2, height:widthAndHight/4 , marginLeft:widthAndHight*-0.2 }}></div>
                <span class="dot" style={{width:widthAndHight, height:widthAndHight, borderRadius:widthAndHight/2,marginLeft:widthAndHight*-0.2}}>
                     <h2 style ={{fontSize:widthAndHight*0.6}}>2</h2>
                </span>
                <div class="rectangle" style={{width:widthAndHight*2, height:widthAndHight/4,marginLeft:widthAndHight*-0.2 }}></div>
                <span class="dot" style={{width:widthAndHight, height:widthAndHight, borderRadius:widthAndHight/2,marginLeft:widthAndHight*-0.2}}>
                    <h2 style ={{fontSize:widthAndHight*0.6}}>3</h2>
                </span>
            
        </div>
    );
}
export default StatusBar;