import styled from "styled-components";

interface ErrorProps {

}

export const Error:React.FunctionComponent = (props: ErrorProps) => {
    return <Wrapper>
        Error Page
    </Wrapper>;
}

const Wrapper = styled.div`
    display:flex;
`;