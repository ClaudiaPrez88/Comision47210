
export default function ItemListDrop({categoria}) {
    const links = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'Facebook', url: 'https://www.facebook.com' },
        { name: 'Twitter', url: 'https://www.twitter.com' }
      ];
  return (
    <>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {categoria}
          </a>
          
          
          <ul class="dropdown-menu">
            {links.map((link) => (
                <li>
                <a class="dropdown-item" href={link.url}>{link.name}</a>
                </li>
            ))}
        </ul>
        </li>
    </>
  )
}


  
