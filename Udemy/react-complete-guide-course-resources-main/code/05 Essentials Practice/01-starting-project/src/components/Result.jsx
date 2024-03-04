import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ userValue }) {
    const resultData = calculateInvestmentResults(userValue);
    console.table(resultData);
    const initialValue = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

    return <section>
        <table id='result'>
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {resultData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialValue;
                    const totalAmountIntered = yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountIntered)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </section>
}