"use client";

import { Button } from "antd";
import styled from "styled-components";

const BaseButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: none;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

export default BaseButton;
