import styled from "styled-components";


const Container = styled.div`
    display: flex;
    gap: 24;
`

const Content = styled.div`
    flex: 5;
`

const VideoWrapper = styled.div`
    flex: 2;
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text}
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.span`
    color: ${({theme}) => theme.textSoft}
`
const Buttons = styled.div`
`
const Button = styled.div`
`

const Recomendation = styled.div`
    flex: 2;
`

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                <iframe
                    width="100%"
                    height="720"
                    src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,948,154 views • Jun 22, 2022</Info>
                    <Buttons>Buttons</Buttons>
                </Details>
            </Content>
            <Recomendation>
                Isi Rekomendasi
            </Recomendation>
        </Container>
    );
}
 
export default Video;