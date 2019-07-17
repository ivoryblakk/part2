import React from 'react'
const Message = props => {
    const {success, fail} = props
    let message =null
    let style = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }

    if( success === null  && fail == null){
        let style ={}
        message = () =>  <div style ={style}> </div>;
    }else if( success !== null ){
        message = () => <div style ={style}> {success}</div>;
    }else if ( fail !== null ){
        style.color = 'red'
        message = () => <div style ={style}> {fail}</div>;
    }else {
        let style ={}
        message = () =>  <div style ={style}> </div>;
    }

    return(
        <div>
            {message()}
        </div>
    )

}

export default Message