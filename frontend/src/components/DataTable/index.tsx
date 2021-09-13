import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate, formatMoeda } from "utils/format";
import { BASE_URL } from "utils/requests";
import {BiMoney, BiUserCheck, BiUser}  from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";

function DataTable() {
    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,

    })

    useEffect(() => {
        axios.get(BASE_URL + '/sales?page='+activePage+'&size=20&sort=date,desc')
            .then(res => {
                setPage(res.data);
            })
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Pagination page={page} onPageChange = {changePage}/>
            </div> 
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th><MdDateRange fontSize="large"/>Data</th>
                            <th><BiUser fontSize="large"/>Vendedor</th>
                            <th><BiUserCheck fontSize="large"/>Clientes visitados</th>
                            <th><AiFillSchedule fontSize="large"/>Negócios fechados</th>
                            <th><BiMoney fontSize="large"/>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{formatMoeda(item.amount)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default DataTable;