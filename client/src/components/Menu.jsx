import styled from "styled-components"
import BibuTube from "../img/logo.png"
import { AccountCircleOutlined, ArticleOutlined, ExploreOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home, LibraryMusicOutlined, LiveTvOutlined, MovieOutlined, SettingsBrightnessOutlined, SettingsOutlined, SportsBasketballOutlined, SportsEsportsOutlined, SubscriptionsOutlined, VideoLibraryOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) =>theme.bgLighter};
    height: 100vh;
    color: ${({theme}) =>theme.text};
    position: sticky;
    top: 0px;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
    
    &:hover {
        background-color: ${({ theme }) => theme.soft};
    }
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) =>theme.soft};
`

const Login = styled.div``;
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) =>theme.textSoft};
    margin-bottom: 20px;
`


const Menu = ({ darkMode, setDarkMode }) => {
    const handleMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("mode", JSON.stringify(!darkMode));
    }

    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                    <Logo>
                        <Img src={BibuTube} />
                        BibuTube
                    </Logo>
                </Link>
                <Item>
                    <Home />
                    Home
                </Item>
                <Item>
                    <ExploreOutlined />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlined />
                    Subscriptions
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlined />
                    Library
                </Item>
                <Item>
                    <HistoryOutlined />
                    History
                </Item>
                <Hr/>
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to="signin" style={{textDecoration: "none"}}>
                        <Button>
                        <AccountCircleOutlined />
                            SIGN IN
                        </Button>
                    </Link>
                </Login>
                <Hr />
                <Title>BEST OF BIBUTUBE</Title>
                <Item>
                    <LibraryMusicOutlined />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlined />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlined />
                    Gaming
                </Item>
                <Item>
                    <MovieOutlined />
                    Movies
                </Item>
                <Item>
                    <ArticleOutlined />
                    News
                </Item>
                <Item>
                    <LiveTvOutlined />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlined />
                    Settings
                </Item>
                <Item>
                    <FlagOutlined />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlined />
                    Help
                </Item>
                <Item onClick={handleMode}>
                    <SettingsBrightnessOutlined />
                    { darkMode ? "Light" : "Dark" } Mode
                </Item>
            </Wrapper>
        </Container>
    );
}
 
export default Menu;