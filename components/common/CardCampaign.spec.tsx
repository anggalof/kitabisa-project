import  React from 'react';
import { render, screen } from '@testing-library/react';
import { formatCurrency } from "../../utils/formatter/currency";
import { expiredDate } from "../../utils/formatter/times";
import Campaign, { Props } from './CardCampaign';
import { mockData } from '../../service/mockData';


const DEFAULT_PROPS: Props  = {
    campaign: mockData[0],
};

const renderComponent = (props = {}) => {
  return {
    ...render(<Campaign {...DEFAULT_PROPS} {...props} />),
    props: {
      ...DEFAULT_PROPS,
      ...props,
    },
  };
};

test('shows the correct title', () => {
  renderComponent();
  expect(screen.getByText(DEFAULT_PROPS.campaign.title)).toBeInTheDocument();
});

test('shows the correct image', () => {
  const { getByAltText } = renderComponent();
    const imgElement = getByAltText(DEFAULT_PROPS.campaign.title);
    expect(imgElement).toHaveAttribute('src', DEFAULT_PROPS.campaign.image);
});

test('shows the correct donation received', () => {
  renderComponent();
  expect(screen.getByText(formatCurrency(DEFAULT_PROPS.campaign.donation_received))).toBeInTheDocument();
});

test('shows the correct campaigner', () => {
  renderComponent();
  expect(screen.getByText(DEFAULT_PROPS.campaign.campaigner)).toBeInTheDocument();
});

test('shows the correct donation expired', () => {
  renderComponent();
  expect(screen.getByText(expiredDate(DEFAULT_PROPS.campaign.expired))).toBeInTheDocument();
});

test('shows the correct donation target', () => {
  renderComponent();
  expect(screen.getByText(formatCurrency(DEFAULT_PROPS.campaign.donation_target))).toBeInTheDocument();
});
