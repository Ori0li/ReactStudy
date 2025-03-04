import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CardForm = ({ id, thumbnail, title, rating }) => {
  return (
    <>
      <Card key={id} sx={{ maxWidth: 320 }}>
        <CardMedia sx={{ height: 300 }} image={thumbnail} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.01}
            readOnly
          />
        </CardContent>
      </Card>
    </>
  );
};

export default CardForm;
