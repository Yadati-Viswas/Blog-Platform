import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Heading({children,className, ...rest}){
    const finalClassNames = twMerge(classNames(
        'my-5 flex p-10',
        className
    ));
    
    return(
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
}
export default Heading;