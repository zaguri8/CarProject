import { useLocation, useParams } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import { translate } from "../Form"

const CarDetails = () => {

    const { cars } = useAppContext()
    const { carId } = useParams()

    if (!cars) return <div>
        אין רכבים
    </div>
    const car = cars.find(c => c._id === carId)
    if (!car) return <div>
        רכב לא נמצא
    </div>

    return <div>
        {Object.keys(car).map(entry => <div>
            <div>
                <h3>{translate(entry[0])}</h3>
                {typeof (entry[1]) === 'object' ? <div>
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
export default CarDetails