import profile from './profile.js'
import ThemeToggle from './ThemeToggle.jsx'
import './index.css'

export default function App() {
  return (
    <>
      <ThemeToggle />
      <header className="site-header fade-in">
        <h1>{profile.name}</h1>
      </header>
      <main />
      {profile.links.length > 0 && (
        <footer className="site-footer fade-in">
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
