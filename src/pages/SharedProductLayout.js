import React from 'react'
import { Outlet } from 'react-router-dom'

export const SharedProductLayout = () => {
  return (
    <>
    <h4>Products</h4>
    <Outlet />
    </>
  )
}
