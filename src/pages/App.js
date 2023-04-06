import gitLogo from '../assets/github-mark-white.png';
import { Container } from '../pages/styles';

import Button from '../components/button'
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';
import { useState } from 'react';
import {api} from '../services/api';


function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
  
    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist){
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("")
        return;
      }
    }
      alert('Repositório não encontrado');

  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter((repo) => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo White with transparency" className='imgContainer'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo (e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo) => (<ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>))}
    </Container>
  );
}

export default App;
