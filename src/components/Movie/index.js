import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_END_POINT = 'https://api.themoviedb.org/3';
const API_KEY = '5dd8930949e7c1cc9ceda25ad6ac8de5';


// class Movie extends React.Component {
//     state = {
//       title: '',
//       overview: '',
//     }

//     async componentDidMount() {
//       try {
//         const {
//           data: {
//             title,
//             overview,
//           },
//         } = await this.loadInfos();
//         this.setState({
//           title,
//           overview,
//         });
//       }
//       catch (e) {
//         console.log('e', e);
//       }
//     }

//     loadInfos = () => {
//       const movie_id = this.props.match.params.id;
//       console.log('movie:', movie_id);
//       const url = `${API_END_POINT}/movie/${movie_id}?api_key=${API_KEY}&language=fr`;
//       return axios.get(url);
//     }

//     render() {
//       return (
//         <div>
//           <h3>{this.state.title}</h3>
//           <p>{this.state.overview}</p>
//         </div>
//       );
//     }
// }

// export default Movie;


const Movie = ({ match }) => {
  console.log('match', match);
  const [values, setValues] = useState([{
    title: '',
  }, {
    overview: '',
  },
  ]);

  // useEffect(() => {
  //   const movieId = match.params.id;
  //   axios.get(`${API_END_POINT}movie/${movieId}?api_key=${API_KEY}&language=fr`)
  //     .then((res) => {
  //       console.log('creneaux des praticiens', res.data);
  //       setValues(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  useEffect(() => {
    const loadInfos = (url) => axios.get(url, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    try {
      const movieId = match.params.id;
      const url = `${API_END_POINT}movie/${movieId}?api_key=${API_KEY}&language=fr`;

      const { title, overview } = loadInfos(url);
      setValues({ title, overview });
    }
    catch (e) {
      console.log('e', e);
    }
  }, []);

  return (
    <div>
      <h3>{values.title}</h3>
      <p>{values.overview}</p>
    </div>
  );
};

export default Movie;
