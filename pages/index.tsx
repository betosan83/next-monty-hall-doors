import Card from "../components/Card";
import styles from "../styles/Form.module.css"


export default function Form() {

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c" >
          <h1>Monty Hall</h1>
        </Card>  
        <Card />
      </div>
      <div>
        <Card />
        <Card bgcolor="#28a085" />
      </div>
    </div >
  )
}
