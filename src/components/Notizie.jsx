import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import foto from '../img/Studio-Ghibli.jpg'
import js from '../img/js_logo.png'
import marvel from '../img/marvel-snap.jpg'
import { HiOutlinePhoto } from 'react-icons/hi2'
import { ImNewspaper } from 'react-icons/im'
import { IoIosPeople } from 'react-icons/io'
import { BsYoutube, BsCalendarDate } from 'react-icons/bs'

const Notizie = () => {
    return (
        <div className='my-4'>
        <div className='section rounded-3 mx-auto p-3 w-50'>
            <InputGroup className="mb-4 px-4 mx-auto">
            <img className='rounded-circle me-3' src={foto} alt={foto} width={"45 px"} height={"45 px"}/>
                <Form.Control className='rounded-pill' placeholder="Avvia un post" aria-label="Avvia un post"/>
            </InputGroup>

        <div className='d-flex justify-content-around'>

            <div className='d-flex'>
                <HiOutlinePhoto className='fs-4 text-primary me-2'/>
                <p className='text-secondary'>Foto</p>
            </div>

            <div className='d-flex'>
                <BsYoutube className='fs-4 text-success me-2'/>
                <p className='text-secondary'>Video</p>
            </div>

            <div className='d-flex'>
                <BsCalendarDate className='fs-4 text-orange me-2'/>
                <p className='text-secondary'>Evento</p>
            </div>

            <div className='d-flex'>
                <ImNewspaper className='fs-4 text-danger me-2'/>
                <p className='text-secondary'>Scrivi un articolo</p>
            </div>  

        </div>


        </div>

        <hr className='w-50 mx-auto'></hr>

        <div className='section w-50 post mx-auto rounded'>
        <div className='d-flex p-3'>
            <div>
            <img className='me-3' src={js} alt={foto} width={"40 px"} height={"40 px"}/>
            </div>

            <div>
            <h6 className='mb-1'>Javascript</h6>
            <p className='text-secondary small mb-0'>Mairbek Zaitov • 3° e oltre</p>
            <p className='text-secondary small'>1 ora • <IoIosPeople/></p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            </div>
        </div>
            <img className='rounded-bottom' src={js} alt={foto} width={"100%"} height={"auto"}/>
        </div>

        </div>
    )
}

export default Notizie;