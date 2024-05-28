import Column1 from './Column1'
import Col2 from './Trello/Col2'
import Col3 from './Trello/Col3'

function Trello() {
    return (
        <div className='flex items-center gap-5'>
            <Column1></Column1>
            <Col2></Col2>
            <Col3></Col3>
        </div>
    )
}

export default Trello