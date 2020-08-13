import React from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from './styles';

interface Props {
    tootleTheme(): void
}

const Header: React.FC<Props> = ({ tootleTheme }) => {
    const { colors, tittle } = React.useContext(ThemeContext)
    return (
        <Container>
            Theme Switcher

            <Switch
                onChange={tootleTheme}
                checked={tittle === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.25, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    )
}

export default Header;