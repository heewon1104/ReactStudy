export default function UserInput({userValue, onChangeInput}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input type="number" value={userValue.initialInvestment} onChange={(event) => onChangeInput("initialInvestment",event.target.value)} required></input>
            </p>
            <p>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" value={userValue.annualInvestment} onChange={(event) => onChangeInput("annualInvestment",event.target.value)} required></input>
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>EXPECTED RETURN</label>
                <input type="number" value={userValue.expectedReturn} onChange={(event) => onChangeInput("expectedReturn",event.target.value)} required></input>
            </p>
            <p>
                <label>DURATION</label>
                <input type="number" value={userValue.duration} onChange={(event) => onChangeInput("duration",event.target.value)} required></input>
            </p>
        </div>
    </section>
}