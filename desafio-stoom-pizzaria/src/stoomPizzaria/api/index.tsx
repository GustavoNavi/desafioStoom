import axios from 'axios';

/**
 * @description get apis.
 */
export const apiTypePasta = axios.create({
    baseURL: 'http://localhost:8080/request/get-pastaType/'
})

export const apiPizzaSize = axios.create({
    baseURL: 'http://localhost:8080/request/get-pizzaSize'
})

export const apiPizzaFilling = axios.create({
    baseURL: 'http://localhost:8080/request/get-pizzaFilling'
})

export const apiPizzaSideDish = axios.create({
    baseURL: 'http://localhost:8080/request/get-pizzaSideDish'
})

export const apiPizzaOfDay = axios.create({
    baseURL: 'http://localhost:8080/request/get-pizzaOfDay'
})