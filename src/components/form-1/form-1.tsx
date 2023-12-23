import { st, classes } from './form-1.st.css';

export interface Form1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Form1 = ({ className }: Form1Props) => {
    return <div className={st(classes.root, className)}>








        <li className={classes.itm}>Image: <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" /></li>
        <li className={classes.itm}>Link: <a href="/">https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg</a> </li>
        <li className={classes.itm}>Form: <form className={classes.itm}><label>First name:</label><br /><input type="text" /><br /><label>Last name:</label><br /><input type="text" /><br /><br /><input type="submit" value="Submit" /></form></li>
        <li className={classes.itm}>Lanel:<label>Label1</label></li>
        <li className={classes.itm}>textarea:<textarea /></li>
        <li className={classes.itm}>fileinput:<input type="file" /></li>
        <li className={classes.itm}>checkbox:<input type="checkbox" /></li>
        <li className={classes.itm}>Button:<button>Button</button>
        </li>

    </div>;
};
