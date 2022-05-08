import styles from '../styles/Form.module.css'
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';


const Form = () => {
    
    const [state, handleSubmit] = useForm("xqknylvp");
        if (state.succeeded) {
            return (
                <div className={styles.messageSent}>
                    <h2>Message has been sent</h2>
                    <p>Thank you for your message!</p>
                    <p>We will get back to you as soon as possible.</p>
                    <Link href="/schilderijen">
                        <a>
                            <button>Back to Paintings</button>
                        </a>
                    </Link>
                </div>
            )
        }
  return (
    
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.fieldContainer}>
                <div>
                    <label htmlFor="full-name">Your Name:</label>
                </div>
                <input type="text" name="name" id="full-name" placeholder="First Last Name" required={true}/>
                <ValidationError 
                    prefix="Fullname" 
                    field="full-name"
                    errors={state.errors}
                    className={styles.errorMessage}
                />
            </div>
            <div className={styles.fieldContainer}>
                <div>
                    <label htmlFor="email">
                        Email Address
                    </label>
                </div>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="example@example.com"
                    required={true}
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className={styles.errorMessage}
                />
            </div>
            <div className={styles.textareaContainer}>
                <div>
                    <label htmlFor="message">
                        Message:
                    </label>
                </div>
                <textarea
                    id="message"
                    name="message"
                    required={true}
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className={styles.errorMessage}
                />
                <button type="submit" disabled={state.submitting}>
                    Send
                </button>
            </div>
        </form>
  )
}

export default Form