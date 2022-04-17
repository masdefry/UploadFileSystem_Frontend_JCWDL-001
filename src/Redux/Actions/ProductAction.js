import Axios from 'axios';

export const getAllProducts = () => {
    console.log('Triggerrr')
    return(dispatch) => {
        Axios.get('http://localhost:5000/upload/getproduct')
        .then((res) => {
            dispatch(
                {
                    type: 'GET_SUCCESS',
                    payload: { error: res.data.error, message: res.data.message, data: res.data.data }
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const insertProduct = (data, images) => {
    return(dispatch) => {
        // Validasi datanya harus lengkap
        if(!data.name || !data.price || !data.description || !data.weight || !data.stock){
            dispatch(
                {
                    type: 'INSERT_ERROR',
                    payload: { error: true, message: 'Data Not Complete!' }
                }
            )
        }

            let dataToSend = JSON.stringify(data)

            let fd = new FormData()
            fd.append('data', dataToSend)

            images.forEach((value) => {
                fd.append('images', value)
            })

            Axios.post('http://localhost:5000/upload/newproduct', fd)
            .then((res) => {
                alert('Upload Product Success!')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}