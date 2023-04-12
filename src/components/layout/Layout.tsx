import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BoxStyled, Wrapper, Main } from './Layout.styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <Main>
          <BoxStyled as={'section'}>
            <Outlet />
          </BoxStyled>
        </Main>

        <Footer />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
