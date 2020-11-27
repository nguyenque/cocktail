import {showLoading} from './toggleLoading.js'

const fetchDrinks = async (url)=> {
  showLoading()
try {
const response = await fetch(url)
const data = response.json()
return data
} catch {
throw new Error("can not get data from that url")
}
}
export default fetchDrinks


