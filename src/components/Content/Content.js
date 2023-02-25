import classes from './Content.module.css'
const Content = (props) => {
    return (
        <div className={classes.content}>
            <h3>{props.title}</h3>
        </div>
    )
}
export default Content