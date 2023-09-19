import css from 'statistics/Statistics.module.css'
// import PropTypes from 'prop-types'
export const Statistics = ({ stats }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) =>
                <li className={css.item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentag}>{percentage}</span>
                </li>)
            }
        </ul>
    </section>
}
// Statistics.propTypes = {
//     id: PropTypes.string,
//     label: PropTypes.string,
//     percentage: PropTypes.number,
// }