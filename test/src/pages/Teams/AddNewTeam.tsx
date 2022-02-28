import { useCallback } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IAddTeam } from "../../api/dto/ITeam";
import { Button } from "../../components/Button/Button";
import { CancelButton } from "../../components/CancelButton/CancelButton";
import Input from "../../components/Input/Input";
import { useAppDispatch } from "../../hooks/redux";
import { addTeamThunk } from "../../modules/teams/TeamsThunk";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1140px;
    height: 565px;
    background: #FFFFFF;
    border-radius: 10px;
`;
const ContainerAdd = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 32px;
`;
const Title = styled.div`
    width: 100%;
    height: 69px;
    border-radius: 10px 10px 0px 0px;
    text-align: left;
    p {
        margin: 0;
        padding: 24px 0px 24px 32px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #E4163A;
    }
`;
const Body = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: center;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
`;
const AddPhoto = styled.div`
    width: 50%;
    padding-top: 48px;
`;
const AddInfo = styled.div`
    width: 50%;
    padding-top: 15px;
`;
const InputPhoto = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;
const LabelPhoto = styled.label`
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    border-radius: 10px;
    background-color: #9C9C9C;
    display: inline-block;
    width: 336px;
    height: 261px;
    cursor: pointer;
    img {
        padding-top: 93px;
    }
`;
const Row = styled.div`padding-top: 24px;`
const Container = styled.div`
    width: 366px;
    text-align: left;
`;
const RowButton = styled(Row)`
    display: flex;
    justify-content: space-between;
`;
const Col = styled.div`
    width: 171px;
`;



function AddNewTeam() {
    const dispatch = useAppDispatch();
    // const [name, setName] = useState('')
    // const [division, setDivision] = useState('')
    // const [conference, setConference] = useState('')
    // const [year, setYear] = useState(0)
    // const [imageUrl, setImageUrl] = useState('')

    const [data, setData] = useState({
        name: '',
        division: '',
        conference: '',
        foundationYear: 0,
        imageUrl: ''
    }, );
    const update = (e: any) => {
        setData({
          ...data,
          [e.target.name as string]: e.target.value
        });
      };

    const { teamId } = useParams<{ teamId: string }>();

    const saveTeam = async () => {
        await dispatch(addTeamThunk({...data}));
        console.log(data)
      }

    

    return (
        <ContainerAdd>
        <Wrapper>
            <Title>
                <p>Teams / Add new team</p>
            </Title>
            <Body>
                <AddPhoto>
                    <InputPhoto
                        type="file" 
                        id="file" 
                        name={"imageUrl"}
                        accept="image/svg, image/png" 
                        value={data.imageUrl}
                        onChange={update}/>
                    <LabelPhoto htmlFor="file">
                        <img src="/assets/icons/add_photo.svg" alt="AddPhoto"/>
                    </LabelPhoto>
                </AddPhoto>
                <AddInfo>
                    <Container>
                        <Row>
                            <Input 
                                id="name" 
                                label="Name"
                                value={data.name}
                                name={"name"}
                                onChange={update}/>
                        </Row>
                        <Row>
                            <Input 
                                id="division" 
                                label="Division"
                                value={data.division}
                                name={"division"}
                                onChange={update}/>
                        </Row>
                        <Row>
                            <Input 
                                id="conference" 
                                label="Conference"
                                value={data.conference}
                                name={"conference"}
                                onChange={update}/>
                        </Row>
                        <Row>
                            <Input 
                            id="year" 
                            label="Year of foundation"
                            type="number"
                            value={data.foundationYear}
                            name={"foundationYear"}
                            onChange={update}/>
                        </Row>
                        <RowButton>
                            <Col>
                                <CancelButton>Cancel</CancelButton>
                            </Col>
                            <Col>
                                <Button onClick={() => saveTeam()}>Save</Button>
                            </Col>
                            
                        </RowButton>
                    </Container>
                </AddInfo>
            </Body>
        </Wrapper>
        </ContainerAdd>
    )
}

export default AddNewTeam;