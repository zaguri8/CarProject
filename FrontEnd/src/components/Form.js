import { Children } from "react"

const Form = ({ fields, onSubmit }) => {
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
            {
                Children.toArray(fields.map(field => (
                    <div>
                        <label>{field.name}</label>
                        <input type={field.type} required={field.required} />
                    </div>
                )))
            }

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form