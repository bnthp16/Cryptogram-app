export const navDisable = (pathname) => {
  const navBar = document.getElementById('navbar')
  const navBarRes = document.getElementById('navbar-res')
  if(pathname === '/dashboard'){
    navBar.style.display='none'
    navBarRes.style.display='none'
  }
}