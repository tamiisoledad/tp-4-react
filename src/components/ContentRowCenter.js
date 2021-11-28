import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Routes ,Route} from 'react-router-dom'
import NonF from './NonF';

function ContentRowCenter(){
    return (
        <div className="row">
            
           <Routes>
            <Route path="/lastmovie" element={<LastMovieInDb/>}/>
            <Route path="/genres" element={<GenresInDb />}/>
            <Route element={<NonF/>}/>
            </Routes>
            

        </div>
    )
}

export default ContentRowCenter;