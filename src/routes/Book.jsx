import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxios from 'axios-hooks';
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Rating,
  Chip,
  CircularProgress,
} from '@mui/material';
import { defaultImageUrl } from './Books';
import ErrorPage from './ErrorPage';

function Book() {
  const { bookId } = useParams();

  const [{ data: book, loading, error }] = useAxios(
    `http://localhost:3000/books/${bookId}`
  );

  useEffect(() => {
    if (error) {
      console.error('Error fetching book:', error);
    }
  }, [error]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Box
        sx={{
          mx: 'auto',
          p: 2,
          maxWidth: 450,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Card>
          <CardMedia
            component="img"
            sx={{ height: 400, objectFit: 'contain' }}
            image={book.img ? book.img : defaultImageUrl}
            title={book.name}
            onError={(e) => {
              e.target.src = defaultImageUrl;
            }}
          />
          <Box sx={{ p: 2 }}>
            {book.genres.map((genre, i) => (
              <Chip
                key={i}
                label={genre}
                variant="outlined"
                size="small"
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
            <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
              {book.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {book.author}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {book.description}
            </Typography>
            <Rating name="read-only" value={book.ratevalue} sx={{ mb: 2 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
              <Link to={'/'} className="go-back">
                <Button variant="contained" color="primary">
                  Go Back
                </Button>
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Book;
