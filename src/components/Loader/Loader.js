import {RotatingLines
} from  'react-loader-spinner'
import { WrapperOfLoader } from './Loader.styled'

export const Loader = () => {
        return (
        <WrapperOfLoader>
             <RotatingLines
            strokeColor="#301934"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
             /> 
        </WrapperOfLoader>
       
    );
  
  
};