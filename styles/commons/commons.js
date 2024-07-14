import styled from "@emotion/styled";

export const Noise = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('https://i.ibb.co/x3TCktM/645cbb8ec449398255b76326-noise.gif');
    background-position: 0 0;
    background-size: auto;
    pointer-events: none;
    opacity: 0.05;
    transition: opacity .2s cubic - bezier(.445, .05, .55, .95);
    visibility: visible;
`