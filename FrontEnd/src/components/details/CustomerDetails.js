import { useLocation, useParams } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import { translate } from "../Form"

const CustomerDetails = () => {

    const { customers } = useAppContext()
    const { customerId } = useParams()

    if (!customers) return <div>
        אין לקוחות
    </div>
    const customer = customers.find(c => c._id === customerId)
    if (!customer) return <div>
        לקוח לא נמצא
    </div>

    return <div className="details">
        {Object.entries(customer).map(entry => <div>
            <div>
                <h3>{(entry[0])}</h3>
                {typeof entry[1] === 'object' ? <div>
                    {Object.keys(entry[1]).map(entry2 => <div>
                        <span>{translate(entry2[0])}</span>
                        <span>{entry2[1]}</span>
                    </div>)}
                </div> : <p>
                    {entry[1]}
                </p>}
            </div>
        </div>)}
    </div>
}

export default CustomerDetails