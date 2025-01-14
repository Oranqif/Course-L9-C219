import { useLocation } from "react-router-dom";

export default function Confirmation() {
    const { state } = useLocation()

    return (
        <div className="container">
            <h1>Thank you, {state.name}!</h1>
            <p>
                You're now registered for {state.course}. <br/>
                More details will be sent to {state.email}
            </p>
        </div>
    )
}