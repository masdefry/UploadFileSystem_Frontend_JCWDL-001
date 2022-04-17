import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

class SkeletonLoading extends React.Component{
    render(){
        return(
            <SkeletonTheme baseColor="grey" highlightColor="red">
                <p>
                    <Skeleton count={3} />
                </p>
            </SkeletonTheme>
        )
    }
}

export default SkeletonLoading