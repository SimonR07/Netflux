import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_END_POINT = 'https://api.themoviedb.org/3';
const API_KEY = '5dd8930949e7c1cc9ceda25ad6ac8de5';

const styles = {
  root: {
    flexGrow: 1,
    position:'absolute'
  },
  title : {
    marginBottom:'2rem',
    fontSize:'6rem'
  },
  text:{
    display:'block',
    fontSize:'4rem',
    textAlign: 'justify'
  }
}

class Movie extends React.Component {
    state = {
      title: '',
      overview: '',
    }

    async componentDidMount() {
      try {
        const {
          data: {
            title,
            overview,
          },
        } = await this.loadInfos();
        this.setState({
          title,
          overview,
        });
      }
      catch (e) {
        console.log('e', e);
      }
    }

    loadInfos = () => {
      const movie_id = this.props.match.params.id;
      console.log('movie:', movie_id);
      const url = `${API_END_POINT}/movie/${movie_id}?api_key=${API_KEY}&language=en`;
      return axios.get(url);
    }

    render() {
      const classes = styles;
      return (
        <div style={classes.root}>
          <h3 style={classes.title}>{this.state.title}</h3>
          <p style={classes.text}>{this.state.overview}</p>
        </div>
      );
    }
}

export default Movie;


// const Movie = ({ match }) => {
//   console.log('match', match);
//   const [values, setValues] = useState([{
//     title: '',
//   }, {
//     overview: '',
//   },
//   ]);

//   useEffect(() => {
//     const movieId = match.params.id;
//     axios.get(`${API_END_POINT}/movie/${movieId}?api_key=${API_KEY}&language=fr`,
//       {
//         headers: {
//           'Access-Control-Allow-Origin': 'http://localhost:8080',
//           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//         },
//       })
//       .then((res) => {
//         console.log('creneaux des praticiens', res.data);
//         const values = res.data;
//         setValues(values);
//       })
//       .catch((e) => console.log(e));
//   }, []);

//   // useEffect(() => {
//   //   const loadInfos = (url) => axios.get(url, {
//   //     headers: {
//   //       'Access-Control-Allow-Origin': '*',
//   //       'Access-Control-Allow-Methods': 'GET, POST, PUT',
//   //     },
//   //   });
//   //   try {
//   //     const movieId = match.params.id;
//   //     const url = `${API_END_POINT}movie/${movieId}?api_key=${API_KEY}&language=fr`;
//   //     const { title, overview } = loadInfos(url);
//   //     setValues({ title, overview });
//   //   }
//   //   catch (e) {
//   //     console.log('e', e);
//   //   }
//   // }, []);

//   return (
//     <div>
//       <h3>{values.title}</h3>
//       <p>{values.overview}</p>
//     </div>
//   );
// };

// export default Movie;
