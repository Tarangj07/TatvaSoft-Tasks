import {Button} from '@material-ui/core';
import './style.css';
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme)=>({
    Container:{
        display: "flex"
    },
    subtitle:{
        // color: (props)=>props.color,
        // color: "gold",
        color: theme.palette.secondary.light,
        fontSize: "5em",
        textAlign: "left"
    }
}))

const FirstComponent = () => {
    const props = {
        color: "green"
    }
    const classes = useStyle(props);
    return (
        <div className={classes.container}
        // style={{
        //     display: "flex",
        //     placeItems: "center"
        // }}
        >
            <h1 className={classes.subtitle}
            // style={{
            //     fontSize: "2em",
            //     color: "red"
            // }}
            > 
            Welcome to material UI</h1>
            <Button variant="contained" color="primary">Get started</Button>
        </div>
    )
}

export default FirstComponent;