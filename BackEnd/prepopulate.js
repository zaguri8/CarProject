
const Manager = require('./models/Manager')
const Branch = require('./models/Branch')
const Car = require('./models/Car')
const Customer = require('./models/Customer')
const CarRental = require('./models/CarRental')

exports.populate = async () => {
    await Manager.deleteMany({})
    await Branch.deleteMany({})
    await Car.deleteMany({})
    await Customer.deleteMany({})
    await CarRental.deleteMany({})
    console.log("Deleted all collections")



    const manager = new Manager({
        manager_email: "efrataslan@gmail.com",
        manager_password: "123456",
        manager_passport_id: "59807511",
        manager_name: "Efrat",
        manager_protection_level: "0",
    })

    const branch = new Branch({
        branch_number: "2",
        branch_name: "Tel Aviv",
        branch_manager: manager._id,
    })


    const customer = new Customer({
        customer_first_name: "דסי",
        customer_last_name: "נאבול",
        customer_passport_id: 555333210,
        customer_phone: "0556502301",
        customer_email: "erann@gmail.com",
        customer_account_management_id: "666",
        customer_birth_date: "10.01.2000",
        customer_age: "22",
        customer_driver_license_id: "6533",
        customer_driver_licence_expiration_date: "10.09.2024",
        customer_street: "קקל",
        customer_city: "תל אביב",
        customer_postal_code: "522",
        customer_type: "פרטי",
        customer_company_name: "מכוניות דסי בעמ",
        customer_company_id: "33",
        payment_info: {
            card_number: "123123123",
            card_holder_name: "Ron",
            card_expiration_date: "22.02.2025",
            card_cvv: "840",
            comments: "empty"
        },
        license_image: "",
        passport_image: "",
        customer_branch: branch._id,
    })

    const car = new Car({
        car_license_number: 9722551,
        car_rented_by: customer._id,
        car_branch: branch._id,
        car_type: "פרטי",
        car_passkey: "1234",
        car_manufacturer: "קטן",
        car_model: "ישן",
        car_towing_company: "אבי גולד",
        car_model_id: "123",
        car_manufacture_year: "22/02/2023",
        car_color: "כסף",
        car_agent: {
            name: "רון",
            phone: "050-1234567",
            price: "1000"
        },
        car_engine_capacity: "5000",
        car_daily_price: "5000",
        car_monthly_price: "8000",
        car_fuel_type: "חדש",
        car_fuel: "פז",
        car_chassis_type: "ישן",
        car_license_fee: "4200",
        car_license_expiration: "09.2.2023",
        car_kilometrage: "60000",
        car_km_limit: "400",
        car_extra_km_price: "200",
        car_entry_date: "16.05.2019",
        car_deductible_price: "60",
        car_hand: "1",
        car_images: ["https://img.mako.co.il/2015/08/31/mazda6_b.jpg"]
    })


    const carRental = new CarRental({
        car_toll_driving: true,
        car_toll_price: "0",
        car_rental_has_waze: true,
        car_decoration: true,
        car_fuel_start: "200",
        car_fuel_end: "300",
        car_rental_customer: customer._id,
        car_rental_car: car._id,
        car_rental_branch: branch._id,
        car_rental_start_date: "16.05.2019",
        car_rental_end_date: "16.06.2019",
        car_rental_price: "0",
    })

    
    manager.branch = branch._id

    await manager.save()
    await branch.save()
    await car.save()
    await customer.save()
    await carRental.save()

}