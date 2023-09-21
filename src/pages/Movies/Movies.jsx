import { useState, useEffect, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchSearchMovie } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Quotation } from 'pages/Home/Home.styled';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const abortCtrl = useRef();

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMovie = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setIsError(null);

        const { results } = await fetchSearchMovie(query, {
          signal: abortCtrl.current.signal,
        });

        setMovies(results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && !isLoading && <p>No one movie</p>}
      <SearchForm />
      <Quotation>
        <strong>
          Life
          <br /> - is a series of choices.
        </strong>
        <br />
        <span>Michelle Nostradamus</span>
      </Quotation>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
