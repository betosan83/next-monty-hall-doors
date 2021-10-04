import Door from "../components/Door";
import Gift from "../components/Gift";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Door selected={true}></Door>
      <Door selected={false}></Door>
    </div>
  )
}
