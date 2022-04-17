import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

class LandingPageSkeleton extends React.Component{
    render(){
        return(
            <SkeletonTheme baseColor="grey" highlightColor="white">
                <div className='col-4'>
                    {/* Card Content */}
                    <div className="row card rounded-0 mx-1 px-3 py-3" style={{width: '18rem', position: 'absolute'}}>
                        
                        {/* Main Image */}
                        
                            <Skeleton  width={250} height={230} duration={1} />
                        
                        <div className="row justify-content-center">
                            <Skeleton  width={150} height={30} duration={1} style={{position: 'relative', bottom: '50px', width: '100px', opacity: 0.9}} />
                        </div>
                        
                        
                        <div className='row mt-2'>
                            {/* {
                                value.images.map((val, idx) => {
                                    return(
                                        <div className ='col-4'>
                                            <img src={'http://localhost:5000/' + val.path} onClick={() => this.onSwitchImage(index, val)} className="card-img-top" sytle={{width: 300, height:240}} 
                                            />
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                        
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                {/* <h5 className="card-title">{value.name}</h5>
                                <h5 className="card-title">Rp{value.price}</h5> */}
                            </div>
                            <h6 className="card-title mt-n2">
                                <Skeleton  width={50} height={20} duration={1} />
                            </h6>
                            {/* <p className="card-title" style={{fontSize: 14}}>{value.stock} Stok Tersedia</p>                                     */}
                            <p className="card-text">
                                <Skeleton  width={220} height={90} duration={1} />
                            </p>
                            <Skeleton  width={220} height={30} duration={1} />
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    {/* Card Content */}
                    <div className="row card rounded-0 mx-1 px-3 py-3" style={{width: '18rem', position: 'absolute'}}>
                        
                        {/* Main Image */}
                        
                            <Skeleton  width={250} height={230} duration={1} />
                        
                        <div className="row justify-content-center">
                            <Skeleton  width={150} height={30} duration={1} style={{position: 'relative', bottom: '50px', width: '100px', opacity: 0.9}} />
                        </div>
                        
                        
                        <div className='row mt-2'>
                            {/* {
                                value.images.map((val, idx) => {
                                    return(
                                        <div className ='col-4'>
                                            <img src={'http://localhost:5000/' + val.path} onClick={() => this.onSwitchImage(index, val)} className="card-img-top" sytle={{width: 300, height:240}} 
                                            />
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                        
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                {/* <h5 className="card-title">{value.name}</h5>
                                <h5 className="card-title">Rp{value.price}</h5> */}
                            </div>
                            <h6 className="card-title mt-n2">
                                <Skeleton  width={50} height={20} duration={1} />
                            </h6>
                            {/* <p className="card-title" style={{fontSize: 14}}>{value.stock} Stok Tersedia</p>                                     */}
                            <p className="card-text">
                                <Skeleton  width={220} height={90} duration={1} />
                            </p>
                            <Skeleton  width={220} height={30} duration={1} />
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    {/* Card Content */}
                    <div className="row card rounded-0 mx-1 px-3 py-3" style={{width: '18rem', position: 'absolute'}}>
                        
                        {/* Main Image */}
                        
                            <Skeleton  width={250} height={230} duration={1} />
                        
                        <div className="row justify-content-center">
                            <Skeleton  width={150} height={30} duration={1} style={{position: 'relative', bottom: '50px', width: '100px', opacity: 0.9}} />
                        </div>
                        
                        
                        <div className='row mt-2'>
                            {/* {
                                value.images.map((val, idx) => {
                                    return(
                                        <div className ='col-4'>
                                            <img src={'http://localhost:5000/' + val.path} onClick={() => this.onSwitchImage(index, val)} className="card-img-top" sytle={{width: 300, height:240}} 
                                            />
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                        
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                {/* <h5 className="card-title">{value.name}</h5>
                                <h5 className="card-title">Rp{value.price}</h5> */}
                            </div>
                            <h6 className="card-title mt-n2">
                                <Skeleton  width={50} height={20} duration={1} />
                            </h6>
                            {/* <p className="card-title" style={{fontSize: 14}}>{value.stock} Stok Tersedia</p>                                     */}
                            <p className="card-text">
                                <Skeleton  width={220} height={90} duration={1} />
                            </p>
                            <Skeleton  width={220} height={30} duration={1} />
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        )
    }
}

export default LandingPageSkeleton