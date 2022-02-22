import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import InputSearch from "../../components/InputSearch/InputSearch";
import PlayersCard from "../../components/PlayersCard/PlayersCard";


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
    padding: 0px 80px 32px 80px;
`;

function Players() {
    return(
        <Wrapper>
            <ActionForm>
                <InputSearch/>
                <Link to="add">
                    <Button add>Add +</Button>
                </Link>
            </ActionForm>
            <Cards>
                <PlayersCard/>
                <PlayersCard/>
                <PlayersCard/>
                <PlayersCard/>
                <PlayersCard/>
                <PlayersCard/>
            </Cards>
        </Wrapper>
    )
}

export default Players