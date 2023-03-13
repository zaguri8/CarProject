import { Children } from "react"
import './Form.css'

const translations = {
    "email": "אימייל",
    "password": "סיסמא",
    "car_license_number": "מספר לוחית רישוי",
    "car_image_1": "תמונה 1",
    "car_image_2": "תמונה 2",
    "car_image_3": "תמונה 3",
    "car_toll_driving":"אגרה",
    "car_rental_has_waze":"וויז",
    "car_decoration":"קישוט"
}
export const translate = (word) => translations[word] ?? word


const determineStyleForInputField = (field) => {
    return field.type === 'checkbox' ? 'cb' : ''
}
const Form = ({ fields, onSubmit }) => {

    const SplittedFields = () => {
        let splitFields = fields
        if (splitFields.length >= 7) {
            const splitted = fields.slice(0, Math.floor(splitFields.length / 2))
            const splitted2 = fields.slice(Math.ceil(splitFields.length / 2))
            return <div className="d_split form">
                <div className="split">
                    {Children.toArray(splitted.map(field => (
                        <div className={determineStyleForInputField(field)}>
                            <label>{translate(field.name)}</label>
                            <input type={field.type} required={field.required} />
                        </div>
                    )))}
                </div>
                <div className="split">
                    {Children.toArray(splitted2.map(field => (
                        <div className={determineStyleForInputField(field)}>
                            <label>{translate(field.name)}</label>
                            <input type={field.type} required={field.required} />
                        </div>
                    )))}
                </div>
            </div>
        }

        return <div className="form">
            {Children.toArray(fields.map(field => (
                <div className={determineStyleForInputField(field)}>
                    <label>{translate(field.name)}</label>
                    <input type={field.type} required={field.required} />
                </div>
            )))}
        </div>
    }
    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                let data = {}
                for (let i = 0; i < fields.length; i++) {
                    const field = e.target[i].value
                    data[fields[i].name] = field
                }
                onSubmit(data)
            }
        }>
            <SplittedFields />
            <button className="buttom-form" type="submit">שלח</button>
        </form>
    )
}

export default Form