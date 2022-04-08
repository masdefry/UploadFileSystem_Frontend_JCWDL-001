import React from 'react'
import {Modal, ModalBody} from 'reactstrap'
import axios from 'axios'

// Import CreateModal
import { CreateModal } from '../Components/CreateModal'

class LandingPage extends React.Component{
    state = {
        modalOpen: false,
        data: null
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/upload/getproduct')
        .then((res) =>{
            
            this.setState({data: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onSwitchImage = (index, val, idx) => {
        let newData = this.state.data 
        newData[index].mainImage = val
        
        this.setState({data: newData})
    }

    render(){
        return(
            <div>
                <div className="container px-5 py-5">
                    {/* Navbar */}
                    <div className="row">
                        <div className="col-6">
                            <h3>
                                Data Products
                            </h3>
                        </div>
                        <div className="col-6 text-right">
                            <CreateModal />
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    {/* Card Layout */}
                    <div className ='row'>
                        {
                            this.state.data?
                                this.state.data.map((value, index) => {
                                    return(
                                        <div className='col-4'>
                                            {/* Card Content */}
                                            <div className="row card rounded-0 mx-1 px-3 py-3" style={{width: '18rem', position: 'absolute'}}>
                                                
                                                {/* Main Image */}
                                                <img src={'http://localhost:5000/'+value.mainImage.path} className="card-img-top" sytle={{width: 300, height:240}}/>
                                                <div className="row justify-content-center">
                                                    <input type="button" value="Edit Image" onClick={() => this.setState({modalOpen: true})} className="btn btn-warning rounded-0" style={{position: 'relative', bottom: '50px', width: '100px', opacity: 0.9}} />
                                                </div>
                                                
                                                {/* Others Images */}
                                                <div className='row mt-2'>
                                                    {
                                                        value.images.map((val, idx) => {
                                                            return(
                                                                <div className ='col-4'>
                                                                    <img src={'http://localhost:5000/' + val.path} onClick={() => this.onSwitchImage(index, val)} className="card-img-top" sytle={{width: 300, height:240}} 
                                                                    />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                {/* Detail Produk */}
                                                <div className="card-body">
                                                    <div className='d-flex justify-content-between'>
                                                        <h5 className="card-title">{value.name}</h5>
                                                        <h5 className="card-title">Rp{value.price}</h5>
                                                    </div>
                                                    <h6 className="card-title mt-n2">Name</h6>
                                                    <p className="card-title" style={{fontSize: 14}}>{value.stock} Stok Tersedia</p>                                    
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary rounded-0 w-100">Detail Product</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            :
                                'Loading'
                        }
                    </div>
                </div>

                <Modal toggle={() => this.setState({modalOpen: false})} isOpen={this.state.modalOpen}>
                    <ModalBody>
                        <div className="px-3">
                            <div className="row justify-content-center">
                                <div className="col-12 d-flex justify-content-center align-items-center border border-primary" style={{width: this.state.previewImage? '100%':null, height: this.state.previewImage? '100%':'100px'}}>
                                    Image Preview
                                </div>
                                <div className="col-6 mt-3">
                                    <div>
                                        <input type="file" accept="image/*" ref={e => this.files = e} style={{display: 'none'}} />
                                        <input type="button" value="Choose File" onClick={() => this.files.click()} className="btn btn-warning" />
                                    </div>
                                </div>
                                <div className="col-6 mt-3 d-flex align-items-center">
                                    No File Choosen
                                </div>
                                <div className="col-12">
                                    Error Message
                                </div>
                                <div className="col-12 mt-3">
                                    <input type="button" value="Submit" className="btn btn-primary w-100" />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default LandingPage