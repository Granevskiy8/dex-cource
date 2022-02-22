import styled from "styled-components";

const Table = styled.table`
    background: #FFFFFF;
    border: 0.5px solid #9C9C9C;
    border-radius: 0px 0px 10px 10px;
    width: 1140px;
    color: #707070;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    border-collapse: collapse;
`;
const TableName = styled.caption`
    background: #FFFFFF;
    border: 0.5px solid #9C9C9C;
    border-radius: 10px 10px 0px 0px;
    text-align: left;
    padding: 14px 0px 14px 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
`;
const Row = styled.tr`border: 0.5px solid #9C9C9C;`;
const RowTitle = styled(Row)`height: 30px;`;
const PlayerCol = styled.th`
    width: 60%;
    text-align: left;
    display: flex;
    align-items: center;
    img {padding-right: 10px;}
    p {
        margin: 0;
        color: #9C9C9C;
        font-size: 11px;
        line-height: 18px;
    }
`;

function Tab() {
    return (
        <Table>
            <TableName>Roster</TableName>
            <RowTitle>
                <th>#</th>
                <PlayerCol>Player</PlayerCol>
                <th>Height</th>
                <th>Weight</th>
                <th>Age</th>
            </RowTitle>
            <Row>
                <td>10</td>
                <PlayerCol>
                    <img src="/assets/img/bol-bol.png" alt="Player"/>
                    <div>
                        Bol Bol
                        <p>Defender</p>
                    </div>
                </PlayerCol>
                <td>218 cm</td>
                <td>100 kg</td>
                <td>21</td>
            </Row>
            <Row>
                <td>18</td>
                <PlayerCol>
                    <img src="/assets/img/bol-bol.png" alt="Player"/>
                    <div>
                        Sasha Gra
                        <p>Centerforward</p>
                    </div>
                </PlayerCol>
                <td>178 cm</td>
                <td>90 kh</td>
                <td>23</td>
            </Row>
        </Table>
    )
}

export default Tab;