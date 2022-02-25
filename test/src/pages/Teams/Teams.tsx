import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import InputSearch from "../../components/InputSearch/InputSearch";
import SelectCard from "../../components/SelectCard/SelectCard";
import TeamsCard from "../../components/TeamsCard/TeamsCard";
import { useAppDispatch} from "../../hooks/redux";
import '../../style/Pagination.css';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ActionForm = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px 80px 32px 80px;
`;
const Cards = styled.div`
    padding: 0px 80px 20px 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 24px;
`;
const Col = styled.div`
    flex-basis: 33.3%;
    min-width: 33.3%;
    display: flex;
    justify-content: center;
`;
const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px 0px 30px;
`;

function Teams() {
    const dispatch = useAppDispatch();

   

    const options = [
            { value: '6', label: '6' },
            { value: '12', label: '12' },
            { value: '24', label: '24' },
        ];
    return(
        <Wrapper>
            <ActionForm>
                <InputSearch/>
                <Link to="add">
                    <Button add>Add +</Button>
                </Link>
            </ActionForm>
            <Cards>
                {/* {JSON.stringify(teams, null, 2)} */}
                <Col>
                    <TeamsCard/>
                </Col>
                <Col>
                <   TeamsCard/>
                </Col>
                <Col>
                    <TeamsCard/>
                </Col>
                <Col>
                    <TeamsCard/>
                </Col>
                <Col>
                    <TeamsCard/>
                </Col>
                <Col>
                    <TeamsCard/>
                </Col>
            </Cards>
            <Pagination>
                <div>
                    <ReactPaginate
                        className="pagination" 
                        pageCount={14}
                        nextLabel=">"
                        previousLabel="<"
                        breakLabel="..."
                        pageRangeDisplayed={4}
                        marginPagesDisplayed={1}
                        breakClassName="pagination-item"
                        previousClassName="pagination-item"
                        pageClassName="pagination-item"
                        nextClassName="pagination-item"
                        activeClassName="active-pagination"
                        pageLinkClassName="pagination-link"
                        previousLinkClassName="pagination-link"
                        nextLinkClassName="pagination-link"
                        breakLinkClassName="pagination-link"
                    />
                </div>
                <div>
                    <SelectCard 
                    options={options}
                    defaultValue={options[0]}
                    />
                </div>
            </Pagination>
        </Wrapper>
    )
}

export default Teams