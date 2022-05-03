/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * The internal dependencies
 */
import {
  ContainerIcon,
  ContainerCard,
  ItemText,
  DateText,
  Title,
  Separator,
  Container,
  BrandLogo,
  Status,
  ContainerRow,
  SpaceIcon,
  ContainerItems,
  styles,
} from './styles';
import {formatDate} from '../../utils/dataHelper';
import {statusIconUtil} from '../../utils/order';
import CustonIcon from '../../ui/Icon';

const statusIcon = (status: any) => {
  const {nameIcon, nameColor, nameStatus, backgroundColor} =
    statusIconUtil(status);

  return (
    <ContainerIcon color={backgroundColor}>
      <CustonIcon name={nameIcon} color={nameColor} />
      <Status Color={nameColor}>{nameStatus}</Status>
    </ContainerIcon>
  );
};
const OrderSummaryHeader = ({item}) => {
  return (
    <ContainerCard>
      <Container>
        <ContainerItems>
          <Separator>
            <BrandLogo source={{uri: item.supplier?.logo}} />
          </Separator>
          <Title>{item.supplier?.name}</Title>
        </ContainerItems>
        <ContainerItems>
          <Separator>
            <SpaceIcon />
          </Separator>
          <ContainerRow>
            <DateText>
              {`${formatDate(item.created_at, 'd MMM')} | `}
              <ItemText Status={item.status}>
                {item.total_items_quantity}
              </ItemText>
            </DateText>
          </ContainerRow>
        </ContainerItems>
        {statusIcon(item.status)}
      </Container>
    </ContainerCard>
  );
};
OrderSummaryHeader.propTypes = {
  item: PropTypes.object,
};

export default OrderSummaryHeader;
