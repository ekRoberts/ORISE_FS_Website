import React, {useState} from 'react';
import {Box, ImageList, ImageListItem, Modal} from '@mui/material'

const images = [];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

function importAll(r) {
  r.keys().forEach((key) => images.push(key));
  console.log(images)
}

importAll(require.context('./lichenPhotographs', false, /\.(png|jpe?g|svg)$/));

export default function GalleryContent({hidden}) {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const handleOpen = (src) => {
        setSelectedImg({src, width: null, height: null});
        setOpen(true);
    }

    const handleClose = () => { 
        setSelectedImg(null);
        setOpen(false);
    }

    const handleImageLoad = (event) => {
        setSelectedImg((prev) => ({
          ...prev,
          width: event.target.width,
          height: event.target.height,
        }));
      };

    return (

        <Box hidden={hidden}>
            <ImageList variant="masonry" cols={3} gap={15}>
                {images.map((image) => (
                    <ImageListItem key={image} onClick={() => handleOpen(image)}>
                        <img
                            src={`./lichenPhotographs/${image}`}
                            alt={`./lichenPhotographs/${image}`}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {selectedImg && (<Modal
                open={open}
                onClose={handleClose}
                slotProps={{
                    backdrop: {
                        onClick: handleClose,
                    },
                }}
            >
                <Box sx={{
                    ...style,
                    maxWidth: '95%',
                    maxHeight: '95%',
                    overflow: 'auto',
                }}>
                    <img
                        src={`./lichenPhotographs/${selectedImg.src}`}
                        onLoad={handleImageLoad}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                        }}
                    />
                </Box>
            </Modal>
            )}
        </Box>
    );
}