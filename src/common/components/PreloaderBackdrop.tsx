import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import { useAppStateAPI } from '../appData/AppStateAPI';

const PreloaderBackdrop: React.FC = () => {
    const { showPreloader } = useAppStateAPI();

    return (
        <div>
            {/* <Backdrop
                sx={{ color: '#fff', zIndex:"9999" }}
                open={showPreloader}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </div>
    );
}
export default PreloaderBackdrop;
