import styles from "../styles/NumberInput.module.css"

interface NumberInputProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps) {

    return(
        <div className={styles.numberInput}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
        </div>
    )
}