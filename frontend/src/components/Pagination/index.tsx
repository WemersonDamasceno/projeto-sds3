import { BiArrowToLeft, BiArrowToRight, BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { SalePage } from "types/sale";

type Props = {
    page: SalePage,
    onPageChange: Function
}
 
function Pagination({ page, onPageChange }: Props) {
    return (
        <div>
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.number === 0 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(0)}><BiArrowToLeft /></button>
                    </li>
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() =>
                            onPageChange(page.number - 1)
                        }><BiCaretLeft />Back </button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() =>
                            onPageChange(page.number + 1)
                        }>Next<BiCaretRight/></button>
                    </li>
                    <li className={`page-item ${page.number === page.totalPages - 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.totalPages - 1)}> <BiArrowToRight /></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;