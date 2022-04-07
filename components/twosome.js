import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Cake from '../images/cakes.png'

import styles from '/styles/Twosome.module.scss'

export default function Twosome(children) {
    console.log(children)

    return (
        <div className={module.twosomeContainer}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    height='150'
                    image="https://static.wixstatic.com/media/54f380_94d6d64f68984533b6e6ebcab0c34768~mv2.png/v1/fill/w_872,h_920,fp_0.50_0.50,usm_0.66_1.00_0.01,enc_auto/54f380_94d6d64f68984533b6e6ebcab0c34768~mv2.png"
                    alt={children.first.product}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {children.first.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {children.first.summary}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    height='150'
                    image="https://static.wixstatic.com/media/54f380_6ab7605ad6df4f6687bdb008e796e73c~mv2.jpg/v1/fill/w_720,h_446,fp_0.50_0.50,q_80,enc_auto/54f380_6ab7605ad6df4f6687bdb008e796e73c~mv2.jpg"
                    alt={children.second.product}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {children.second.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {children.second.summary}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>)
}