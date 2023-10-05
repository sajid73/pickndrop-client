import axios from "axios";

export const registerUser = async (user) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/user/signup`, user);
        if (res) return res.data.user;
    } catch (error) {
        console.log(error);
    }
};

export const addVehicle = async (vehicle) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/vehicle/add`, vehicle);
        if (res) return res.data.vehicle;
    } catch (error) {
        console.log(error);
    }
};

export const employeeList = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/user`);
        if (res) return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const vehicleList = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/vehicle`);
        if (res) return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const calculatePath = async () => {
    const { employee } = await employeeList();
    const vehicle = await vehicleList();
    const employees = {}
    const vehicles = {}
    employee?.forEach((element, _) => {
        employees[element.name] = {
            "zone": element.zone,
            "arrival": element.arrival
        };
    });
    // console.log(vehicle)
    vehicle.vehicles.forEach((element, _) => {
        vehicles[element.name] = {
            "capacity": element.capacity
        };
    });
    // console.log({ employees, vehicles })
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_PY_BACKEND}/calculate`, { employees, vehicles })
        // console.log('success')
        // console.log(res.data.result[0])
        if (res) return res.data.result[0];
    } catch (error) {
        console.log(error);
    }
}