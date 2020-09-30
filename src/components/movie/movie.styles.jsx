import styled from 'styled-components'


export const MovieContainer = styled.div`
    width: 250px;
    margin: 1rem;
    background-color: #373b69;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    position: relative;
    align-items:center;
    .movie-info {
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: space-between;
        h3 {
            margin: 0;
        }
        span{
            padding:0.3rem;
            border-radius: 5px;
            background-color:#22254b;
            font-weight:bold;
            color:${(props)=>props.color}
        }
    }
    img {
        width: 100%;
        heigth: 450px;
        object-fit:cover;
    }
    .movie-overview {
        position: absolute;
        padding: 1rem;
        background-color: #fff;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.4);
        bottom: 0;
        left: 0;
        right: 0;
        color: #22254b;
        overflow: auto;
        max-height: 100%;
        transform: translateY(calc(102%));
        transition: transform ease-in-out 0.3s;
    }
    &:hover {
        .movie-overview {
            transform: translateY(0%);
        }
    }

`