import { useState } from "react"

export default function AddCustomer() {
    //const [data , setData] = useState({});
    // const copmpanyNameChanged = (evt) => {
    //     setData({
    //         ...data,
    //         companyName : evt.target.value
    //     })
    // }

    const customer = {
        isAgent: 0,
        customerType: 1
    };

   const onAgentSelectChanged = (evt) => {
        customer.isAgent = evt.target.value == '0' ? false : true;
    }

    const onCustomerTypeChanged = (evt) => {
        customer.customerType = Number(evt.target.value);
    }


    const onInputChanged = (evt, key) => {
        customer[key] = evt.target.value;
    }




    return (
        <div className="create">
            <h2>לקוח חדש</h2>
            <form>
                <label>סוכן</label>
                <select onChange={onAgentSelectChanged}>
                    <option value="0">לא</option>
                    <option value="1">כן</option>
                </select>
                <label>סוג לקוח</label>
                <select onChange={onCustomerTypeChanged}>
                    <option value="1">עיסקי</option>
                    <option value="2">פרטי</option>
                </select>

                <label>שם חברה</label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'companyName');
                    }}
                />
                <label> מספר ח.פ</label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'numberHP');
                    }}
                />


                <label>שם פרטי</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'firstName');
                    }}
                />
                <label>שם משפחה</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'lastName');
                    }}
                />
                <label> ת.ז</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'id');
                    }}
                />
                <label>פלאפון נייד</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'mobilePhone');
                    }}
                />
                <label>טלפון</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'phone');
                    }}
                />
                <label>דוא"ל </label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'email');
                    }}
                />
                <label>כתובת </label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'address');
                    }}
                />
                <label>עיר </label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'city');
                    }}
                />
                <label>מיקוד</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'PostalCode');
                    }}
                />
                <label>תחום עיסוק </label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'LineOfBusiness');
                    }}
                />
                <label>תאריך לידה  </label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'DateOfBirth');
                    }}
                />
                <label>גיל</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'age');
                    }}
                />
            
                <label>מספר רישיון רכב</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'VehicleLicenseNumber');
                    }}
                />
                <label>מספר רישיון רכב</label>
                <input
                    type="text"
                    required
                    onChange={(evt) => {
                        onInputChanged(evt, 'DriverlicenseValidity');
                    }}
                />

                <button>הוסף לקוח חדש</button>

            </form>

        </div>
    )
}

