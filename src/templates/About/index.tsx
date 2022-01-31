import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        deserunt delectus tempora animi inventore amet autem dolore similique
        odio nemo? Esse vitae dolorum illo ex. Ipsa adipisci nam error debitis?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
