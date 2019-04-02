import axios from 'axios'


export const getNamePosition = (region) => {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDzWxLHYJLLYIbuUtC6TgK7dbOeWJY7fAs`)
}
