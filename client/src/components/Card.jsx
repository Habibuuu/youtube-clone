import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    height: 202px;
`

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`

const Texts = styled.div``

const Title = styled.h1`
    font-size: 16px;
    weight: 500;
    color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0px;
`

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration: "none"}}>
            <Container>
                <Image src="https://i.ytimg.com/vi_webp/k3Vfj-e1Ma4/maxresdefault.webp" />
                <Details>
                    <ChannelImage src="https://avatars.githubusercontent.com/u/90148400?v=4" />
                    <Texts>
                        <Title>Ini judul title</Title>
                        <ChannelName>Bibuu Channel</ChannelName>
                        <Info>660,908 views • 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}
 
export default Card;