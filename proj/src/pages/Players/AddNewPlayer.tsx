import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { CancelButton } from "../../components/CancelButton/CancelButton";
import Input from "../../components/Input/Input";
import SimpleSelect from "../../components/SelectSimple/SelectSimple";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1140px;
    height: 655px;
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


function AddNewPlayer() {
    return (
        <ContainerAdd>
        <Wrapper>
            <Title>
                <p>Players / Add new player</p>
            </Title>
            <Body>
                <AddPhoto>
                    <InputPhoto type="file" id="file" name="file"/>
                    <LabelPhoto htmlFor="file">
                        <img src="/assets/icons/add_photo.svg" alt="AddPhoto"/>
                    </LabelPhoto>
                </AddPhoto>
                <AddInfo>
                    <Container>
                        <Row>
                            <Input id="name" label="Name"/>
                        </Row>
                        <Row>
                            <SimpleSelect  id="position" label="Position"/>
                        </Row>
                        <Row>
                            <SimpleSelect  id="team" label="Team"/>
                        </Row>
                        <RowButton>
                            <Col>
                                <Input type="number" id="height" label="Height (cm)"/>
                            </Col>
                            <Col>
                                <Input type="number" id="weight" label="Weight (kg)"/>
                            </Col>
                        </RowButton>
                        <RowButton>
                            <Col>
                                <Input type="date" id="birthday" label="Birhday" />
                            </Col>
                            <Col>
                                <Input type="number" id="number" label="Number"/>
                            </Col>
                        </RowButton>
                        <RowButton>
                            <Col>
                                <CancelButton>Cancel</CancelButton>
                            </Col>
                            <Col>
                                <Button>Save</Button>
                            </Col>
                        </RowButton>
                    </Container>
                </AddInfo>
            </Body>
        </Wrapper>
        </ContainerAdd>
    )
}

export default AddNewPlayer;