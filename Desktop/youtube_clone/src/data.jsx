export const API_KEY = 'AIzaSyAdjUyHcZI6NdoUevInyR0lhs3KLGfqaIk';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    }else if(value >= 1000) {
        return Math.floor(value / 1000) + "K"
    }else {
        return value
    }
}