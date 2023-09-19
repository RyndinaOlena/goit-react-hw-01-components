import PropTypes from 'prop-types'
import css from 'transactions/transactions.module.css'
export const TransactionHistory = ({ transactions }) => {
    return <div className={css.transactionSection}><table className={css.transactionHistory}  >
        <thead className={css.thead}>
            <tr className={css.type}>
                <th className={css.th}>Type</th>
                <th className={css.th}>Amount</th>
                <th className={css.th}>Currency</th>
            </tr>
        </thead>
        <tbody className={css.tbody}>
            {transactions.map(({ id, type, amount, currency }) =>
                <tr key={id}>
                    <td className={css.td}>{type}</td>
                    <td className={css.td}>{amount}</td>
                    <td className={css.td}>{currency}</td>
                </tr>
            )}

        </tbody>
    </table >
    </div >
}
// TransactionHistory.propTypes = {
//     transactions: PropTypes.array(PropTypes.any)
// }