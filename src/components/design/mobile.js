import Grid from "@material-ui/core/Grid";
import CanvasArea from "../canvas/area";
import DrawerMenu from "../menu/drawar";


export default function MobileView() {
    return(
        <Grid xs={12}>
        <DrawerMenu />
        <CanvasArea />
        </Grid>
    );
}