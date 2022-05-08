import Layout from '../components/Layout'
import ContactComponent from '../components/ContactComponent'

const Contact = () => {
  return (
    <Layout page="Contact">
      <div className="contentContainer">
        <h1>Contact</h1>
        <ContactComponent />
      </div>

    </Layout>
  )
}

export default Contact