import axios from "axios"

const baseUrl = "http://localhost:3001"
const signUp = (email, username, password, profile) => {
    return new Promise(async(resolve, reject) => {
        const body = {
            username: username,
            email: email,
            password: password,
            role: profile
        }
        await axios.post(`${baseUrl}/register`, body).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

const signIn = (email, password) => {
    return new Promise(async(resolve, reject) => {
        const body = {
            email: email,
            password: password,
        }
        await axios.post(`${baseUrl}/login`, body).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}


export {
    signUp,
    signIn
}