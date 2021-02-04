import styled from 'styled-components';
import video from '../img/video.mp4';
import Logo from './../../Header/Logo';

const BgContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 80vh;
    position:relative;
    z-index: 1;
`

const BgDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
`

// const styledh3 = styled.h3`
//     position: absolute;
//     font-size: 36px;
//     color: white;
//     top: 50%;
//     left: 10%;
// `

const styledLogo = styled(Logo)`
    position: absolute;
    font-size: 36px;
    color: white;
    top: 50%;
    left: 10%;
    z-index:1;
`


const Home = () => {
    return (
        <BgContainer>
            <BgDiv>
                <VideoBg autoPlay muted src={video} type="video/mp4" />
                <styledLogo>
                    <Logo />
                </styledLogo>
            </BgDiv>
        </BgContainer>

    );
}

export default Home;