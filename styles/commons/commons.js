import styled from "@emotion/styled";

// 배경
export const Gradient = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    background: #ffffff;
    background: 
        radial-gradient(at 51.6% 14.2%, #e8b3d4 0px, transparent 60%),
        radial-gradient(at 90.4% 24.8%, hsl(55, 100%, 93%) 0px, transparent 50%),
        radial-gradient(at 56.7% 94.1%, #c3ebbc 0px, transparent 50%),
        radial-gradient(at 3.4% 90.7%, hsl(44, 68%, 75%) 0px, transparent 50%),
        radial-gradient(at 89.2% 69.4%, #ccf0e9 0px, transparent 50%),
        radial-gradient(at 14.2% 24.3%, hsl(349, 69%, 76%) 0px, transparent 60%) 
        no-repeat center;
    background-size: cover;
    z-index: -1;
`

// 노이즈 효과
export const Noise = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-image: url('https://i.ibb.co/x3TCktM/645cbb8ec449398255b76326-noise.gif');
    background-position: 0 0;
    background-size: auto;
    pointer-events: none;
    opacity: 0.05;
    transition: opacity .2s cubic - bezier(.445, .05, .55, .95);
    visibility: visible;
`