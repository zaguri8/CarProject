import { useState } from "react"
export default function AddCar() {
    const car = {
        isAgent: 0,
        customerType: 1
    };
    const onInputChanged = (evt, key) => {
        car[key] = evt.target.value;
    }
    return(
        <div className="createcar">
             <h2>ניהול רכבים</h2>
             <form>
             <label>קוד דגם </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'modelCode');
                    }}
                />
                <label>נפח מנוע  </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'engineCapacity');
                    }}
                />
                <label>סוג גיר  </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'chalkType');
                    }}
                />
                <label>מספר שילדה  </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'shieldNumber');
                    }}
                />
                <label>ק"מ </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'km');
                    }}
                />
                <label> מחיר השתתפות עצמית </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'participationPrice');
                    }}
                />
                
                <label> תעריף חודשי להשכרה </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'flyMonthly');
                    }}
                />
                <label> תעריף יומי להשכרה </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'dailyRate');
                    }}
                />
                <label>הגבלת ק"מ  </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'kmLimit');
                    }}
                />
                <label> מחיר ק"מ נוסף </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'additionalKmPrice');
                    }}
                />
                <label> תאריך עליה לכביש </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'dateGoOnTheRoad');
                    }}
                />
                <label>תאריך תוקף רישוי </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'licenseEffectiveDatee');
                    }}
                />
                <label> תאריך תוקף ביטוח </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'InsuranceValidityDatee');
                    }}
                />
                <label> מחיר מחירון </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'priceListPrice');
                    }}
                />
                <label> שם המוכר </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'sellerName');
                    }}
                />
                <label> טלפון המוכר </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'sellerPhone');
                    }}
                />
                <label> מחיר מכירה </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'sellingPricee');
                    }}
                />
                <label> כמות מפתחות </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'amountKeys');
                    }}
                />
                <label> מספר קודנית </label>
                <input
                    type="text"
                    required
                    onChange={(evt)=>{
                        onInputChanged(evt , 'codeNumber');
                    }}
                />
             </form>
        </div>
    )


}