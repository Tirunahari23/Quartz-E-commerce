import { Box } from '@mui/material'
import Card from './Card'
import { mapSx } from './shopStyles'

interface IProps {
  list: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }[];
}
const MapItems = ({list}:IProps) => {

  return (
    <Box sx={mapSx.main}>
        {list?.map((item)=>(
            <Box key={item.id}>
                <Card url={item.thumbnail} url2={item.images[2]} price={item.price} title={item.title}/>
            </Box>
        ))}
      
    </Box>
  )
}

export default MapItems
