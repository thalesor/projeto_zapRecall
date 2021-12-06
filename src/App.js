import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import stories_data from './components/database/stories';

function App()
{
  const [stories, setStories] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(()=> {
    setStories(stories_data);
  },[stories])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredStories = stories.filter(story =>{
    return story.user.toLowerCase().includes(searchfield.toLowerCase());
  })

    return(
        <div className="root">
          <Navbar searchChange={onSearchChange}/>
          <Body stories={filteredStories}/>
          <Footer />
      </div>
    );
}

export default App;