import styled from 'styled-components';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  SafeAreaContainer: {backgroundColor: '#564215', flex: 1},
});
export const Separator = styled.View(({}) => ({
  paddingHorizontal: responsiveNumbers.sixteenScale,
}));
export const BrandLogo = styled.Image.attrs({})({
  width: responsiveNumbers.sixtyFiveScale,
  height: responsiveNumbers.twentySixScale,
  resizeMode: 'stretch',
});

export const Container = styled.View(({}) => ({
  paddingTop: responsiveNumbers.fifteenScale,
  width: '100%',
}));
export const ContainerItems = styled.View(({}) => ({
  flexDirection: 'row',
  alignItems: 'center',
}));
export const Title = styled.Text.attrs(({}) => ({
  numberOfLines: 1,
}))(({}) => ({
  fontFamily: 'SFProText-Bold',
  color: theme.colors.textDark,
  fontSize: responsiveNumbers.seventeenScale,
  fontWeight: '700',
  letterSpacing: -0.24,
  lineHeight: responsiveNumbers.twentyScale,
  flex: 1,
}));

export const ContainerRow = styled.View(({}) => ({
  justifyContent: 'center',
  width: '68%',
  paddingBottom: responsiveNumbers.seventeenScale,
}));
export const ContainerCard = styled.View(({}) => ({
  flexDirection: 'row',
  backgroundColor: theme.colors.white,
  justifyContent: 'space-between',
  width: '100%',
}));
export const ContainerIcon = styled.View(({color}) => ({
  flexDirection: 'row',
  width: '100%',
  height: responsiveNumbers.thirtyEightScale,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
}));

export const SpaceIcon = styled.View(() => ({
  width: responsiveNumbers.sixtyFiveScale,
  alignItems: 'center',
  justifyContent: 'center',
}));
export const Status = styled.Text(({Color}) => ({
  paddingLeft: responsiveNumbers.tenScale,
  paddingTop: responsiveNumbers.fiveScale,
  fontFamily: 'SFProText-Regular',
  color: Color,
  fontSize: responsiveNumbers.elevenScale,
  fontWeight: '500',
  letterSpacing: -0.25,
  lineHeight: responsiveNumbers.thirteenScale,
}));

export const DateText = styled.Text(({}) => ({
  fontFamily: 'SFProDisplay-Regular',
  color: theme.colors.textDark,
  fontSize: theme.fontSizes[0],
  fontWeight: '700',
  letterSpacing: -0.2,
  lineHeight: responsiveNumbers.seventeenScale,
}));
export const ItemText = styled.Text(({Status}) => ({
  fontFamily: 'SFProDisplay-Regular',
  color:
    Status === 'canceled'
      ? theme.colors.dangerRed
      : theme.colors.greenLightText,
  fontSize: theme.fontSizes[0],
  fontWeight: '400',
  letterSpacing: -0.2,
  lineHeight: responsiveNumbers.seventeenScale,
}));
