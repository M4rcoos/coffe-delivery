import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <div className="flex h-28 justify-between bg-background px-40 py-8">
        <h1>HEADER</h1>
        <h1>HEADER</h1>
      </div>
      <Outlet />
    </div>
  )
}
