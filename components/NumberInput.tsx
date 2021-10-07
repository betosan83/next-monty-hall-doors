import styles from "../styles/NumberInput.module.css"

interface NumberInputProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.numberInput}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <div className={styles.btn} onClick={dec}>-</div>
                <div className={styles.btn} onClick={inc}>+</div>
            </div>
        </div>
    )
}