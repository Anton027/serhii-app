import { WrapLoader } from './Loader.styled';
import { MutatingDots } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <WrapLoader>
            <MutatingDots 
                height="100"
                width="100"
                color="#640980"
                secondaryColor= '#640980'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </WrapLoader>
    )
};