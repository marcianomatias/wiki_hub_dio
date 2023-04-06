import React from 'react'

import { ItemContainer } from './styles';


function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <a href={repo.owner.html_url} className="repoUser"><p>{repo.full_name}</p></a>
      <p className='repoDescription'>{repo.description}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank" className="button">Ver repositório</a>
      <a href="#" rel="noreferrer" className="remove button" onClick={handleRemove}>Remover</a>
      <hr className='hr'/>
    </ItemContainer>
  )
}



export default ItemRepo;