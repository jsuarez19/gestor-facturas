import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FacturaPage from './pages/FacturaPage'
import Navegacion from './components/Navegacion'

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navegacion/>}>
            <Route index element={<HomePage />}/>
            <Route path='factura/:numero_factura' element={<FacturaPage/>} />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}
