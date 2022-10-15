import React from 'react'
import styles from './blockui1.module.css'

interface BlockUi1Props {
    text? : string;
    color1? : string;
    color2? : string;
    percentage? : number;
}
function  BlockUi1(props: BlockUi1Props) {
  return (
    <div className={styles.container}>
        <div className={styles.row_chartbar}>
            <div className={styles.column_left} style={{background: props.color1}} >
                <span className={styles.text}>{props.text}</span>
            </div>
            <div className={styles.column_right}>
                <div className={styles.column_percent_left} style={{background: props.color2, width:`${props.percentage}%`}}>
                    <span>{props.percentage}%</span>
                </div>
                <div className={styles.column_percent_right}></div>
            </div>
        </div>      
    </div>
  )
}

export default BlockUi1