import styles from '../style'
import Button from './button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY}`}>
      <div>
        <h2>Try Our Service Today!</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div>
        <Button />
      </div>
    </section>
  )

export default CTA