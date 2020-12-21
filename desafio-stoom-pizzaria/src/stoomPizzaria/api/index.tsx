import axios from 'axios';

export const apiTypePasta = axios.create({
    baseURL: 'http://localhost:8080/pedidos/get-pastaType/'
})

export const apiPizzaSize = axios.create({
    baseURL: 'http://localhost:8080/pedidos/get-pizzaSize'
})

export const apiPizzaFilling = axios.create({
    baseURL: 'http://localhost:8080/pedidos/get-pizzaFilling'
})

export const apiPizzaSideDish = axios.create({
    baseURL: 'http://localhost:8080/pedidos/get-pizzaSideDish'
})

export const apiPizzaOfDay = axios.create({
    baseURL: 'http://localhost:8080/pedidos/get-pizzaOfDay'
})