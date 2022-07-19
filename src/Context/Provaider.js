import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { createSession } from '../api/api';
import ConsumeContextData from './SatateDate'
import { toast } from 'react-toastify';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom'

const AppProvider = ({ children }) => {

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=0e7ecd94eb22d8726c6a740dc968161a&language=pt-BR&page=1"

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        (async () => {
            const req = await api.get('/')
            setUsers(req.data)
        })()
    }, [])

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }

        setLoading(false)
    }, [])

    useEffect(() => {
        (async() => {
            const filme = await axios.get(url)

            setFilmes(filme.data.results)
        })()
    }, [])

    const login = async (email, password) => {

        const response = await createSession(email, password)

        //console.log('login auth', response.data)

        const loggedUser = response.data.data.email
        const token = response.data.data.token
        const imagem = response.data.data.imagem
        const name = response.data.data.name
        //const token = response.data.data.

        //console.log(imagem)

        localStorage.setItem('user', JSON.stringify(loggedUser))
        localStorage.setItem('imagem', JSON.stringify(imagem))
        localStorage.setItem('name', JSON.stringify(name))
        localStorage.setItem('token', token)
        //localStorage.setItem('token', id)

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)

        setTimeout(() => {
            token ? toast.success("Login efetuado com sucesso, aguarde mais uns segubdos...") :
                toast.error("Usuario uo senha invalida tente novamente!")
        }, 2000)

    }

    const logout = () => {
        //console.log('Logout')
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('imagem')
        localStorage.removeItem('name')
        api.defaults.headers.Authorization = null;
    }

    return (
        <ConsumeContextData.Provider value={{ filmes, users, auth: !!user, user, loading, login, logout }}>
            {children}
        </ConsumeContextData.Provider>
    );
}

export default AppProvider;