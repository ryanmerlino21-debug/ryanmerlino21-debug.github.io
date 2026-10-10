import profile from './profile.js'
import './index.css'

export default function App() {
  return (
    <>
      <header className="site-header">
        <h1>{profile.name}</h1>
      </header>
      <main />
      {profile.links.length > 0 && (
        <footer className="site-footer">
          <ul>
            {profile.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </>
  )
}
