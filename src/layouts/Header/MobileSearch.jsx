import { Slide } from "@mui/material";
import { forwardRef } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function MobileSearch({ searchMobileSearch, setSearchMobileSearch }) {
    return (
        <Dialog
            fullScreen
            open={searchMobileSearch}
            onClose={() => setSearchMobileSearch(!searchMobileSearch)}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Typography sx={{ flex: 1 }} variant="h6" component="div">
                        <img src={require("assets/Brand/gbsLogoHighRes.png")} alt="logo" width={80} />
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setSearchMobileSearch(!searchMobileSearch)}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="p-3">
                <div className="input-group shadow rounded border">
                    <SearchInput />
                </div>
            </div>
            <SearchResult />
        </Dialog>
    )
}

export default MobileSearch